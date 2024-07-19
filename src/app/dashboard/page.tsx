"use client"

import { Button } from 'antd'

import ScollablePage from '@/components/scollable-page'
import Container from '@/components/container'
import Space from '@/components/space'
import Loading from '@/components/loading'
import Text from '@/components/text'
import Box from '@/components/box'
import { moviesApi } from '@/store/movies/apis'
import styles from './page.module.scss'
import Banner from './banner'
import List from './list'

const { useGetMoviesQuery } = moviesApi

const Page = () => {
  return (
    <ScollablePage className={styles.page}>
      <Banner />
      <Space size={32} />
      <Box>
        <Space size={25} horizontal />
        <Text size="giant" bold>Adventure</Text>
      </Box>
      <Space size={20} />
      <List />
      <Space size={32} />
      <Box>
        <Space size={25} horizontal />
        <Text size="giant" bold>Drama</Text>
      </Box>
      <Space size={20} />
      <List />
      <Space size={32} />
      <Box>
        <Space size={25} horizontal />
        <Text size="giant" bold>Korea</Text>
      </Box>
      <Space size={20} />
      <List />
      <Space size={50} />
    </ScollablePage>
  )
}

export default Page
