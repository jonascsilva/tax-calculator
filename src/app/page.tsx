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

    const range = ranges.find(({ rBT12 }) => annualRevenue <= rBT12)

    if (!range) throw new Error('rBT12 is outside of any range')

    const { nominalRate, deduction } = range

    const effectiveRate = ((annualRevenue * nominalRate) / 100 - deduction) / annualRevenue

    const newResult = {
      revenue,
      nominalRate,
      deduction,
      effectiveRate,
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='annualRevenue'>Receita Bruta em 12 meses</label>
          <input id='annualRevenue' {...register('annualRevenue')}></input>
        </div>
        <div>
          <label htmlFor='revenue'>Faturamento</label>
          <input id='revenue' {...register('revenue')}></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <p>Aliquota Nominal: {result?.nominalRate.toFixed(4)}%</p>
        <p>Dedução: {result?.deduction.toFixed(4)}</p>
        <p>Aliquota Efetiva: {result?.effectiveRate.toFixed(4)}</p>
        <p>IRPJ: {result?.['IRPJ'].toFixed(4)}</p>
        <p>CSLL: {result?.['CSLL'].toFixed(4)}</p>
        <p>COFINS: {result?.['COFINS'].toFixed(4)}</p>
        <p>CPP: {result?.['CPP'].toFixed(4)}</p>
        <p>PIS: {result?.['PIS'].toFixed(4)}</p>
        <p>ICMS: {result?.['ICMS'].toFixed(4)}</p>
        <p>Imposto a pagar: {result?.tax.toFixed(2)}</p>
      </div>
    </div>
  )
}
