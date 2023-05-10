import { FieldErrors, UseFormRegister } from 'react-hook-form'

import styles from './styles.module.scss'

type Props = {
  id: string
  label: string
  placeholder: string
  errors: FieldErrors<any>
  register: UseFormRegister<any>
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
        step={0.01}
        min={10}
        {...register(id, {
          required: true,
          valueAsNumber: true
        })}
      />
      <p className={styles.error}>{errors[id]?.type !== 'typeError' ? (errors[id]?.message as string) : null}</p>
    </div>
  )
}
