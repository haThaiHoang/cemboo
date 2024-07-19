import { createApi } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import camelcaseKeys from 'camelcase-keys'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'

import Toast from '@/components/toast'
import { TMockApi, MockApi } from './mock-api'

type RequestConfig = {
  mockData?: TMockApi<unknown>
  decamelizeData?: boolean
  toastError?: boolean
} & AxiosRequestConfig

type AxiosBaseQueryError = {
  status: number | undefined
  data: { error: string, error_code: string } | unknown
}

const baseQuery: BaseQueryFn<RequestConfig, unknown, AxiosBaseQueryError> = async ({
  url,
  method,
  data,
  params,
  mockData,
  decamelizeData = true,
  toastError = true,
}) => {
  try {
    if (mockData) {
      const result = await MockApi(mockData)

      return { data: camelcaseKeys(result as any, { deep: true }) }
    }

    const result = await axios({
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      method,
      data,
      params,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    })

    return { data: camelcaseKeys(result.data, { deep: true }) }
  } catch (axiosError) {
    const err = axiosError as AxiosError<{ error: string, error_code: string }>

    if (toastError) {
      let title = "Something went wrong"
      let message = `${err.response?.data?.error || ''}`

      if (err.response?.data?.error_code === 'other_unauthorized') {
        title = ''
        message = "Your login session has expired"
      }

      Toast.error({
        content: message
      })
    }

    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    }
  }
}

export const baseRestApi = createApi({
  reducerPath: 'rest-api',
  baseQuery,
  endpoints: () => ({}),
})
