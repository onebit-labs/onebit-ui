import { toBN } from '../BN'
import type { BNValue } from '../types'
import { toFixed } from './toFixed'

const defaultSymbols = ['', 'k', 'M', 'G', 'T', 'P', 'E']

interface AbbreviateOptions {
  symbols?: string[]
}

const defaultOptions = {
  symbols: defaultSymbols,
}

export function abbreviate(value: BNValue, digit = 1, options?: AbbreviateOptions) {
  const bn = toBN(value)
  const { symbols } = Object.assign({}, defaultOptions, options)

  const sign = bn.s >= 0
  const num = bn.abs()

  const tier = Math.floor(num.e / 3)

  if (tier == 0) return (!sign ? '-' : '') + num.toString()

  const suffix = symbols[tier]
  if (!suffix) throw new RangeError()

  const scaled = num.div(Math.pow(10, tier * 3))

  return (!sign ? '-' : '') + toFixed(scaled, digit) + suffix
}
