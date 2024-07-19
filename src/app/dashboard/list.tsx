"use client"

import { useRef } from 'react'
import { Button } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import Text from '@/components/text'
import Box from '@/components/box'
import Clickable from '@/components/clickable'
import styles from './page.module.scss'
import { moviesApi } from '@/store/movies/apis'
import MovieModal from './movie-modal'

const { useGetMoviesQuery } = moviesApi

const List = () => {
  const { data: movies = [] } = useGetMoviesQuery()
  const movieModalRef = useRef<any>()

  return (
    <Box className={styles.list}>
      <Swiper
        freeMode
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Clickable onClick={() => movieModalRef.current?.open()}>
              <Box
                className={styles.item}
                style={{ backgroundImage: `url(${movie.thumbnailVertical})` }}
                flexDirection="column"
                justifyContent="flex-end"
              >

                <Box className={styles.itemBottom} alignItems="flex-end">
                  <Text size="giant" bold>{movie.title}</Text>
                </Box>
              </Box>
            </Clickable>
          </SwiperSlide>
        ))}
      </Swiper>
      <MovieModal ref={movieModalRef} />
    </Box>
  )
}

export default List
