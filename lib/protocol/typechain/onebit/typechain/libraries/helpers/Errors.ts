/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../common'

export interface ErrorsInterface extends utils.Interface {
  functions: {
    'BORROW_ALLOWANCE_NOT_ENOUGH()': FunctionFragment
    'CALLER_NOT_VAULT_ADMIN()': FunctionFragment
    'CT_CALLER_MUST_BE_CLAIM_ADMIN()': FunctionFragment
    'CT_CALLER_MUST_BE_VAULT()': FunctionFragment
    'CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF()': FunctionFragment
    'CT_INVALID_BURN_AMOUNT()': FunctionFragment
    'CT_INVALID_MINT_AMOUNT()': FunctionFragment
    'CT_TOKEN_CAN_NOT_BE_SELF()': FunctionFragment
    'CT_TOKEN_CAN_NOT_BE_UNDERLYING()': FunctionFragment
    'CT_TRANSFER_AMOUNT_NOT_GT_0()': FunctionFragment
    'MATH_ADDITION_OVERFLOW()': FunctionFragment
    'MATH_DIVISION_BY_ZERO()': FunctionFragment
    'MATH_MULTIPLICATION_OVERFLOW()': FunctionFragment
    'RC_INVALID_DECIMALS()': FunctionFragment
    'RL_LIQUIDITY_INDEX_OVERFLOW()': FunctionFragment
    'RL_LIQUIDITY_RATE_OVERFLOW()': FunctionFragment
    'RL_RESERVE_ALREADY_INITIALIZED()': FunctionFragment
    'SDT_BURN_EXCEEDS_BALANCE()': FunctionFragment
    'UL_INVALID_INDEX()': FunctionFragment
    'VAPR_INVALID_ADDRESSES_PROVIDER_ID()': FunctionFragment
    'VAPR_PROVIDER_NOT_REGISTERED()': FunctionFragment
    'VCM_NO_ERRORS()': FunctionFragment
    'VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH()': FunctionFragment
    'VL_INVALID_AMOUNT()': FunctionFragment
    'VL_INVALID_FUND_ADDRESS()': FunctionFragment
    'VL_INVALID_TIMESTAMP()': FunctionFragment
    'VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE()': FunctionFragment
    'VL_NOT_FINISHED()': FunctionFragment
    'VL_NOT_IN_LOCK_PERIOD()': FunctionFragment
    'VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD()': FunctionFragment
    'VL_NO_ACTIVE_RESERVE()': FunctionFragment
    'VL_PURCHASE_UPPER_LIMIT()': FunctionFragment
    'VL_RESERVE_FROZEN()': FunctionFragment
    'VL_TRANSFER_NOT_ALLOWED()': FunctionFragment
    'VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0()': FunctionFragment
    'VPC_CALLER_NOT_EMERGENCY_ADMIN()': FunctionFragment
    'VPC_CALLER_NOT_KYC_ADMIN()': FunctionFragment
    'VPC_CALLER_NOT_PORTFOLIO_MANAGER()': FunctionFragment
    'VPC_INVALID_ADDRESSES_PROVIDER_ID()': FunctionFragment
    'VPC_INVALID_CONFIGURATION()': FunctionFragment
    'VPC_INVALID_OTOKEN_VAULT_ADDRESS()': FunctionFragment
    'VPC_RESERVE_LIQUIDITY_NOT_0()': FunctionFragment
    'V_CALLER_MUST_BE_AN_OTOKEN()': FunctionFragment
    'V_CALLER_NOT_VAULT_CONFIGURATOR()': FunctionFragment
    'V_CALLER_NOT_VAULT_OPERATOR()': FunctionFragment
    'V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE()': FunctionFragment
    'V_IS_PAUSED()': FunctionFragment
    'V_NOT_CONTRACT()': FunctionFragment
    'V_NOT_IN_WHITELIST()': FunctionFragment
    'V_NO_MORE_RESERVES_ALLOWED()': FunctionFragment
    'V_REENTRANCY_NOT_ALLOWED()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'BORROW_ALLOWANCE_NOT_ENOUGH'
      | 'CALLER_NOT_VAULT_ADMIN'
      | 'CT_CALLER_MUST_BE_CLAIM_ADMIN'
      | 'CT_CALLER_MUST_BE_VAULT'
      | 'CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF'
      | 'CT_INVALID_BURN_AMOUNT'
      | 'CT_INVALID_MINT_AMOUNT'
      | 'CT_TOKEN_CAN_NOT_BE_SELF'
      | 'CT_TOKEN_CAN_NOT_BE_UNDERLYING'
      | 'CT_TRANSFER_AMOUNT_NOT_GT_0'
      | 'MATH_ADDITION_OVERFLOW'
      | 'MATH_DIVISION_BY_ZERO'
      | 'MATH_MULTIPLICATION_OVERFLOW'
      | 'RC_INVALID_DECIMALS'
      | 'RL_LIQUIDITY_INDEX_OVERFLOW'
      | 'RL_LIQUIDITY_RATE_OVERFLOW'
      | 'RL_RESERVE_ALREADY_INITIALIZED'
      | 'SDT_BURN_EXCEEDS_BALANCE'
      | 'UL_INVALID_INDEX'
      | 'VAPR_INVALID_ADDRESSES_PROVIDER_ID'
      | 'VAPR_PROVIDER_NOT_REGISTERED'
      | 'VCM_NO_ERRORS'
      | 'VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH'
      | 'VL_INVALID_AMOUNT'
      | 'VL_INVALID_FUND_ADDRESS'
      | 'VL_INVALID_TIMESTAMP'
      | 'VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE'
      | 'VL_NOT_FINISHED'
      | 'VL_NOT_IN_LOCK_PERIOD'
      | 'VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD'
      | 'VL_NO_ACTIVE_RESERVE'
      | 'VL_PURCHASE_UPPER_LIMIT'
      | 'VL_RESERVE_FROZEN'
      | 'VL_TRANSFER_NOT_ALLOWED'
      | 'VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0'
      | 'VPC_CALLER_NOT_EMERGENCY_ADMIN'
      | 'VPC_CALLER_NOT_KYC_ADMIN'
      | 'VPC_CALLER_NOT_PORTFOLIO_MANAGER'
      | 'VPC_INVALID_ADDRESSES_PROVIDER_ID'
      | 'VPC_INVALID_CONFIGURATION'
      | 'VPC_INVALID_OTOKEN_VAULT_ADDRESS'
      | 'VPC_RESERVE_LIQUIDITY_NOT_0'
      | 'V_CALLER_MUST_BE_AN_OTOKEN'
      | 'V_CALLER_NOT_VAULT_CONFIGURATOR'
      | 'V_CALLER_NOT_VAULT_OPERATOR'
      | 'V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE'
      | 'V_IS_PAUSED'
      | 'V_NOT_CONTRACT'
      | 'V_NOT_IN_WHITELIST'
      | 'V_NO_MORE_RESERVES_ALLOWED'
      | 'V_REENTRANCY_NOT_ALLOWED'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'BORROW_ALLOWANCE_NOT_ENOUGH', values?: undefined): string
  encodeFunctionData(functionFragment: 'CALLER_NOT_VAULT_ADMIN', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_CALLER_MUST_BE_CLAIM_ADMIN', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_CALLER_MUST_BE_VAULT', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_INVALID_BURN_AMOUNT', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_INVALID_MINT_AMOUNT', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_TOKEN_CAN_NOT_BE_SELF', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_TOKEN_CAN_NOT_BE_UNDERLYING', values?: undefined): string
  encodeFunctionData(functionFragment: 'CT_TRANSFER_AMOUNT_NOT_GT_0', values?: undefined): string
  encodeFunctionData(functionFragment: 'MATH_ADDITION_OVERFLOW', values?: undefined): string
  encodeFunctionData(functionFragment: 'MATH_DIVISION_BY_ZERO', values?: undefined): string
  encodeFunctionData(functionFragment: 'MATH_MULTIPLICATION_OVERFLOW', values?: undefined): string
  encodeFunctionData(functionFragment: 'RC_INVALID_DECIMALS', values?: undefined): string
  encodeFunctionData(functionFragment: 'RL_LIQUIDITY_INDEX_OVERFLOW', values?: undefined): string
  encodeFunctionData(functionFragment: 'RL_LIQUIDITY_RATE_OVERFLOW', values?: undefined): string
  encodeFunctionData(functionFragment: 'RL_RESERVE_ALREADY_INITIALIZED', values?: undefined): string
  encodeFunctionData(functionFragment: 'SDT_BURN_EXCEEDS_BALANCE', values?: undefined): string
  encodeFunctionData(functionFragment: 'UL_INVALID_INDEX', values?: undefined): string
  encodeFunctionData(functionFragment: 'VAPR_INVALID_ADDRESSES_PROVIDER_ID', values?: undefined): string
  encodeFunctionData(functionFragment: 'VAPR_PROVIDER_NOT_REGISTERED', values?: undefined): string
  encodeFunctionData(functionFragment: 'VCM_NO_ERRORS', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_INVALID_AMOUNT', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_INVALID_FUND_ADDRESS', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_INVALID_TIMESTAMP', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_NOT_FINISHED', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_NOT_IN_LOCK_PERIOD', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_NO_ACTIVE_RESERVE', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_PURCHASE_UPPER_LIMIT', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_RESERVE_FROZEN', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_TRANSFER_NOT_ALLOWED', values?: undefined): string
  encodeFunctionData(functionFragment: 'VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0', values?: undefined): string
  encodeFunctionData(functionFragment: 'VPC_CALLER_NOT_EMERGENCY_ADMIN', values?: undefined): string
  encodeFunctionData(functionFragment: 'VPC_CALLER_NOT_KYC_ADMIN', values?: undefined): string
  encodeFunctionData(functionFragment: 'VPC_CALLER_NOT_PORTFOLIO_MANAGER', values?: undefined): string
  encodeFunctionData(functionFragment: 'VPC_INVALID_ADDRESSES_PROVIDER_ID', values?: undefined): string
  encodeFunctionData(functionFragment: 'VPC_INVALID_CONFIGURATION', values?: undefined): string
  encodeFunctionData(functionFragment: 'VPC_INVALID_OTOKEN_VAULT_ADDRESS', values?: undefined): string
  encodeFunctionData(functionFragment: 'VPC_RESERVE_LIQUIDITY_NOT_0', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_CALLER_MUST_BE_AN_OTOKEN', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_CALLER_NOT_VAULT_CONFIGURATOR', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_CALLER_NOT_VAULT_OPERATOR', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_IS_PAUSED', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_NOT_CONTRACT', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_NOT_IN_WHITELIST', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_NO_MORE_RESERVES_ALLOWED', values?: undefined): string
  encodeFunctionData(functionFragment: 'V_REENTRANCY_NOT_ALLOWED', values?: undefined): string

  decodeFunctionResult(functionFragment: 'BORROW_ALLOWANCE_NOT_ENOUGH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CALLER_NOT_VAULT_ADMIN', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_CALLER_MUST_BE_CLAIM_ADMIN', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_CALLER_MUST_BE_VAULT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_INVALID_BURN_AMOUNT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_INVALID_MINT_AMOUNT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_TOKEN_CAN_NOT_BE_SELF', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_TOKEN_CAN_NOT_BE_UNDERLYING', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'CT_TRANSFER_AMOUNT_NOT_GT_0', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'MATH_ADDITION_OVERFLOW', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'MATH_DIVISION_BY_ZERO', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'MATH_MULTIPLICATION_OVERFLOW', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'RC_INVALID_DECIMALS', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'RL_LIQUIDITY_INDEX_OVERFLOW', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'RL_LIQUIDITY_RATE_OVERFLOW', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'RL_RESERVE_ALREADY_INITIALIZED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'SDT_BURN_EXCEEDS_BALANCE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'UL_INVALID_INDEX', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VAPR_INVALID_ADDRESSES_PROVIDER_ID', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VAPR_PROVIDER_NOT_REGISTERED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VCM_NO_ERRORS', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_INVALID_AMOUNT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_INVALID_FUND_ADDRESS', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_INVALID_TIMESTAMP', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_NOT_FINISHED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_NOT_IN_LOCK_PERIOD', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_NO_ACTIVE_RESERVE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_PURCHASE_UPPER_LIMIT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_RESERVE_FROZEN', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_TRANSFER_NOT_ALLOWED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VPC_CALLER_NOT_EMERGENCY_ADMIN', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VPC_CALLER_NOT_KYC_ADMIN', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VPC_CALLER_NOT_PORTFOLIO_MANAGER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VPC_INVALID_ADDRESSES_PROVIDER_ID', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VPC_INVALID_CONFIGURATION', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VPC_INVALID_OTOKEN_VAULT_ADDRESS', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VPC_RESERVE_LIQUIDITY_NOT_0', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_CALLER_MUST_BE_AN_OTOKEN', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_CALLER_NOT_VAULT_CONFIGURATOR', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_CALLER_NOT_VAULT_OPERATOR', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_IS_PAUSED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_NOT_CONTRACT', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_NOT_IN_WHITELIST', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_NO_MORE_RESERVES_ALLOWED', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'V_REENTRANCY_NOT_ALLOWED', data: BytesLike): Result

  events: {}
}

export interface Errors extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ErrorsInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    BORROW_ALLOWANCE_NOT_ENOUGH(overrides?: CallOverrides): Promise<[string]>

    CALLER_NOT_VAULT_ADMIN(overrides?: CallOverrides): Promise<[string]>

    CT_CALLER_MUST_BE_CLAIM_ADMIN(overrides?: CallOverrides): Promise<[string]>

    CT_CALLER_MUST_BE_VAULT(overrides?: CallOverrides): Promise<[string]>

    CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF(overrides?: CallOverrides): Promise<[string]>

    CT_INVALID_BURN_AMOUNT(overrides?: CallOverrides): Promise<[string]>

    CT_INVALID_MINT_AMOUNT(overrides?: CallOverrides): Promise<[string]>

    CT_TOKEN_CAN_NOT_BE_SELF(overrides?: CallOverrides): Promise<[string]>

    CT_TOKEN_CAN_NOT_BE_UNDERLYING(overrides?: CallOverrides): Promise<[string]>

    CT_TRANSFER_AMOUNT_NOT_GT_0(overrides?: CallOverrides): Promise<[string]>

    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<[string]>

    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<[string]>

    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<[string]>

    RC_INVALID_DECIMALS(overrides?: CallOverrides): Promise<[string]>

    RL_LIQUIDITY_INDEX_OVERFLOW(overrides?: CallOverrides): Promise<[string]>

    RL_LIQUIDITY_RATE_OVERFLOW(overrides?: CallOverrides): Promise<[string]>

    RL_RESERVE_ALREADY_INITIALIZED(overrides?: CallOverrides): Promise<[string]>

    SDT_BURN_EXCEEDS_BALANCE(overrides?: CallOverrides): Promise<[string]>

    UL_INVALID_INDEX(overrides?: CallOverrides): Promise<[string]>

    VAPR_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<[string]>

    VAPR_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<[string]>

    VCM_NO_ERRORS(overrides?: CallOverrides): Promise<[string]>

    VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH(overrides?: CallOverrides): Promise<[string]>

    VL_INVALID_AMOUNT(overrides?: CallOverrides): Promise<[string]>

    VL_INVALID_FUND_ADDRESS(overrides?: CallOverrides): Promise<[string]>

    VL_INVALID_TIMESTAMP(overrides?: CallOverrides): Promise<[string]>

    VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE(overrides?: CallOverrides): Promise<[string]>

    VL_NOT_FINISHED(overrides?: CallOverrides): Promise<[string]>

    VL_NOT_IN_LOCK_PERIOD(overrides?: CallOverrides): Promise<[string]>

    VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD(overrides?: CallOverrides): Promise<[string]>

    VL_NO_ACTIVE_RESERVE(overrides?: CallOverrides): Promise<[string]>

    VL_PURCHASE_UPPER_LIMIT(overrides?: CallOverrides): Promise<[string]>

    VL_RESERVE_FROZEN(overrides?: CallOverrides): Promise<[string]>

    VL_TRANSFER_NOT_ALLOWED(overrides?: CallOverrides): Promise<[string]>

    VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0(overrides?: CallOverrides): Promise<[string]>

    VPC_CALLER_NOT_EMERGENCY_ADMIN(overrides?: CallOverrides): Promise<[string]>

    VPC_CALLER_NOT_KYC_ADMIN(overrides?: CallOverrides): Promise<[string]>

    VPC_CALLER_NOT_PORTFOLIO_MANAGER(overrides?: CallOverrides): Promise<[string]>

    VPC_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<[string]>

    VPC_INVALID_CONFIGURATION(overrides?: CallOverrides): Promise<[string]>

    VPC_INVALID_OTOKEN_VAULT_ADDRESS(overrides?: CallOverrides): Promise<[string]>

    VPC_RESERVE_LIQUIDITY_NOT_0(overrides?: CallOverrides): Promise<[string]>

    V_CALLER_MUST_BE_AN_OTOKEN(overrides?: CallOverrides): Promise<[string]>

    V_CALLER_NOT_VAULT_CONFIGURATOR(overrides?: CallOverrides): Promise<[string]>

    V_CALLER_NOT_VAULT_OPERATOR(overrides?: CallOverrides): Promise<[string]>

    V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE(overrides?: CallOverrides): Promise<[string]>

    V_IS_PAUSED(overrides?: CallOverrides): Promise<[string]>

    V_NOT_CONTRACT(overrides?: CallOverrides): Promise<[string]>

    V_NOT_IN_WHITELIST(overrides?: CallOverrides): Promise<[string]>

    V_NO_MORE_RESERVES_ALLOWED(overrides?: CallOverrides): Promise<[string]>

    V_REENTRANCY_NOT_ALLOWED(overrides?: CallOverrides): Promise<[string]>
  }

  BORROW_ALLOWANCE_NOT_ENOUGH(overrides?: CallOverrides): Promise<string>

  CALLER_NOT_VAULT_ADMIN(overrides?: CallOverrides): Promise<string>

  CT_CALLER_MUST_BE_CLAIM_ADMIN(overrides?: CallOverrides): Promise<string>

  CT_CALLER_MUST_BE_VAULT(overrides?: CallOverrides): Promise<string>

  CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF(overrides?: CallOverrides): Promise<string>

  CT_INVALID_BURN_AMOUNT(overrides?: CallOverrides): Promise<string>

  CT_INVALID_MINT_AMOUNT(overrides?: CallOverrides): Promise<string>

  CT_TOKEN_CAN_NOT_BE_SELF(overrides?: CallOverrides): Promise<string>

  CT_TOKEN_CAN_NOT_BE_UNDERLYING(overrides?: CallOverrides): Promise<string>

  CT_TRANSFER_AMOUNT_NOT_GT_0(overrides?: CallOverrides): Promise<string>

  MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<string>

  MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<string>

  MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<string>

  RC_INVALID_DECIMALS(overrides?: CallOverrides): Promise<string>

  RL_LIQUIDITY_INDEX_OVERFLOW(overrides?: CallOverrides): Promise<string>

  RL_LIQUIDITY_RATE_OVERFLOW(overrides?: CallOverrides): Promise<string>

  RL_RESERVE_ALREADY_INITIALIZED(overrides?: CallOverrides): Promise<string>

  SDT_BURN_EXCEEDS_BALANCE(overrides?: CallOverrides): Promise<string>

  UL_INVALID_INDEX(overrides?: CallOverrides): Promise<string>

  VAPR_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<string>

  VAPR_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<string>

  VCM_NO_ERRORS(overrides?: CallOverrides): Promise<string>

  VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH(overrides?: CallOverrides): Promise<string>

  VL_INVALID_AMOUNT(overrides?: CallOverrides): Promise<string>

  VL_INVALID_FUND_ADDRESS(overrides?: CallOverrides): Promise<string>

  VL_INVALID_TIMESTAMP(overrides?: CallOverrides): Promise<string>

  VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE(overrides?: CallOverrides): Promise<string>

  VL_NOT_FINISHED(overrides?: CallOverrides): Promise<string>

  VL_NOT_IN_LOCK_PERIOD(overrides?: CallOverrides): Promise<string>

  VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD(overrides?: CallOverrides): Promise<string>

  VL_NO_ACTIVE_RESERVE(overrides?: CallOverrides): Promise<string>

  VL_PURCHASE_UPPER_LIMIT(overrides?: CallOverrides): Promise<string>

  VL_RESERVE_FROZEN(overrides?: CallOverrides): Promise<string>

  VL_TRANSFER_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>

  VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0(overrides?: CallOverrides): Promise<string>

  VPC_CALLER_NOT_EMERGENCY_ADMIN(overrides?: CallOverrides): Promise<string>

  VPC_CALLER_NOT_KYC_ADMIN(overrides?: CallOverrides): Promise<string>

  VPC_CALLER_NOT_PORTFOLIO_MANAGER(overrides?: CallOverrides): Promise<string>

  VPC_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<string>

  VPC_INVALID_CONFIGURATION(overrides?: CallOverrides): Promise<string>

  VPC_INVALID_OTOKEN_VAULT_ADDRESS(overrides?: CallOverrides): Promise<string>

  VPC_RESERVE_LIQUIDITY_NOT_0(overrides?: CallOverrides): Promise<string>

  V_CALLER_MUST_BE_AN_OTOKEN(overrides?: CallOverrides): Promise<string>

  V_CALLER_NOT_VAULT_CONFIGURATOR(overrides?: CallOverrides): Promise<string>

  V_CALLER_NOT_VAULT_OPERATOR(overrides?: CallOverrides): Promise<string>

  V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE(overrides?: CallOverrides): Promise<string>

  V_IS_PAUSED(overrides?: CallOverrides): Promise<string>

  V_NOT_CONTRACT(overrides?: CallOverrides): Promise<string>

  V_NOT_IN_WHITELIST(overrides?: CallOverrides): Promise<string>

  V_NO_MORE_RESERVES_ALLOWED(overrides?: CallOverrides): Promise<string>

  V_REENTRANCY_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>

  callStatic: {
    BORROW_ALLOWANCE_NOT_ENOUGH(overrides?: CallOverrides): Promise<string>

    CALLER_NOT_VAULT_ADMIN(overrides?: CallOverrides): Promise<string>

    CT_CALLER_MUST_BE_CLAIM_ADMIN(overrides?: CallOverrides): Promise<string>

    CT_CALLER_MUST_BE_VAULT(overrides?: CallOverrides): Promise<string>

    CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF(overrides?: CallOverrides): Promise<string>

    CT_INVALID_BURN_AMOUNT(overrides?: CallOverrides): Promise<string>

    CT_INVALID_MINT_AMOUNT(overrides?: CallOverrides): Promise<string>

    CT_TOKEN_CAN_NOT_BE_SELF(overrides?: CallOverrides): Promise<string>

    CT_TOKEN_CAN_NOT_BE_UNDERLYING(overrides?: CallOverrides): Promise<string>

    CT_TRANSFER_AMOUNT_NOT_GT_0(overrides?: CallOverrides): Promise<string>

    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<string>

    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<string>

    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<string>

    RC_INVALID_DECIMALS(overrides?: CallOverrides): Promise<string>

    RL_LIQUIDITY_INDEX_OVERFLOW(overrides?: CallOverrides): Promise<string>

    RL_LIQUIDITY_RATE_OVERFLOW(overrides?: CallOverrides): Promise<string>

    RL_RESERVE_ALREADY_INITIALIZED(overrides?: CallOverrides): Promise<string>

    SDT_BURN_EXCEEDS_BALANCE(overrides?: CallOverrides): Promise<string>

    UL_INVALID_INDEX(overrides?: CallOverrides): Promise<string>

    VAPR_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<string>

    VAPR_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<string>

    VCM_NO_ERRORS(overrides?: CallOverrides): Promise<string>

    VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH(overrides?: CallOverrides): Promise<string>

    VL_INVALID_AMOUNT(overrides?: CallOverrides): Promise<string>

    VL_INVALID_FUND_ADDRESS(overrides?: CallOverrides): Promise<string>

    VL_INVALID_TIMESTAMP(overrides?: CallOverrides): Promise<string>

    VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE(overrides?: CallOverrides): Promise<string>

    VL_NOT_FINISHED(overrides?: CallOverrides): Promise<string>

    VL_NOT_IN_LOCK_PERIOD(overrides?: CallOverrides): Promise<string>

    VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD(overrides?: CallOverrides): Promise<string>

    VL_NO_ACTIVE_RESERVE(overrides?: CallOverrides): Promise<string>

    VL_PURCHASE_UPPER_LIMIT(overrides?: CallOverrides): Promise<string>

    VL_RESERVE_FROZEN(overrides?: CallOverrides): Promise<string>

    VL_TRANSFER_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>

    VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0(overrides?: CallOverrides): Promise<string>

    VPC_CALLER_NOT_EMERGENCY_ADMIN(overrides?: CallOverrides): Promise<string>

    VPC_CALLER_NOT_KYC_ADMIN(overrides?: CallOverrides): Promise<string>

    VPC_CALLER_NOT_PORTFOLIO_MANAGER(overrides?: CallOverrides): Promise<string>

    VPC_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<string>

    VPC_INVALID_CONFIGURATION(overrides?: CallOverrides): Promise<string>

    VPC_INVALID_OTOKEN_VAULT_ADDRESS(overrides?: CallOverrides): Promise<string>

    VPC_RESERVE_LIQUIDITY_NOT_0(overrides?: CallOverrides): Promise<string>

    V_CALLER_MUST_BE_AN_OTOKEN(overrides?: CallOverrides): Promise<string>

    V_CALLER_NOT_VAULT_CONFIGURATOR(overrides?: CallOverrides): Promise<string>

    V_CALLER_NOT_VAULT_OPERATOR(overrides?: CallOverrides): Promise<string>

    V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE(overrides?: CallOverrides): Promise<string>

    V_IS_PAUSED(overrides?: CallOverrides): Promise<string>

    V_NOT_CONTRACT(overrides?: CallOverrides): Promise<string>

    V_NOT_IN_WHITELIST(overrides?: CallOverrides): Promise<string>

    V_NO_MORE_RESERVES_ALLOWED(overrides?: CallOverrides): Promise<string>

    V_REENTRANCY_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    BORROW_ALLOWANCE_NOT_ENOUGH(overrides?: CallOverrides): Promise<BigNumber>

    CALLER_NOT_VAULT_ADMIN(overrides?: CallOverrides): Promise<BigNumber>

    CT_CALLER_MUST_BE_CLAIM_ADMIN(overrides?: CallOverrides): Promise<BigNumber>

    CT_CALLER_MUST_BE_VAULT(overrides?: CallOverrides): Promise<BigNumber>

    CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF(overrides?: CallOverrides): Promise<BigNumber>

    CT_INVALID_BURN_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>

    CT_INVALID_MINT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>

    CT_TOKEN_CAN_NOT_BE_SELF(overrides?: CallOverrides): Promise<BigNumber>

    CT_TOKEN_CAN_NOT_BE_UNDERLYING(overrides?: CallOverrides): Promise<BigNumber>

    CT_TRANSFER_AMOUNT_NOT_GT_0(overrides?: CallOverrides): Promise<BigNumber>

    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>

    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<BigNumber>

    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>

    RC_INVALID_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>

    RL_LIQUIDITY_INDEX_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>

    RL_LIQUIDITY_RATE_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>

    RL_RESERVE_ALREADY_INITIALIZED(overrides?: CallOverrides): Promise<BigNumber>

    SDT_BURN_EXCEEDS_BALANCE(overrides?: CallOverrides): Promise<BigNumber>

    UL_INVALID_INDEX(overrides?: CallOverrides): Promise<BigNumber>

    VAPR_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<BigNumber>

    VAPR_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<BigNumber>

    VCM_NO_ERRORS(overrides?: CallOverrides): Promise<BigNumber>

    VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH(overrides?: CallOverrides): Promise<BigNumber>

    VL_INVALID_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>

    VL_INVALID_FUND_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>

    VL_INVALID_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>

    VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE(overrides?: CallOverrides): Promise<BigNumber>

    VL_NOT_FINISHED(overrides?: CallOverrides): Promise<BigNumber>

    VL_NOT_IN_LOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

    VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>

    VL_NO_ACTIVE_RESERVE(overrides?: CallOverrides): Promise<BigNumber>

    VL_PURCHASE_UPPER_LIMIT(overrides?: CallOverrides): Promise<BigNumber>

    VL_RESERVE_FROZEN(overrides?: CallOverrides): Promise<BigNumber>

    VL_TRANSFER_NOT_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>

    VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0(overrides?: CallOverrides): Promise<BigNumber>

    VPC_CALLER_NOT_EMERGENCY_ADMIN(overrides?: CallOverrides): Promise<BigNumber>

    VPC_CALLER_NOT_KYC_ADMIN(overrides?: CallOverrides): Promise<BigNumber>

    VPC_CALLER_NOT_PORTFOLIO_MANAGER(overrides?: CallOverrides): Promise<BigNumber>

    VPC_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<BigNumber>

    VPC_INVALID_CONFIGURATION(overrides?: CallOverrides): Promise<BigNumber>

    VPC_INVALID_OTOKEN_VAULT_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>

    VPC_RESERVE_LIQUIDITY_NOT_0(overrides?: CallOverrides): Promise<BigNumber>

    V_CALLER_MUST_BE_AN_OTOKEN(overrides?: CallOverrides): Promise<BigNumber>

    V_CALLER_NOT_VAULT_CONFIGURATOR(overrides?: CallOverrides): Promise<BigNumber>

    V_CALLER_NOT_VAULT_OPERATOR(overrides?: CallOverrides): Promise<BigNumber>

    V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE(overrides?: CallOverrides): Promise<BigNumber>

    V_IS_PAUSED(overrides?: CallOverrides): Promise<BigNumber>

    V_NOT_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>

    V_NOT_IN_WHITELIST(overrides?: CallOverrides): Promise<BigNumber>

    V_NO_MORE_RESERVES_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>

    V_REENTRANCY_NOT_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    BORROW_ALLOWANCE_NOT_ENOUGH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CALLER_NOT_VAULT_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_CALLER_MUST_BE_CLAIM_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_CALLER_MUST_BE_VAULT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_INVALID_BURN_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_INVALID_MINT_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_TOKEN_CAN_NOT_BE_SELF(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_TOKEN_CAN_NOT_BE_UNDERLYING(overrides?: CallOverrides): Promise<PopulatedTransaction>

    CT_TRANSFER_AMOUNT_NOT_GT_0(overrides?: CallOverrides): Promise<PopulatedTransaction>

    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>

    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<PopulatedTransaction>

    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>

    RC_INVALID_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    RL_LIQUIDITY_INDEX_OVERFLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>

    RL_LIQUIDITY_RATE_OVERFLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>

    RL_RESERVE_ALREADY_INITIALIZED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    SDT_BURN_EXCEEDS_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    UL_INVALID_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VAPR_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VAPR_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VCM_NO_ERRORS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_INVALID_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_INVALID_FUND_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_INVALID_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_NOT_FINISHED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_NOT_IN_LOCK_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_NO_ACTIVE_RESERVE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_PURCHASE_UPPER_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_RESERVE_FROZEN(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_TRANSFER_NOT_ALLOWED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VPC_CALLER_NOT_EMERGENCY_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VPC_CALLER_NOT_KYC_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VPC_CALLER_NOT_PORTFOLIO_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VPC_INVALID_ADDRESSES_PROVIDER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VPC_INVALID_CONFIGURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VPC_INVALID_OTOKEN_VAULT_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VPC_RESERVE_LIQUIDITY_NOT_0(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_CALLER_MUST_BE_AN_OTOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_CALLER_NOT_VAULT_CONFIGURATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_CALLER_NOT_VAULT_OPERATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_IS_PAUSED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_NOT_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_NOT_IN_WHITELIST(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_NO_MORE_RESERVES_ALLOWED(overrides?: CallOverrides): Promise<PopulatedTransaction>

    V_REENTRANCY_NOT_ALLOWED(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
