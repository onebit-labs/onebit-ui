import { toBN } from '../BN'
import type { BNValue } from '../types'
import { toFixed } from './toFixed'

const defaultSymbols = ['', 'k', 'M', 'G', 'T', 'P', 'E']

export type AbbreviateOptions = {
  maximumFractionDigits?: number
  symbols?: string[]
}

const defaultOptions = {
  symbols: defaultSymbols,
  maximumFractionDigits: 1,
}

export function abbreviate(value: BNValue, options?: AbbreviateOptions) {
  const bn = toBN(value)
  if (bn.isNaN) return '-'
  const {
    sign,
    options: { maximumFractionDigits },
    scaledValue,
    suffix,
  } = getAbbreviateData(value, options)
  return (!sign ? '-' : '') + toFixed(scaledValue, maximumFractionDigits) + suffix
}

export function getAbbreviateData(value: BNValue, options?: AbbreviateOptions) {
  const bn = toBN(value)
  if (bn.isNaN) return {} as undefined
  const props = Object.assign({}, defaultOptions, options)

  const sign = bn.s >= 0
  const num = bn.abs()

  const tier = Math.floor(num.e / 3)
  const suffix = props.symbols[tier]
  if (!suffix) throw new RangeError()

  return {
    sign,
    value,
    scaledValue: num.div(Math.pow(10, tier * 3)),
    suffix,
    options: props,
  }
}
