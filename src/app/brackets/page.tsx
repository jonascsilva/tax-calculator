'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners'

import { Bracket } from '@/utils/types'

import Tables from './_tables'
import styles from './styles.module.scss'

export default function Page() {
  const [brackets, setBrackets] = useState<Bracket[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    init()
  }, [])

  async function init() {
    const response = await fetch('/api/brackets', { cache: 'no-store' })

    const brackets = (await response.json()) as Bracket[]

    setBrackets(brackets)
    setIsLoading(false)
  }

  return (
    <main className={styles.root}>
      {isLoading ? (
        <div className={styles.spinner}>
          <MoonLoader speedMultiplier={0.7} size={100} color={theme === 'dark' ? 'white' : 'black'} />
        </div>
      ) : (
        <Tables brackets={brackets} />
      )}
    </main>
  )
}
