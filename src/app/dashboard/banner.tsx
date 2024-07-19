"use client"

import { Button } from 'antd'
import {
  MenuOutlined,
} from '@ant-design/icons';

import Text from '@/components/text'
import Clickable from '@/components/clickable'
import Box from '@/components/box'
import Space from '@/components/space'
import styles from './page.module.scss'
import { useAppDispatch } from '@/hooks'
import { toggleMenu } from '@/store/actions'

const Banner = () => {
  const dispatch = useAppDispatch()

  const onToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <Box className={styles.banner} flexDirection="column" justifyContent="flex-end">
      <Clickable className={styles.menuButton} onClick={onToggleMenu}>
        <MenuOutlined style={{ fontSize: 40 }} />
      </Clickable>

      <Box padding={40} className={styles.bannerBottom} flexDirection="column" alignItems="flex-start">
        <Text size="enormous" bold>HARRY POTTER</Text>
        <Space size={20} />
        <Button size="large">Watch Now</Button>
      </Box>
    </Box>
  )
}

export default Banner
