import Header from '@/components/Header'
import { Range } from '@/lib/types'

import styles from './styles.module.scss'

async function getRanges(): Promise<Range[]> {
  const res = await fetch('https://tax-calculator-q87ez1c2q58g.deno.dev/teste')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const ranges: Range[] = await res.json()

  return ranges
}

export default async function Page() {
  const ranges = await getRanges()

  return (
    <main className={styles.root}>
      <Header
        links={[
          { url: '/', name: 'Home' },
          { url: '/about', name: 'Sobre' }
        ]}
      />
      <section className={styles.section}>
        {ranges.map(range => (
          <table key={range.rangeIndex}>
            <thead>
              <tr>
                <th colSpan={2}>{`Faixa ${range.rangeIndex}`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Receita Bruta em 12 meses</td>
                <td>R${range.rBT12}</td>
              </tr>
              <tr>
                <td>Dedução</td>
                <td>R${range.deduction}</td>
              </tr>
              <tr>
                <td>Aliquota Nominal</td>
                <td>{range.nominalRate}%</td>
              </tr>
              <tr>
                <td>IRPJ</td>
                <td>{range['IRPJ']}%</td>
              </tr>
              <tr>
                <td>CSLL</td>
                <td>{range['CSLL']}%</td>
              </tr>
              <tr>
                <td>COFINS</td>
                <td>{range['COFINS']}%</td>
              </tr>
              <tr>
                <td>CPP</td>
                <td>{range['CPP']}%</td>
              </tr>
              <tr>
                <td>PIS</td>
                <td>{range['PIS']}%</td>
              </tr>
              <tr>
                <td>ICMS</td>
                <td>{range['ICMS']}%</td>
              </tr>
            </tbody>
          </table>
        ))}
      </section>
    </main>
  )
}
