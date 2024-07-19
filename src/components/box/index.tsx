import React from 'react'
import classnames from 'classnames'

import styles from './box.module.scss'

interface IProps {
  style?: React.CSSProperties
  className?: string
  children: React.ReactNode
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around"
  alignItems?: "center" | "flex-start" | "flex-end"
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse"
  flex?: number | false
  width?: number
  zeroMinWidth?: boolean
  onClick?: () => void
  padding?: number
  borderWidth?: number
  borderRadius?: number
  backgroundColor?: string
}

const Box = ({
  className,
  children,
  justifyContent,
  alignItems,
  flexDirection,
  flex,
  width,
  zeroMinWidth, // often using for wraping ellipsis text
  padding,
  borderWidth = 0,
  borderRadius = 0,
  backgroundColor,
  style,
  ...props
}: IProps): JSX.Element => (
  <div
    {...props}
    className={classnames(
      styles.box,
      justifyContent && styles[`justify-content-${justifyContent}`],
      alignItems && styles[`align-items-${alignItems}`],
      flexDirection && styles[`flex-direction-${flexDirection}`],
      className, {
        [styles.zeroMinWidth]: zeroMinWidth
      }
    )}
    style={{
      ...(flex && { flex }),
      ...(width && { width }),
      ...(padding && { padding }),
      ...(borderWidth && { borderWidth }),
      ...(borderRadius && { borderRadius }),
      ...(backgroundColor && { backgroundColor }),
      ...style
    }}
  >
    {children}
  </div>
)

export default Box
