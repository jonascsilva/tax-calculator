import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { number, object, NumberSchema } from 'yup'

import { FormData, Result, Range } from '@/lib/types'

import { FormButton } from '../FormButton/FormButton'
import { FormField } from '../FormField/FormField'
import styles from './styles.module.scss'

type Props = { setResult: Dispatch<SetStateAction<Result | null>> }

const numberSchema = number()
  .positive('Deve ser positivo')
  .required('Campo obrigatório')
  .lessThan(4_800_001, 'Deve ser menor que 4800001')

const schema = object({
  revenue: numberSchema,
  annualRevenue: numberSchema
} as { revenue: NumberSchema; annualRevenue: NumberSchema }).required()

export function Form({ setResult }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = async ({ annualRevenue, revenue }: FormData) => {
    const response = await fetch('https://tax-calculator-q87ez1c2q58g.deno.dev/teste')

    const ranges: Range[] = await response.json()

    const range = ranges.find(({ rBT12 }) => annualRevenue < rBT12 + 1)

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <FormField
        id={'annualRevenue'}
        label='Receita Bruta em 12 meses'
        placeholder='3600000'
        errors={errors}
        register={register}
      />
      <FormField id={'revenue'} label='Faturamento (Mensal)' placeholder='25000' errors={errors} register={register} />
      <FormButton />
    </form>
  )
}
