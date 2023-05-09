import { ResultComplex } from '@/utils/types'

import styles from './styles.module.scss'

export default function Component({ result }: { result: ResultComplex }) {
  return (
    <table className={styles.root}>
      <tbody>
        <tr>
          <td>ICMS</td>
          <td>R${result['ICMS'].toLocaleString("en-US")}</td>
        </tr>
        <tr>
          <td>PIS</td>
          <td>R${result['PIS'].toLocaleString("en-US")}</td>
        </tr>
        <tr>
          <td>COFINS</td>
          <td>R${result['COFINS'].toLocaleString("en-US")}</td>
        </tr>
        <tr>
          <td>CSLL</td>
          <td>R${result['CSLL'].toLocaleString("en-US")}</td>
        </tr>
        <tr>
          <td>IRPJ</td>
          <td>R${result['IRPJ'].toLocaleString("en-US")}</td>
        </tr>
        <tr>
          <td>Lucro Real</td>
          <td>R${result.revenue.toLocaleString("en-US")}</td>
        </tr>
      </tbody>
    </table>
  )
}
