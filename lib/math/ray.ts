import type BigNumber from 'bignumber.js'
import { toZDBN, toBN } from 'lib/math'
import type { BNValue } from './types'

export const WAD = toZDBN(10).pow(18)
export const HALF_WAD = WAD.dividedBy(2)

export const RAY = toZDBN(10).pow(27)
export const HALF_RAY = RAY.dividedBy(2)

export const WAD_RAY_RATIO = toZDBN(10).pow(9)

export function rayMul(a: BNValue, b: BNValue): BigNumber {
  return HALF_RAY.plus(toZDBN(a).multipliedBy(toBN(b))).div(RAY)
}

export function rayDiv(a: BNValue, b: BNValue): BigNumber {
  const halfB = toZDBN(b).div(2)

  return halfB.plus(toZDBN(a).multipliedBy(RAY)).div(toBN(b))
}

export function rayToWad(a: BNValue): BigNumber {
  const halfRatio = toZDBN(WAD_RAY_RATIO).div(2)

  return halfRatio.plus(toBN(a)).div(WAD_RAY_RATIO)
}

export function wadToRay(a: BNValue): BigNumber {
  return toZDBN(a).multipliedBy(WAD_RAY_RATIO).decimalPlaces(0)
}

export function rayPow(a: BNValue, p: BNValue): BigNumber {
  let x = toZDBN(a)
  let n = toZDBN(p)
  let z = n.modulo(2).eq(0) ? toZDBN(RAY) : x

  for (n = n.div(2); !n.eq(0); n = n.div(2)) {
    x = rayMul(x, x)

    if (!n.modulo(2).eq(0)) {
      z = rayMul(z, x)
    }
  }

  return z
}

/**
 * RayPow is slow and gas intensive therefore in v2 we switched to binomial approximation on the contract level.
 * While the results ar not exact to the last decimal, they are close enough.
 */
export function binomialApproximatedRayPow(a: BNValue, p: BNValue): BigNumber {
  const base = toZDBN(a)
  const exp = toZDBN(p)
  if (exp.eq(0)) return RAY
  const expMinusOne = exp.minus(1)
  const expMinusTwo = exp.gt(2) ? exp.minus(2) : 0

  const basePowerTwo = rayMul(base, base)
  const basePowerThree = rayMul(basePowerTwo, base)

  const firstTerm = exp.multipliedBy(base)
  const secondTerm = exp.multipliedBy(expMinusOne).multipliedBy(basePowerTwo).div(2)
  const thirdTerm = exp.multipliedBy(expMinusOne).multipliedBy(expMinusTwo).multipliedBy(basePowerThree).div(6)

  return RAY.plus(firstTerm).plus(secondTerm).plus(thirdTerm)
}
