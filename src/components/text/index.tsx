import React from 'react'
import classnames from 'classnames'

import styles from './text.module.scss'

export interface IText {
  className?: string
  size?: "tiny" | "small" | "large" | "big" | "huge" | "giant" | "enormous"
  link?: boolean
  light?: boolean
  underline?: boolean
  center?: boolean
  bold?: boolean
  roboto?: boolean
  gray?: boolean
  darkgray?: boolean
  red?: boolean
  primary?: boolean
  ellipsis?: boolean
  children?: React.ReactNode
  style?: any,
  color?: string,
  onClick?: (e: React.MouseEvent) => void,
}

const Text = ({
  className,
  children,
  link,
  underline,
  light,
  center,
  size,
  bold,
  roboto,
  gray,
  darkgray,
  red,
  primary,
  color,
  ellipsis,
  ...props
}: IText): JSX.Element => (
  <p
    style={{
      color,
      ...props.style
    }}
    className={classnames(
      styles.text,
      size ? styles[size] : '',
      {
        [styles.link]: link,
        [styles.underline]: underline,
        [styles.light]: light,
        [styles.center]: center,
        [styles.bold]: bold,
        [styles.roboto]: roboto,
        [styles.gray]: gray,
        [styles.darkgray]: darkgray,
        [styles.red]: red,
        [styles.primary]: primary,
        [styles.ellipsis]: ellipsis,
      },
      className
    )}
    {...props}
  >
    {children}
  </p>
)

export default Text
