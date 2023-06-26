'use client'

import { useState } from 'react'

import { Bracket } from '@/utils/types'

import Table from './_table'

export default function Component(props: { brackets: Bracket[] }) {
  const [brackets, setBrackets] = useState(props.brackets)

  const deleteBracket = async (id: string) => {
    setBrackets(brackets.filter(bracket => bracket.id !== id))

    const res = await fetch(`/api/brackets/${id}`, {
      cache: 'no-store',
      method: 'DELETE'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }

  const updateBracket = async (newBracket: Bracket, index: number) => {
    const newBrackets = structuredClone(brackets)
    newBrackets[index] = newBracket
    setBrackets(newBrackets)

    const res = await fetch(`/api/brackets/${newBracket.id}`, {
      cache: 'no-store',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBracket)
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }

  const duplicateBracket = async (bracket: Bracket) => {
    const newBracket = structuredClone(bracket)
    const newBrackets = structuredClone(brackets)

    newBracket.id = crypto.randomUUID()

    newBrackets.push(newBracket)
    setBrackets(newBrackets)

    const res = await fetch('/api/brackets', {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBracket)
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  }

  brackets.sort(({ rbt12: a }, { rbt12: b }) => a - b)

  return (
    <>
      {brackets.map((bracket, index) => (
        <Table
          bracket={bracket}
          deleteBracket={deleteBracket}
          updateBracket={updateBracket}
          duplicateBracket={duplicateBracket}
          key={bracket.id}
          index={index}
        />
      ))}
    </>
  )
}
