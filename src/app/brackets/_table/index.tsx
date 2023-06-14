import { Bracket } from '@/utils/types'

export default function Component({ bracket }: { bracket: Bracket }) {
  return (
    <table key={bracket.index}>
      <thead>
        <tr>
          <th colSpan={2}>{`Faixa ${bracket.index}`}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Receita Bruta em 12 meses</td>
          <td>R${bracket.rBT12}</td>
        </tr>
        <tr>
          <td>Dedução</td>
          <td>R${bracket.deduction}</td>
        </tr>
        <tr>
          <td>Aliquota Nominal</td>
          <td>{bracket.nominalRate}%</td>
        </tr>
        <tr>
          <td>IRPJ</td>
          <td>{bracket['IRPJ']}%</td>
        </tr>
        <tr>
          <td>CSLL</td>
          <td>{bracket['CSLL']}%</td>
        </tr>
        <tr>
          <td>COFINS</td>
          <td>{bracket['COFINS']}%</td>
        </tr>
        <tr>
          <td>CPP</td>
          <td>{bracket['CPP']}%</td>
        </tr>
        <tr>
          <td>PIS</td>
          <td>{bracket['PIS']}%</td>
        </tr>
        <tr>
          <td>ICMS</td>
          <td>{bracket['ICMS']}%</td>
        </tr>
      </tbody>
    </table>
  )
}
