'use client'

import * as XLSX from 'xlsx';
import { yupResolver } from '@hookform/resolvers/yup'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import MoonLoader from 'react-spinners/MoonLoader'
import { number, object, NumberSchema } from 'yup'

import { FormData, Bracket, Result } from '@/utils/types'

import FormButton from './_form-button'
import FormField from './_form-field'
import Table from './_table'
import styles from './styles.module.scss'

const numberSchema = number()
  .positive('Deve ser positivo')
  .required('Campo obrigatório')
  .lessThan(4_800_001, 'Deve ser menor que 4800001')

const schema = object({
  revenue: numberSchema,
  annualRevenue: numberSchema
} as { revenue: NumberSchema; annualRevenue: NumberSchema }).required()

export default function Component() {
  const [result, setResult] = useState<Result | null>(null)
  const { resolvedTheme } = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = async ({ annualRevenue, revenue }: FormData) => {
    const response = await fetch(`/api/brackets`, { cache: 'no-store' })

    const brackets: Bracket[] = await response.json()

    brackets.sort(({ rbt12: a }, { rbt12: b }) => a - b)

    const bracket = brackets.find(({ rbt12 }) => annualRevenue < rbt12 + 1)
    const index = brackets.findIndex(({ rbt12 }) => annualRevenue < rbt12 + 1)

    if (!bracket) throw new Error('rbt12 is outside of any range')

    const { nominalrate, deduction, irpj, csll, cofins, cpp, pis, icms } = bracket

    const effectiveRate = ((annualRevenue * nominalrate) / 100 / 100 - deduction) / annualRevenue

    const newResult = {
      index: index + 1,
      revenue,
      nominalrate: nominalrate / 100,
      deduction,
      effectiveRate,
      tax: effectiveRate * revenue,
      irpj: effectiveRate * (irpj / 100),
      csll: effectiveRate * (csll / 100),
      cofins: effectiveRate * (cofins / 100),
      cpp: effectiveRate * (cpp / 100),
      pis: effectiveRate * (pis / 100),
      icms: effectiveRate * (icms / 100)
    }

    setResult(newResult)
  }

  const handleDownload = () => {
    if (result) {
      const ws = XLSX.utils.json_to_sheet([result]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Resultado');
      XLSX.writeFile(wb, 'result.xlsx');
    }
  };

  return (
    <main className={styles.root}>
      {!isSubmitting ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <FormField
              id={'annualRevenue'}
              label='Receita Bruta em 12 meses'
              placeholder='3600000'
              errors={errors}
              register={register}
            />
            <FormField
              id={'revenue'}
              label='Faturamento (Mensal)'
              placeholder='25000'
              errors={errors}
              register={register}
            />
            <FormButton />
          </form>
          {result && <Table result={result} />}
          {result && (
            <button onClick={handleDownload} className={styles.downloadButton}>
              Baixar Resultado
            </button>
          )}
        </>
      ) : (
        <MoonLoader speedMultiplier={0.7} size={100} color={resolvedTheme === 'dark' ? 'white' : 'black'} />
      )}
    </main>
  );
}
