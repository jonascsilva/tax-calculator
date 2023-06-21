'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import ThemeButton from './_theme-button'
import styles from './styles.module.scss'

export default function Component() {
  const segments = useSelectedLayoutSegments()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ButtonLink segment={segments[0]} routeName={'calculator'} />
        <ThemeButton />
        <ButtonLink segment={segments[0]} routeName={'brackets'} />
      </nav>
    </header>
  )
}

const names = {
  calculator: 'Calculadora',
  brackets: 'Faixas'
}

function ButtonLink({ segment, routeName }: { segment: string; routeName: keyof typeof names }) {
  const isActive = segment === routeName

  return (
    <button className={[styles.button, isActive ? styles.active : undefined].join(' ')} disabled={isActive}>
      <Link href={`/${routeName}`}>{names[routeName]}</Link>
    </button>
  )
}
