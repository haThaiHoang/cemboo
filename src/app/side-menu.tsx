import React from 'react'
import classnames from 'classnames'
import {
  CloseOutlined,
  PlayCircleOutlined,
  LogoutOutlined,
  QuestionOutlined,
  WarningOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';

import Box from '@/components/box'
import Text from '@/components/text'
import Space from '@/components/space'
import Clickable from '@/components/clickable'
import styles from './side-menu.module.scss'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { toggleMenu } from '@/store/actions'

const SideMenu = () => {
  const menuOpened = useAppSelector(state => state.ui.isMenuOpened)
  const dispatch = useAppDispatch()

  const onToggleMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <Box className={classnames(styles.sideMenu, { [styles.opened]: menuOpened })}>
      <Box flexDirection="column" padding={20} className={styles.sideMenuInner}>
        <Clickable onClick={onToggleMenu}>
          <CloseOutlined className={styles.closeButton} />
        </Clickable>
        <Space size={100} />
        <Clickable>
          <Box alignItems="center">
            <PlayCircleOutlined style={{ fontSize: 40 }} color="white" />
            <Space size={20} horizontal />
            <Text size="giant" bold>Play</Text>
          </Box>
        </Clickable>
        <Space size={20} />
        <Clickable>
          <Box alignItems="center">
            <CheckSquareOutlined style={{ fontSize: 40 }} color="white" />
            <Space size={20} horizontal />
            <Text size="giant" bold>Saved</Text>
          </Box>
        </Clickable>
        <Space size={20} />
        <Clickable>
          <Box alignItems="center">
            <WarningOutlined style={{ fontSize: 40 }} color="white" />
            <Space size={20} horizontal />
            <Text size="giant" bold>Report</Text>
          </Box>
        </Clickable>
        <Space size={20} />
        <Clickable>
          <Box alignItems="center">
            <QuestionOutlined style={{ fontSize: 40 }} color="white" />
            <Space size={20} horizontal />
            <Text size="giant" bold>Help</Text>
          </Box>
        </Clickable>
        <Space size={20} />
        <Clickable>
          <Box alignItems="center">
            <LogoutOutlined style={{ fontSize: 40 }} color="white" />
            <Space size={20} horizontal />
            <Text size="giant" bold>Logout</Text>
          </Box>
        </Clickable>
      </Box>
    </Box>
  )
}

export default SideMenu
