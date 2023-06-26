import postgres from 'postgres'

import { Bracket } from '@/utils/types'

import Tables from './_tables'
import styles from './styles.module.scss'

async function getBrackets(): Promise<Bracket[]> {
  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' })
  const result = await sql<Bracket[]>`SELECT * FROM simples_nacional`

  return result
}

export default async function Page() {
  const brackets = await getBrackets()

  return (
    <main className={styles.root}>
      <Tables brackets={brackets} />
    </main>
  )
}
