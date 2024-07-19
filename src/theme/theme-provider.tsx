"use client"

import { ConfigProvider } from 'antd';

import './antd-override.scss'
import variables from './variables.module.scss'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: variables.primaryColor,
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default ThemeProvider;
