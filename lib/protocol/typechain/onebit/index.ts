import type { providers } from 'ethers'
import { constants } from 'ethers'

import BaseService from '../commons/BaseService'
import type { EthereumTransactionTypeExtended, tEthereumAddress } from '../commons/types'
import { eEthereumTxType, ProtocolAction } from '../commons/types'
import type { LendingPool } from './typechain/LendingPool'
import { LendingPool__factory } from './typechain/factories/LendingPool__factory'
import type { ERC20Service } from '../erc20'
import { normalize } from 'lib/math'
import { DEFAULT_APPROVE_AMOUNT, getTxValue } from '../commons/utils'
type baseProps = {
  pool: tEthereumAddress
}

export type getReserveDataProps = baseProps
export type depositProps = baseProps & {
  erc20Service: ERC20Service
  reserve: tEthereumAddress
  user: tEthereumAddress
  amount: string
}
export type withdrawProps = baseProps & {
  erc20Service: ERC20Service
  reserve: tEthereumAddress
  user: tEthereumAddress
  amount: string
}

export class LendingPoolService extends BaseService<LendingPool> {
  provider: any

  constructor(provider: providers.Provider) {
    super(provider, LendingPool__factory)
    this.provider = provider

    this.getReserveData = this.getReserveData.bind(this)
  }

  public getReserveData({ pool }: getReserveDataProps) {
    const lendingPool = this.getContractInstance(pool)
    return lendingPool.getReserveData()
  }

  public getReserveNormalizedIncome({ pool }: getReserveDataProps) {
    const lendingPool = this.getContractInstance(pool)
    return lendingPool.getReserveNormalizedIncome()
  }

  public async deposit({ pool, erc20Service, reserve, user, amount }: depositProps) {
    const txs: EthereumTransactionTypeExtended[] = []
    const { isApproved, approve, decimalsOf } = erc20Service
    const reserveDecimals = await decimalsOf(reserve)
    const convertedAmount = normalize(amount, -reserveDecimals).toFixed(0)

    const approved = await isApproved({
      token: reserve,
      user,
      spender: pool,
      amount,
    })

    if (!approved) {
      const approveTx: EthereumTransactionTypeExtended = approve({
        user,
        token: reserve,
        spender: pool,
        amount: DEFAULT_APPROVE_AMOUNT,
      })
      txs.push(approveTx)
    }

    const lendingPool = this.getContractInstance(pool)
    const txCallback = this.generateTxCallback({
      rawTxMethod: async () => lendingPool.populateTransaction.deposit(convertedAmount, user, '0'),
      from: user,
      value: getTxValue(reserve, convertedAmount),
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP_ACTION,
      gas: this.generateTxPriceEstimation(txs, txCallback, ProtocolAction.deposit),
    })

    return txs
  }

  public async withdraw({ pool, erc20Service, reserve, amount, user }: withdrawProps) {
    const txs: EthereumTransactionTypeExtended[] = []
    const { decimalsOf } = erc20Service
    const decimals = await decimalsOf(reserve)

    const convertedAmount = amount === '-1' ? constants.MaxUint256.toString() : normalize(amount, -decimals).toFixed(0)
    const lendingPool = this.getContractInstance(pool)

    const txCallback = this.generateTxCallback({
      rawTxMethod: async () => lendingPool.populateTransaction.withdraw(convertedAmount, user),
      from: user,
      action: ProtocolAction.withdraw,
    })

    txs.push({
      tx: txCallback,
      txType: eEthereumTxType.DLP_ACTION,
      gas: this.generateTxPriceEstimation([], txCallback, ProtocolAction.withdraw),
    })

    return txs
  }
}
