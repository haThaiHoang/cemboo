"use client"

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const AUTH_ROUTES = ["/login", "/forgot-password", "/signup", "/setup"]

const hidePreloading = (): void => {
  const preloading = document.getElementById(('preloading'))

  if (!preloading) return

  const fadeEffect = setInterval(() => {
    if (!preloading.style.opacity) {
      preloading.style.opacity = '1'
    }
    if (preloading.style.opacity === '1') {
      preloading.style.opacity = '0'
    } else {
      clearInterval(fadeEffect)
      preloading.style.display = 'none'
    }
  }, 500)
}

const Init = ({ children }: { children: React.ReactNode }) => {
  const [inited, setInited] = useState(false);
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Request.setAccessToken('fghj')
        router.push("/dashboard");
      } catch (error) {
        if (!AUTH_ROUTES.includes(pathname)) {
          // router.push("/login");
        }
      } finally {
        setInited(true);
      }

      hidePreloading()
    }

    fetchData();

    // eslint-disable-next-line
  }, []);


  return inited && (
    <>
      {children}
    </>
  )
}

export default Init
