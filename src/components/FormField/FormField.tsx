import { UseFormRegister } from 'react-hook-form'

import { FormData } from '@/lib/types'

import styles from './styles.module.scss'

type Props = {
  id: keyof FormData
  label: string
  register: UseFormRegister<FormData>
}

export function FormField({ id, label, register }: Props) {
  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(id)}></input>
    </div>
  )
}
