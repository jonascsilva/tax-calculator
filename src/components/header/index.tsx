'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import ThemeButton from '@/components/theme-button'
import { capitalizeFirstLetter as cFL } from '@/utils/functions'

import styles from './styles.module.scss'

export default function Component() {
  const segments = useSelectedLayoutSegments()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ButtonLink segment={segments[0]} routeName={'calculator'} />
        <ThemeButton />
        <ButtonLink segment={segments[0]} routeName={'reference'} />
      </nav>
    </header>
  )
}

function ButtonLink({ segment, routeName }: { segment: string; routeName: string }) {
  const isActive = segment === routeName

  return (
    <button className={[styles.button, isActive ? styles.active : undefined].join(' ')} disabled={isActive}>
      <Link href={`/${routeName}`}>{cFL(routeName)}</Link>
    </button>
  )
}
