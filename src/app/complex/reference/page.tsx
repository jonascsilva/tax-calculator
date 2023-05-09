import styles from './styles.module.scss'

export default async function Page() {
  return (
    <main className={styles.root}>
      <table>
        <thead>
          <tr>
            <th>Impostos</th>
            <th>Alíquota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PIS</td>
            <td>1.65%</td>
          </tr>
          <tr>
            <td>COFINS</td>
            <td>7.60%</td>
          </tr>
          <tr>
            <td>IRPJ</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>IRPJ</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>CSLL</td>
            <td>9%</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
