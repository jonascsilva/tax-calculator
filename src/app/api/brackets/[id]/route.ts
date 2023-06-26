import { NextResponse } from 'next/server'
import postgres from 'postgres'

import { Bracket } from '@/utils/types'

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' })

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const brackets = await sql`DELETE FROM simples_nacional WHERE id = ${params.id}`

  return NextResponse.json(brackets)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { rbt12, nominalrate, deduction, irpj, csll, cofins, pis, cpp, icms } = (await request.json()) as Bracket

  const brackets = await sql<Bracket[]>`
  UPDATE simples_nacional 
  SET
  rbt12 = ${rbt12},
  deduction = ${deduction},
  nominalRate = ${nominalrate},
  IRPJ = ${irpj},
  CSLL = ${csll},
  COFINS = ${cofins},
  PIS = ${pis},
  CPP = ${cpp},
  ICMS = ${icms}
  WHERE id = ${params.id}
  `

  return NextResponse.json(brackets)
}
