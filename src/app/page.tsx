'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ranges } from '@/lib/ranges'
import { Result } from '@/lib/types'

import styles from './page.module.scss'

type FormData = {
  annualRevenue: string
  revenue: string
}

export default function Page() {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState<Result | null>(null)

  const onSubmit = (data: FormData) => {
    const annualRevenue = +data.annualRevenue
    const revenue = +data.revenue

    if (!annualRevenue) return
    if (!revenue) return

    const range = ranges.find(({ rBT12 }) => annualRevenue <= rBT12)

    if (!range) throw new Error('rBT12 is outside of any range')

    const { nominalRate, deduction, rangeIndex } = range

    const effectiveRate = ((annualRevenue * nominalRate) / 100 - deduction) / annualRevenue

    const newResult = {
      revenue,
      nominalRate,
      deduction,
      effectiveRate,
      rangeIndex,
      tax: effectiveRate * revenue,
      IRPJ: effectiveRate * range['IRPJ'],
      CSLL: effectiveRate * range['CSLL'],
      COFINS: effectiveRate * range['COFINS'],
      CPP: effectiveRate * range['CPP'],
      PIS: effectiveRate * range['PIS'],
      ICMS: effectiveRate * range['ICMS']
    }

    setResult(newResult)
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor='annualRevenue'>Receita Bruta em 12 meses</label>
          <input id='annualRevenue' {...register('annualRevenue')}></input>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='revenue'>Faturamento</label>
          <input id='revenue' {...register('revenue')}></input>
        </div>
        <button type='submit' className={styles.button}>
          Submit
        </button>
      </form>
      {result && (
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Faixa</td>
              <td>{result.rangeIndex}</td>
            </tr>
            <tr>
              <td>Aliquota Nominal</td>
              <td>{result.nominalRate}%</td>
            </tr>
            <tr>
              <td>Dedução</td>
              <td>R${result.deduction}</td>
            </tr>
            <tr>
              <td>Aliquota Efetiva</td>
              <td>{(result.effectiveRate * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>IRPJ</td>
              <td>{result['IRPJ'].toFixed(2)}%</td>
            </tr>
            <tr>
              <td>CSLL</td>
              <td>{result['CSLL'].toFixed(2)}%</td>
            </tr>
            <tr>
              <td>COFINS</td>
              <td>{result['COFINS'].toFixed(2)}%</td>
            </tr>
            <tr>
              <td>CPP</td>
              <td>{result['CPP'].toFixed(2)}%</td>
            </tr>
            <tr>
              <td>PIS</td>
              <td>{result['PIS'].toFixed(2)}%</td>
            </tr>
            <tr>
              <td>ICMS</td>
              <td>{result['ICMS'].toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Imposto a pagar</td>
              <td>R${result.tax.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </main>
  )
}
