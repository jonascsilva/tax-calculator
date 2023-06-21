import { FormEventHandler, useState } from 'react'

import { Bracket } from '@/utils/types'

import styles from './index.module.scss'

export default function Component({
  index,
  bracket,
  deleteBracket,
  updateBracket,
  duplicateBracket
}: {
  index: number
  bracket: Bracket
  deleteBracket: (index: number) => void
  updateBracket: (bracket: Bracket, index: number) => void
  duplicateBracket: (bracket: Bracket) => void
}) {
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const newBracket: Bracket = {
      rBT12: +data.get('rBT12')!,
      PIS: +data.get('PIS')!,
      nominalRate: +data.get('nominalRate')!,
      IRPJ: +data.get('IRPJ')!,
      ICMS: +data.get('ICMS')!,
      deduction: +data.get('deduction')!,
      CSLL: +data.get('CSLL')!,
      CPP: +data.get('CPP')!,
      COFINS: +data.get('COFINS')!
    }

    updateBracket(newBracket, index)
    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.root}>
        <button type='button' onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Cancelar' : 'Editar'}</button>
        {isEditing && <button type='submit'>Salvar</button>}
        {!isEditing && <button type='button' onClick={() => deleteBracket(index)}>Deletar</button>}
        {!isEditing && <button type='button' onClick={() => duplicateBracket(bracket)}>Duplicar</button>}
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Faixa {index + 1}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Receita Bruta em 12 meses</td>
              <td>{isEditing ? <input defaultValue={bracket.rBT12} name='rBT12' /> : `R$${bracket.rBT12}`}</td>
            </tr>
            <tr>
              <td>Dedução</td>
              <td>
                {isEditing ? <input defaultValue={bracket.deduction} name='deduction' /> : `R$${bracket.deduction}`}
              </td>
            </tr>
            <tr>
              <td>Aliquota Nominal</td>
              <td>
                {isEditing ? (
                  <input defaultValue={bracket.nominalRate} name='nominalRate' />
                ) : (
                  `${bracket.nominalRate}%`
                )}
              </td>
            </tr>
            <tr>
              <td>IRPJ</td>
              <td>{isEditing ? <input defaultValue={bracket['IRPJ']} name='IRPJ' /> : `${bracket['IRPJ']}%`}</td>
            </tr>
            <tr>
              <td>CSLL</td>
              <td>{isEditing ? <input defaultValue={bracket['CSLL']} name='CSLL' /> : `${bracket['CSLL']}%`}</td>
            </tr>
            <tr>
              <td>COFINS</td>
              <td>{isEditing ? <input defaultValue={bracket['COFINS']} name='COFINS' /> : `${bracket['COFINS']}%`}</td>
            </tr>
            <tr>
              <td>CPP</td>
              <td>{isEditing ? <input defaultValue={bracket['CPP']} name='CPP' /> : `${bracket['CPP']}%`}</td>
            </tr>
            <tr>
              <td>PIS</td>
              <td>{isEditing ? <input defaultValue={bracket['PIS']} name='PIS' /> : `${bracket['PIS']}%`}</td>
            </tr>
            <tr>
              <td>ICMS</td>
              <td>{isEditing ? <input defaultValue={bracket['ICMS']} name='ICMS' /> : `${bracket['ICMS']}%`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}
