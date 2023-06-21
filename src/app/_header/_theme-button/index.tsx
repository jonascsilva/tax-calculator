'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import styles from './styles.module.scss'

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      disabled={!mounted}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={styles.root}
      aria-label={'Change theme'}
    >
      {mounted ? theme === 'dark' ? <MdLightMode size='100%' /> : <MdDarkMode size='100%' /> : null}
    </button>
  )
}
