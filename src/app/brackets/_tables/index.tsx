'use client'

import { useState } from 'react'

import { Bracket } from '@/utils/types'

import Table from './_table'

export default function Component(props: { brackets: Bracket[] }) {
  const [brackets, setBrackets] = useState(props.brackets)

  const deleteBracket = (id: number) => {
    setBrackets(brackets.filter((_bracket, index) => index !== id))
  }

  const updateBracket = (newBracket: Bracket, index: number) => {
    const newBrackets = structuredClone(brackets)
    newBrackets[index] = newBracket
    setBrackets(newBrackets)
  }

  const duplicateBracket = (bracket: Bracket) => {
    const newBracket = structuredClone(bracket)
    const newBrackets = structuredClone(brackets)
    newBrackets.push(newBracket)
    setBrackets(newBrackets)
  }

  const sortedBrackets = brackets.sort(({ rBT12: a }, { rBT12: b }) => a - b)

  return (
    <>
      {sortedBrackets.map((bracket, index) => (
        <Table
          bracket={bracket}
          deleteBracket={deleteBracket}
          updateBracket={updateBracket}
          duplicateBracket={duplicateBracket}
          key={`${bracket.rBT12}-${index}`}
          index={index}
        />
      ))}
    </>
  )
}
