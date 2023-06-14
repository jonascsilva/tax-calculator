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

export type RawBracket = {
  rBT12: number
  rangeIndex: 1 | 2 | 3 | 4 | 5 | 6
} & Taxes

export type Bracket = {
  rBT12: number
  index: 1 | 2 | 3 | 4 | 5 | 6
} & Taxes

export type Result = {
  revenue: number
  effectiveRate: number
  tax: number
  index: 1 | 2 | 3 | 4 | 5 | 6
} & Taxes

export type FormData = {
  annualRevenue: number
  revenue: number
}
