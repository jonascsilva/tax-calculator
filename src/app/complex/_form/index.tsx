'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import MoonLoader from 'react-spinners/MoonLoader'
import { number, object, NumberSchema } from 'yup'

import FormButton from '@/components/form-button'
import FormField from '@/components/form-field'
import { FormDataComplex, ResultComplex } from '@/utils/types'

import Table from './_table'
import styles from './styles.module.scss'

const numberSchema = number().positive('Deve ser positivo').required('Campo obrigatório')

const schema = object({
  cost: numberSchema,
  revenue: numberSchema
} as { cost: NumberSchema; revenue: NumberSchema }).required()

export default function Component() {
  const [result, setResult] = useState<ResultComplex | null>(null)
  const { theme } = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormDataComplex>({ resolver: yupResolver(schema) })

  const onSubmit = async ({ revenue, cost }: FormDataComplex) => {
    await new Promise(r => setTimeout(r, 1000))

    setResult({
      ICMS: 14_450_000,
      PIS: 1_402_500,
      COFINS: 6_460_000,
      CSLL: 5_633_370.0,
      IRPJ: 9_388_950_00,
      revenue: 42_837_612.0
    })
  }

  return (
    <main className={styles.root}>
      {!isSubmitting ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <FormField
              id={'revenue'}
              label='Receita Bruta (Mensal)'
              placeholder='85000000'
              errors={errors}
              register={register}
            />
            <FormField
              id={'cost'}
              label='Custo de Mercadoria'
              placeholder='120000'
              errors={errors}
              register={register}
            />
            <FormButton />
          </form>
          {result && <Table result={result} />}
        </>
      ) : (
        <MoonLoader speedMultiplier={0.7} size={100} color={theme === 'dark' ? 'white' : 'black'} />
      )}
    </main>
  )
}
