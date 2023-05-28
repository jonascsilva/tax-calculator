import { ResultSimple } from '@/utils/types'

import styles from './styles.module.scss'

export default function Component({ result }: { result: ResultSimple }) {
  return (
    <table className={styles.root}>
      <tbody>
        <tr>
          <td>Faixa</td>
          <td>{result.rangeIndex}</td>
        </tr>
        <tr>
          <td>Aliquota Nominal</td>
          <td>{result.nominalRate}%</td>
        </tr>
        <tr>
          <td>Dedução</td>
          <td>R${result.deduction}</td>
        </tr>
        <tr>
          <td>Aliquota Efetiva</td>
          <td>{(result.effectiveRate * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>IRPJ</td>
          <td>{result['IRPJ'].toFixed(2)}%</td>
        </tr>
        <tr>
          <td>CSLL</td>
          <td>{result['CSLL'].toFixed(2)}%</td>
        </tr>
        <tr>
          <td>COFINS</td>
          <td>{result['COFINS'].toFixed(2)}%</td>
        </tr>
        <tr>
          <td>CPP</td>
          <td>{result['CPP'].toFixed(2)}%</td>
        </tr>
        <tr>
          <td>PIS</td>
          <td>{result['PIS'].toFixed(2)}%</td>
        </tr>
        <tr>
          <td>ICMS</td>
          <td>{result['ICMS'].toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Imposto a pagar</td>
          <td>R${result.tax.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  )
}
