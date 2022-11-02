import { getBigNumber, getNumber } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { Portfolio } from '..'
import type { OnebitGraphData } from '../application/onebitGraph'
import { getPortfolioLockTime } from './lockTime'

export type LendingPoolGraph = {
  term: number
  depositors: BN
  depositorList: string[]
}
export const getLendingPoolGraph = (lendingPoolAddress: string, { lendingPool }: OnebitGraphData) => {
  if (!lendingPool) return {} as undefined
  const data = lendingPool.find((i) => i.id === lendingPoolAddress)
  if (!data) return {} as undefined
  const { term, depositors } = data
  return {
    term,
    depositors: toBN(depositors.length),
    depositorList: depositors,
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
  const data = portfolioTerm.filter((i) => i.lendingPool === lendingPoolAddress)
  if (!data) return { portfolioTerm: [] } as undefined
  const returnValue = data.map((portfolioTerm) => {
    const timestamps = getNumber(portfolioTerm, ['redemptionBeginTimestamp', 'purchaseBeginTimestamp', 'purchaseEndTimestamp', 'createTimestamp'])
    const returnValue: PortfolioTermGraph = {
      ...portfolioTerm,
      ...timestamps,
      ...getBigNumber(portfolioTerm, ['value'], 18),
      ...getBigNumber(portfolioTerm, ['previousLiquidityIndex'], 27),
      ...getBigNumber(portfolioTerm, ['managementFeeRate', 'performanceFeeRate'], 4),
      lockTime: getPortfolioLockTime(timestamps),
      liquidityIndex: toBN(0),
      depositors: 0,
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

export type TransactionGraph = {
  id: string
  createTimestamp: number
  amount: BN
  lendingPool: string
  type: 'deposit' | 'withdrawal'
  portfolio: Portfolio
  symbol: string
}
const getTransactionType = (type: number) => {
  switch (type) {
    case 1:
      return 'deposit'
    case 2:
      return 'withdrawal'
  }
}
export const getTransactionGraph = ({ transaction }: OnebitGraphData, portfolioData: Portfolio[]) => {
  if (!transaction) return [] as undefined
  const returnValue = transaction.map((t) => {
    const portfolio = portfolioData.find((p) => p.address.LendingPool === t.lendingPool) || {} as undefined
    const { symbol } = portfolio
    const timestamps = getNumber(t, ['createTimestamp'])
    const returnValue: TransactionGraph = {
      ...t,
      ...timestamps,
      ...getBigNumber(t, ['amount'], 18),
      type: getTransactionType(t.type),
      portfolio,
      symbol
    }
    return returnValue
  })

  return returnValue
}
