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
  deleteBracket: (id: string) => void
  updateBracket: (bracket: Bracket, index: number) => void
  duplicateBracket: (bracket: Bracket) => void
}) {
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const newBracket: Bracket = {
      id: bracket.id,
      rbt12: +data.get('rbt12')!,
      deduction: +data.get('deduction')!,
      nominalrate: +data.get('nominalrate')! * 100,
      pis: +data.get('pis')! * 100,
      irpj: +data.get('irpj')! * 100,
      icms: +data.get('icms')! * 100,
      csll: +data.get('csll')! * 100,
      cpp: +data.get('cpp')! * 100,
      cofins: +data.get('cofins')! * 100
    }

    updateBracket(newBracket, index)
    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.root}>
        <button type='button' onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
        {isEditing && <button type='submit'>Salvar</button>}
        {!isEditing && (
          <button type='button' onClick={() => deleteBracket(bracket.id)}>
            Deletar
          </button>
        )}
        {!isEditing && (
          <button type='button' onClick={() => duplicateBracket(bracket)}>
            Duplicar
          </button>
        )}
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Faixa {index + 1}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Receita Bruta em 12 meses</td>
              <td>{isEditing ? <input defaultValue={bracket.rbt12} name='rbt12' /> : `R$${bracket.rbt12}`}</td>
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
                  <input defaultValue={bracket.nominalrate / 100} name='nominalrate' />
                ) : (
                  `${bracket.nominalrate / 100}%`
                )}
              </td>
            </tr>
            <tr>
              <td>IRPJ</td>
              <td>{isEditing ? <input defaultValue={bracket.irpj / 100} name='irpj' /> : `${bracket.irpj / 100}%`}</td>
            </tr>
            <tr>
              <td>CSLL</td>
              <td>{isEditing ? <input defaultValue={bracket.csll / 100} name='csll' /> : `${bracket.csll / 100}%`}</td>
            </tr>
            <tr>
              <td>COFINS</td>
              <td>
                {isEditing ? <input defaultValue={bracket.cofins / 100} name='cofins' /> : `${bracket.cofins / 100}%`}
              </td>
            </tr>
            <tr>
              <td>CPP</td>
              <td>{isEditing ? <input defaultValue={bracket.cpp / 100} name='cpp' /> : `${bracket.cpp / 100}%`}</td>
            </tr>
            <tr>
              <td>PIS</td>
              <td>{isEditing ? <input defaultValue={bracket.pis / 100} name='pis' /> : `${bracket.pis / 100}%`}</td>
            </tr>
            <tr>
              <td>ICMS</td>
              <td>{isEditing ? <input defaultValue={bracket.icms / 100} name='icms' /> : `${bracket.icms / 100}%`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}
