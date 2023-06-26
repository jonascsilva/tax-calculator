type Taxes = {
  nominalrate: number
  deduction: number
  irpj: number
  csll: number
  cofins: number
  pis: number
  cpp: number
  icms: number
}

export type Bracket = {
  id: string
  rbt12: number
} & Taxes

export type Result = {
  revenue: number
  effectiveRate: number
  tax: number
  index: number
} & Taxes

export type FormData = {
  annualRevenue: number
  revenue: number
}
