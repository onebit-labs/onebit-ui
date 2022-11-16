import type { providers } from 'ethers'
import { constants } from 'ethers'

import BaseService from '../commons/BaseService'
import type { EthereumTransactionTypeExtended, tEthereumAddress } from '../commons/types'
import { eEthereumTxType, ProtocolAction } from '../commons/types'
import type { LendingPool } from './typechain/LendingPool'
import { LendingPool__factory } from './typechain/factories/LendingPool__factory'
import type { OToken } from './typechain/OToken'
import { OToken__factory } from './typechain/factories/OToken__factory'
import type { ERC20Service } from '../erc20'
import { normalize } from 'lib/math'
import { API_ETH_MOCK_ADDRESS, DEFAULT_APPROVE_AMOUNT, getTxValue } from '../commons/utils'
type baseLendingPoolProps = {
  pool: tEthereumAddress
}

export type getReserveDataProps = baseLendingPoolProps
export type depositProps = baseLendingPoolProps & {
  erc20Service: ERC20Service
  reserve: tEthereumAddress
  user: tEthereumAddress
  amount: string
}
export type withdrawProps = baseLendingPoolProps & {
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
    this.getReserveNormalizedIncome = this.getReserveNormalizedIncome.bind(this)
    this.deposit = this.deposit.bind(this)
    this.withdraw = this.withdraw.bind(this)
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

type baseOTokenProps = {
  oTokenAddress: tEthereumAddress
}
type getScaledBalanceOfProps = baseOTokenProps & {
  user: tEthereumAddress
}
export class OTokenService extends BaseService<OToken> {
  provider: any
  readonly tokenDecimals: Record<string, number>

  constructor(provider: providers.Provider) {
    super(provider, OToken__factory)
    this.provider = provider
    this.tokenDecimals = {}

    this.decimalsOf = this.decimalsOf.bind(this)
    this.getScaledBalanceOf = this.getScaledBalanceOf.bind(this)
    this.getScaledTotalSupply = this.getScaledTotalSupply.bind(this)
  }

  public async decimalsOf(token: tEthereumAddress): Promise<number> {
    if (token.toLowerCase() === API_ETH_MOCK_ADDRESS) return 18
    if (!this.tokenDecimals[token]) {
      const oTokenContract = this.getContractInstance(token)
      this.tokenDecimals[token] = await oTokenContract.decimals()
    }

    return this.tokenDecimals[token]
  }

  public async getScaledBalanceOf({ oTokenAddress, user }: getScaledBalanceOfProps) {
    const decimals = await this.decimalsOf(oTokenAddress)
    const oTokenContract = this.getContractInstance(oTokenAddress)
    const balance = await oTokenContract.scaledBalanceOf(user)
    return normalize(balance, decimals)
  }

  public async getScaledTotalSupply({ oTokenAddress }: baseOTokenProps) {
    const decimals = await this.decimalsOf(oTokenAddress)
    const oTokenContract = this.getContractInstance(oTokenAddress)
    const totalSupply = await oTokenContract.scaledTotalSupply()
    return normalize(totalSupply, decimals)
  }
}
