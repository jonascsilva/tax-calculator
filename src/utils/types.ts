type Taxes = {
  rangeIndex: 1 | 2 | 3 | 4 | 5 | 6
  nominalRate: number
  deduction: number
  IRPJ: number
  CSLL: number
  COFINS: number
  PIS: number
  CPP: number
  ICMS: number
}

export type Range = {
  rBT12: number
} & Taxes

export type ResultSimple = {
  revenue: number
  effectiveRate: number
  tax: number
} & Taxes

export type FormDataSimple = {
  annualRevenue: number
  revenue: number
}

export type FormDataComplex = {
  revenue: number
  cost: number
}

export type ResultComplex = {
  ICMS: number
  PIS: number
  COFINS: number
  CSLL: number
  IRPJ: number
  revenue: number
}
