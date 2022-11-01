import { getBigNumber, getNumber } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { OnebitGraphData } from '../application/onebitGraph'
import { getPortfolioLockTime } from './lockTime'

export type LendingPoolGraph = {
  term: number
  depositors: BN
  depositorList: string[]
}
export const getLendingPoolGraph = (lendingPoolAddress: string, { lendingPool }: OnebitGraphData) => {
  if (!lendingPool) return {} as undefined
  const data = lendingPool.find(i => i.id === lendingPoolAddress)
  if (!data) return {} as undefined
  const { term, depositors } = data
  return {
    term,
    depositors: toBN(depositors.length),
    depositorList: depositors
  }
}

export type PortfolioTermGraph = {
  id: string
  createTimestamp: number
  managementFeeRate: BN
  performanceFeeRate: BN
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  lockTime: number
  term: number
  depositors: number
  previousDepositors: number
  liquidityIndex: BN
  previousLiquidityIndex: BN
  value: BN
}
export const getPortfolioTermGraph = (lendingPoolAddress: string, { portfolioTerm }: OnebitGraphData) => {
  if (!portfolioTerm) return { portfolioTerm: [] } as undefined
  const data = portfolioTerm.filter(i => i.lendingPool === lendingPoolAddress)
  if (!data) return { portfolioTerm: [] } as undefined
  const returnValue = data.map(portfolioTerm => {
    const timestamps = getNumber(portfolioTerm, [
      'purchaseBeginTimestamp',
      'purchaseEndTimestamp',
      'createTimestamp',
    ])
    const returnValue: PortfolioTermGraph = {
      ...portfolioTerm,
      ...timestamps,
      ...getBigNumber(portfolioTerm, ['value'], 18),
      ...getBigNumber(portfolioTerm, ['previousLiquidityIndex'], 27),
      ...getBigNumber(portfolioTerm, ['managementFeeRate', 'performanceFeeRate'], 4),
      lockTime: getPortfolioLockTime(timestamps),
      liquidityIndex: toBN(0),
      depositors: 0
    }

    return returnValue
  })

  if (returnValue.length > 1) {
    const length = returnValue.length - 1
    for (let index = 0; index < length; index++) {
      const portfolioTerm = returnValue[index]
      const nextPortfolioTerm = returnValue[index + 1]
      portfolioTerm.liquidityIndex = nextPortfolioTerm.previousLiquidityIndex
      portfolioTerm.depositors = nextPortfolioTerm.previousDepositors
    }
  }

  return { portfolioTerm: returnValue }
}