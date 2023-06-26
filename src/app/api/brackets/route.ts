import { NextResponse } from 'next/server'
import postgres from 'postgres'

import { Bracket } from '@/utils/types'

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' })

export async function GET() {
  const brackets = await sql<Bracket[]>`SELECT * FROM simples_nacional`

  return NextResponse.json(brackets)
}

export async function POST(request: Request) {
  const { id, rbt12, nominalrate, deduction, irpj, csll, cofins, pis, cpp, icms } = (await request.json()) as Bracket

  const brackets = await sql<Bracket[]>`
    INSERT INTO simples_nacional
    (id, rbt12, nominalrate, deduction, irpj, csll, cofins, pis, cpp, icms)
    VALUES (${id}, ${rbt12}, ${nominalrate}, ${deduction}, ${irpj}, ${csll}, ${cofins}, ${pis}, ${cpp}, ${icms})
    returning *
  `

  return NextResponse.json(brackets)
}
