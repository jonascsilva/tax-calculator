'use client'

import Link from 'next/link'
import { useState, memo } from 'react'

import { Form } from '@/components/Form/Form'
import { Table } from '@/components/Table/Table'
import { ThemeButton } from '@/components/ThemeButton/ThemeButton'
import { Result } from '@/lib/types'

import styles from './page.module.scss'

const MemoThemeButton = memo(ThemeButton)

export default function Page() {
  const [result, setResult] = useState<Result | null>(null)

  return (
    <main className={styles.root}>
      <header className={styles.header}>
        <Link href='/table'>Tabela</Link>
        <MemoThemeButton />
        <Link href='/about'>Sobre</Link>
      </header>
      <section>
        <Form setResult={setResult} />
        {result && <Table result={result} />}
      </section>
    </main>
  )
}
