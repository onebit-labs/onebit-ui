import type { providers } from 'ethers'
import { constants } from 'ethers'

import BaseService from '../commons/BaseService'
import type { EthereumTransactionTypeExtended, tEthereumAddress } from '../commons/types'
import { eEthereumTxType, ProtocolAction } from '../commons/types'
import type { Vault } from './typechain/Vault'
import { Vault__factory } from './typechain/factories/Vault__factory'
import type { OToken } from './typechain/OToken'
import { OToken__factory } from './typechain/factories/OToken__factory'
import type { ERC20Service } from '../erc20'
import { normalize } from 'lib/math'
import { API_ETH_MOCK_ADDRESS, DEFAULT_APPROVE_AMOUNT, getTxValue } from '../commons/utils'
type baseVaultProps = {
  vault: tEthereumAddress
}

export type GetReserveDataProps = baseVaultProps
export type GetUserExpirationTimestampProps = baseVaultProps & {
  user: tEthereumAddress
}
export type DepositProps = baseVaultProps & {
  erc20Service: ERC20Service
  reserve: tEthereumAddress
  user: tEthereumAddress
  amount: string
}
export type WithdrawProps = baseVaultProps & {
  erc20Service: ERC20Service
  reserve: tEthereumAddress
  user: tEthereumAddress
  amount: string
}

export class VaultService extends BaseService<Vault> {
  provider: any

  constructor(provider: providers.Provider) {
    super(provider, Vault__factory)
    this.provider = provider

    this.getReserveData = this.getReserveData.bind(this)
    this.getReserveNormalizedIncome = this.getReserveNormalizedIncome.bind(this)
    this.deposit = this.deposit.bind(this)
    this.withdraw = this.withdraw.bind(this)
  }

  public getReserveData({ vault }: GetReserveDataProps) {
    const vaultContract = this.getContractInstance(vault)
    return vaultContract.getReserveData()
  }

  public getReserveNormalizedIncome({ vault }: GetReserveDataProps) {
    const vaultContract = this.getContractInstance(vault)
    return vaultContract.getReserveNormalizedIncome()
  }

  public getUserExpirationTimestamp({ vault, user }: GetUserExpirationTimestampProps) {
    const vaultContract = this.getContractInstance(vault)
    return vaultContract.getUserExpirationTimestamp(user)
  }

  public async deposit({ vault, erc20Service, reserve, user, amount }: DepositProps) {
    const txs: EthereumTransactionTypeExtended[] = []
    const { isApproved, approve, decimalsOf } = erc20Service
    const reserveDecimals = await decimalsOf(reserve)
    const convertedAmount = normalize(amount, -reserveDecimals).toFixed(0)

    const approved = await isApproved({
      token: reserve,
      user,
      spender: vault,
      amount,
    })

    if (!approved) {
      const approveTx: EthereumTransactionTypeExtended = approve({
        user,
        token: reserve,
        spender: vault,
        amount: DEFAULT_APPROVE_AMOUNT,
      })
      txs.push(approveTx)
    }

    const vaultContract = this.getContractInstance(vault)
    const txCallback = this.generateTxCallback({
      rawTxMethod: async () => vaultContract.populateTransaction.deposit(convertedAmount, user, '0'),
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

  public async withdraw({ vault, erc20Service, reserve, amount, user }: WithdrawProps) {
    const txs: EthereumTransactionTypeExtended[] = []
    const { decimalsOf } = erc20Service
    const decimals = await decimalsOf(reserve)

    const convertedAmount = amount === '-1' ? constants.MaxUint256.toString() : normalize(amount, -decimals).toFixed(0)
    const vaultContract = this.getContractInstance(vault)

    const txCallback = this.generateTxCallback({
      rawTxMethod: async () => vaultContract.populateTransaction.withdraw(convertedAmount, user),
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
    const scaledTotalSupply = await oTokenContract.scaledTotalSupply()
    return normalize(scaledTotalSupply, decimals)
  }
}
