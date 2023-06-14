import { Bracket, RawBracket } from '@/utils/types'

import Table from './_table'
import styles from './styles.module.scss'

async function getBrackets(): Promise<Bracket[]> {
  const res = await fetch('https://tax-calculator-q87ez1c2q58g.deno.dev/teste')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const rawBrackets: RawBracket[] = await res.json()

  const brackets: Bracket[] = rawBrackets.map(rawBracket => ({ ...rawBracket, index: rawBracket.rangeIndex }))

  return brackets
}

export default async function Page() {
  const brackets = await getBrackets()

  return (
    <main className={styles.root}>
      {brackets.map(bracket => (
        <Table bracket={bracket} key={bracket.index} />
      ))}
    </main>
  )
}
