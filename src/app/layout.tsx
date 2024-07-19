"use client"

import ThemeProvider from '@/theme/theme-provider'
import Confirmable from '@/components/confirmable'
import Init from './init'
import SideMenu from './side-menu'
import Store from '@/store'
import styles from './layout.module.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={styles.html} lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Cemboo</title>
      </head>
      <body className={styles.body} style={{ backgroundColor: 'black' }}>
        <div id="preloading" className={styles.preloading}>
          <div className={styles.circle}></div>
        </div>
        <Store>
          <ThemeProvider>
            <Init>
              <SideMenu />
              {children}
            </Init>
            <Confirmable
              ref={(ref) => Confirmable.setInstance(ref)}
            />
          </ThemeProvider>
        </Store>
      </body>
    </html>
  )
}

export default RootLayout
