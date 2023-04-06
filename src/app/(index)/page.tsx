'use client'

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
      <MemoThemeButton />
      <section>
        <Form setResult={setResult} />
        {result && <Table result={result} />}
      </section>
    </main>
  )
}
