import { Bracket } from '@/utils/types'

import Tables from './_tables'
import styles from './styles.module.scss'

async function getBrackets(): Promise<Bracket[]> {
  const res = await fetch('https://tax-calculator-q87ez1c2q58g.deno.dev/teste')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const brackets: Bracket[] = await res.json()

  return brackets
}

export default async function Page() {
  const brackets = await getBrackets()

  return (
    <main className={styles.root}>
      <Tables brackets={brackets} />
    </main>
  )
}
