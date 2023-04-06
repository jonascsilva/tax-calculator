import styles from './styles.module.scss'

export function FormButton() {
  return (
    <button type='submit' className={styles.button}>
      Calcular
    </button>
  )
}
