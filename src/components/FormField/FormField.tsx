import { UseFormRegister } from 'react-hook-form'

import { FormData } from '@/lib/types'

import styles from './styles.module.scss'

type Props = {
  id: keyof FormData
  label: string
  placeholder: string
  register: UseFormRegister<FormData>
}

export function FormField({ id, label, placeholder, register }: Props) {
  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <input className={styles.input} id={id} placeholder={placeholder} {...register(id)}></input>
    </div>
  )
}
