import { FieldErrors, UseFormRegister } from 'react-hook-form'

// import { FormDataSimple } from '@/utils/types'

import styles from './styles.module.scss'

type Props = {
  id: /* keyof any */ any
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
        {...register(id, {
          required: true,
          valueAsNumber: true
        })}
      />
      {/* <p>{errors[id]?.type !== 'typeError' && errors[id]?.message}</p> */}
    </div>
  )
}
