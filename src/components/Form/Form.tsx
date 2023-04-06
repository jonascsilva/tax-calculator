import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import { ranges } from '@/lib/ranges'
import { FormData, Result } from '@/lib/types'

import { FormButton } from '../FormButton/FormButton'
import { FormField } from '../FormField/FormField'
import styles from './styles.module.scss'

type Props = { setResult: Dispatch<SetStateAction<Result | null>> }

export function Form({ setResult }: Props) {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = ({ annualRevenue, revenue }: FormData) => {
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
      <FormField id={'annualRevenue'} label='Receita Bruta em 12 meses' placeholder='3.600.000' register={register} />
      <FormField id={'revenue'} label='Faturamento (Mensal)' placeholder='25.000' register={register} />
      <FormButton />
    </form>
  )
}
