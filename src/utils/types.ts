type Taxes = {
  nominalRate: number
  deduction: number
  IRPJ: number
  CSLL: number
  COFINS: number
  PIS: number
  CPP: number
  ICMS: number
}

export type Bracket = {
  rBT12: number
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
