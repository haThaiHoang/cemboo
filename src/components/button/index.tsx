"use client"

import React from 'react'
import { Button as AntButton, ButtonProps } from 'antd'

import styles from './button.module.scss'

const Button = (props: ButtonProps) => {
  return <AntButton {...props} className={`${styles.button} ${props.className ?? ""}`} />
}

export default Button
