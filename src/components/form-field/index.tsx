import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { FormData } from '@/lib/types'

import styles from './styles.module.scss'

type Props = {
  id: keyof FormData
  label: string
  placeholder: string
  errors: FieldErrors<FormData>
  register: UseFormRegister<FormData>
}

export default function Component({ id, label, placeholder, errors, register }: Props) {
  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        autoComplete='off'
        id={id}
        placeholder={placeholder}
        type='number'
        {...register(id, {
          required: true,
          valueAsNumber: true
        })}
      />
      <p>{errors[id]?.type !== 'typeError' && errors[id]?.message}</p>
    </div>
  )
}
