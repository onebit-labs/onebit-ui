import { toBN } from '../BN'
import type { BNValue } from '../types'

const defaultSymbols = ['', 'k', 'M', 'G', 'T', 'P', 'E']

interface AbbreviateOptions {
  padding?: boolean
  symbols?: string[]
}

const defaultOptions = {
  padding: true,
  symbols: defaultSymbols,
}

export function abbreviate(value: BNValue, digit = 1, options?: AbbreviateOptions) {
  const bn = toBN(value)

  const { symbols, padding } = Object.assign({}, defaultOptions, options)

  // handle negatives
  const sign = bn.s >= 0
  const num = bn.abs()

  // what tier? (determines SI symbol)
  const tier = Math.floor(num.e / 3)

  // if zero, we don't need a suffix
  if (tier == 0) return (!sign ? '-' : '') + num.toString()

  // get suffix and determine scale
  const suffix = symbols[tier]
  if (!suffix) throw new RangeError()

  const scale = Math.pow(10, tier * 3)

  // scale the number
  const scaled = num.div(scale)

  let rounded = scaled.toFixed(digit)
  if (!padding) {
    rounded = String(Number(rounded))
  }

  // format number and add suffix
  return (!sign ? '-' : '') + rounded + suffix
}
