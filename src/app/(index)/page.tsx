'use client'

import { useState } from 'react'

import { Form } from '@/components/Form/Form'
import { Table } from '@/components/Table/Table'
import { Result } from '@/lib/types'

import styles from './page.module.scss'

export default function Page() {
  const [result, setResult] = useState<Result | null>(null)

  return (
    <main className={styles.main}>
      <Form setResult={setResult} />
      {result && <Table result={result} />}
    </main>
  )
}
