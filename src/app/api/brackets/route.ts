import { NextResponse } from 'next/server'
import postgres from 'postgres'

export async function GET(request: Request) {
  const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' })

  const result = await sql.unsafe('SELECT * FROM simples_nacional')

  return NextResponse.json(result)
}
