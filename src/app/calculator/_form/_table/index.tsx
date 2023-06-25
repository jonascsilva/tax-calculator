import { Result } from '@/utils/types'

import styles from './styles.module.scss'

export default function Component({ result }: { result: Result }) {
  return (
    <table className={styles.root}>
      <tbody>
        <tr>
          <td>Faixa</td>
          <td>{result.index}</td>
        </tr>
        <tr>
          <td>Aliquota Nominal</td>
          <td>{result.nominalrate}%</td>
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
          <td>{result.irpj.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>CSLL</td>
          <td>{result.csll.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>COFINS</td>
          <td>{result.cofins.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>CPP</td>
          <td>{result.cpp.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>PIS</td>
          <td>{result.pis.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>ICMS</td>
          <td>{result.icms.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Imposto a pagar</td>
          <td>R${result.tax.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  )
}
