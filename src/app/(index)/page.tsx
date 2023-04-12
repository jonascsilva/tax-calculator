import Link from 'next/link'
import { memo } from 'react'

import { Form } from '@/components/Form/Form'
import { ThemeButton } from '@/components/ThemeButton/ThemeButton'

import styles from './page.module.scss'

const MemoThemeButton = memo(ThemeButton)

export default function Page() {
  return (
    <main className={styles.root}>
      <header className={styles.header}>
        <Link href='/table'>Tabela</Link>
        <MemoThemeButton />
        <Link href='/about'>Sobre</Link>
      </header>
      <Form />
    </main>
  )
}
