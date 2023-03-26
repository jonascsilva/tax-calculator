type Taxes = {
  nominalRate: number
  deduction: number
  'IRPJ': number
  'CSLL': number
  'COFINS': number
  'PIS': number
  'CPP': number
  'ICMS': number
}

export type Range = {
  range: 1 | 2 | 3 | 4 | 5 | 6
  rBT12: number
} & Taxes

export type Result = {
  revenue: number
  effectiveRate: number
  tax: number
} & Taxes
