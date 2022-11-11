/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common'

export declare namespace DataTypes {
  export type ReserveConfigurationMapStruct = {
    data: PromiseOrValue<BigNumberish>
  }

  export type ReserveConfigurationMapStructOutput = [BigNumber] & {
    data: BigNumber
  }

  export type ReserveDataStruct = {
    configuration: DataTypes.ReserveConfigurationMapStruct
    liquidityIndex: PromiseOrValue<BigNumberish>
    currentLiquidityRate: PromiseOrValue<BigNumberish>
    previousLiquidityIndex: PromiseOrValue<BigNumberish>
    purchaseUpperLimit: PromiseOrValue<BigNumberish>
    lastUpdateTimestamp: PromiseOrValue<BigNumberish>
    purchaseBeginTimestamp: PromiseOrValue<BigNumberish>
    purchaseEndTimestamp: PromiseOrValue<BigNumberish>
    redemptionBeginTimestamp: PromiseOrValue<BigNumberish>
    managementFeeRate: PromiseOrValue<BigNumberish>
    performanceFeeRate: PromiseOrValue<BigNumberish>
    oTokenAddress: PromiseOrValue<string>
    fundAddress: PromiseOrValue<string>
    softUpperLimit: PromiseOrValue<BigNumberish>
  }

  export type ReserveDataStructOutput = [
    DataTypes.ReserveConfigurationMapStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number,
    number,
    number,
    string,
    string,
    BigNumber
  ] & {
    configuration: DataTypes.ReserveConfigurationMapStructOutput
    liquidityIndex: BigNumber
    currentLiquidityRate: BigNumber
    previousLiquidityIndex: BigNumber
    purchaseUpperLimit: BigNumber
    lastUpdateTimestamp: number
    purchaseBeginTimestamp: number
    purchaseEndTimestamp: number
    redemptionBeginTimestamp: number
    managementFeeRate: number
    performanceFeeRate: number
    oTokenAddress: string
    fundAddress: string
    softUpperLimit: BigNumber
  }
}

export interface LendingPoolInterface extends utils.Interface {
  functions: {
    'LENDINGPOOL_REVISION()': FunctionFragment
    'deposit(uint256,address,uint16)': FunctionFragment
    'depositFund(uint256)': FunctionFragment
    'getAddressesProvider()': FunctionFragment
    'getConfiguration()': FunctionFragment
    'getReserveData()': FunctionFragment
    'getReserveNormalizedIncome()': FunctionFragment
    'initReserve(address,address)': FunctionFragment
    'initialize(address)': FunctionFragment
    'initializeNextPeriod(uint16,uint16,uint128,uint128,uint40,uint40,uint40)': FunctionFragment
    'moveTheLockPeriod(uint40)': FunctionFragment
    'moveTheRedemptionPeriod(uint40)': FunctionFragment
    'paused()': FunctionFragment
    'setConfiguration(uint256)': FunctionFragment
    'setPause(bool)': FunctionFragment
    'updateFuncAddress(address)': FunctionFragment
    'updateNetValue(uint256)': FunctionFragment
    'withdraw(uint256,address)': FunctionFragment
    'withdrawFund(uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'LENDINGPOOL_REVISION'
      | 'deposit'
      | 'depositFund'
      | 'getAddressesProvider'
      | 'getConfiguration'
      | 'getReserveData'
      | 'getReserveNormalizedIncome'
      | 'initReserve'
      | 'initialize'
      | 'initializeNextPeriod'
      | 'moveTheLockPeriod'
      | 'moveTheRedemptionPeriod'
      | 'paused'
      | 'setConfiguration'
      | 'setPause'
      | 'updateFuncAddress'
      | 'updateNetValue'
      | 'withdraw'
      | 'withdrawFund'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'LENDINGPOOL_REVISION', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'depositFund', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'getAddressesProvider', values?: undefined): string
  encodeFunctionData(functionFragment: 'getConfiguration', values?: undefined): string
  encodeFunctionData(functionFragment: 'getReserveData', values?: undefined): string
  encodeFunctionData(functionFragment: 'getReserveNormalizedIncome', values?: undefined): string
  encodeFunctionData(functionFragment: 'initReserve', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'initialize', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'initializeNextPeriod',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(functionFragment: 'moveTheLockPeriod', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'moveTheRedemptionPeriod', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string
  encodeFunctionData(functionFragment: 'setConfiguration', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'setPause', values: [PromiseOrValue<boolean>]): string
  encodeFunctionData(functionFragment: 'updateFuncAddress', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'updateNetValue', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'withdrawFund', values: [PromiseOrValue<BigNumberish>]): string

  decodeFunctionResult(functionFragment: 'LENDINGPOOL_REVISION', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'depositFund', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAddressesProvider', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getConfiguration', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReserveData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getReserveNormalizedIncome', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initReserve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initializeNextPeriod', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'moveTheLockPeriod', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'moveTheRedemptionPeriod', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setConfiguration', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setPause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateFuncAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateNetValue', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdrawFund', data: BytesLike): Result

  events: {
    'Deposit(address,address,uint256,uint16)': EventFragment
    'FundAddressUpdated(address)': EventFragment
    'FundDeposit(address,uint256)': EventFragment
    'FundWithdraw(address,uint256)': EventFragment
    'NetValueUpdated(uint256,uint256,uint256,uint256,int256)': EventFragment
    'Paused()': EventFragment
    'PeriodInitialized(uint256,uint40,uint40,uint40,uint16,uint16)': EventFragment
    'PurchaseEndTimestampMoved(uint40,uint40)': EventFragment
    'RedemptionBeginTimestampMoved(uint40,uint40)': EventFragment
    'Unpaused()': EventFragment
    'Withdraw(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'FundAddressUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'FundDeposit'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'FundWithdraw'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NetValueUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PeriodInitialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PurchaseEndTimestampMoved'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RedemptionBeginTimestampMoved'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment
}

export interface DepositEventObject {
  user: string
  onBehalfOf: string
  amount: BigNumber
  referral: number
}
export type DepositEvent = TypedEvent<[string, string, BigNumber, number], DepositEventObject>

export type DepositEventFilter = TypedEventFilter<DepositEvent>

export interface FundAddressUpdatedEventObject {
  newFundAddress: string
}
export type FundAddressUpdatedEvent = TypedEvent<[string], FundAddressUpdatedEventObject>

export type FundAddressUpdatedEventFilter = TypedEventFilter<FundAddressUpdatedEvent>

export interface FundDepositEventObject {
  from: string
  amount: BigNumber
}
export type FundDepositEvent = TypedEvent<[string, BigNumber], FundDepositEventObject>

export type FundDepositEventFilter = TypedEventFilter<FundDepositEvent>

export interface FundWithdrawEventObject {
  to: string
  amount: BigNumber
}
export type FundWithdrawEvent = TypedEvent<[string, BigNumber], FundWithdrawEventObject>

export type FundWithdrawEventFilter = TypedEventFilter<FundWithdrawEvent>

export interface NetValueUpdatedEventObject {
  previousNetValue: BigNumber
  newNetValue: BigNumber
  previousLiquidityIndex: BigNumber
  newLiquidityIndex: BigNumber
  currentLiquidityRate: BigNumber
}
export type NetValueUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  NetValueUpdatedEventObject
>

export type NetValueUpdatedEventFilter = TypedEventFilter<NetValueUpdatedEvent>

export interface PausedEventObject {}
export type PausedEvent = TypedEvent<[], PausedEventObject>

export type PausedEventFilter = TypedEventFilter<PausedEvent>

export interface PeriodInitializedEventObject {
  previousLiquidityIndex: BigNumber
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  redemptionBeginTimestamp: number
  managementFeeRate: number
  performanceFeeRate: number
}
export type PeriodInitializedEvent = TypedEvent<
  [BigNumber, number, number, number, number, number],
  PeriodInitializedEventObject
>

export type PeriodInitializedEventFilter = TypedEventFilter<PeriodInitializedEvent>

export interface PurchaseEndTimestampMovedEventObject {
  previousTimestamp: number
  newTimetamp: number
}
export type PurchaseEndTimestampMovedEvent = TypedEvent<[number, number], PurchaseEndTimestampMovedEventObject>

export type PurchaseEndTimestampMovedEventFilter = TypedEventFilter<PurchaseEndTimestampMovedEvent>

export interface RedemptionBeginTimestampMovedEventObject {
  previousTimestamp: number
  newTimetamp: number
}
export type RedemptionBeginTimestampMovedEvent = TypedEvent<[number, number], RedemptionBeginTimestampMovedEventObject>

export type RedemptionBeginTimestampMovedEventFilter = TypedEventFilter<RedemptionBeginTimestampMovedEvent>

export interface UnpausedEventObject {}
export type UnpausedEvent = TypedEvent<[], UnpausedEventObject>

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>

export interface WithdrawEventObject {
  user: string
  to: string
  amount: BigNumber
}
export type WithdrawEvent = TypedEvent<[string, string, BigNumber], WithdrawEventObject>

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>

export interface LendingPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: LendingPoolInterface

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
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    depositFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    getAddressesProvider(overrides?: CallOverrides): Promise<[string]>

    getConfiguration(overrides?: CallOverrides): Promise<[DataTypes.ReserveConfigurationMapStructOutput]>

    getReserveData(overrides?: CallOverrides): Promise<[DataTypes.ReserveDataStructOutput]>

    getReserveNormalizedIncome(overrides?: CallOverrides): Promise<[BigNumber]>

    initReserve(
      oToken: PromiseOrValue<string>,
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    moveTheLockPeriod(
      newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    paused(overrides?: CallOverrides): Promise<[boolean]>

    setConfiguration(
      configuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    updateFuncAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    updateNetValue(
      netValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    withdrawFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    onBehalfOf: PromiseOrValue<string>,
    referralCode: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  depositFund(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getAddressesProvider(overrides?: CallOverrides): Promise<string>

  getConfiguration(overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>

  getReserveData(overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>

  getReserveNormalizedIncome(overrides?: CallOverrides): Promise<BigNumber>

  initReserve(
    oToken: PromiseOrValue<string>,
    fundAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  initialize(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  initializeNextPeriod(
    managementFeeRate: PromiseOrValue<BigNumberish>,
    performanceFeeRate: PromiseOrValue<BigNumberish>,
    purchaseUpperLimit: PromiseOrValue<BigNumberish>,
    softUpperLimit: PromiseOrValue<BigNumberish>,
    purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
    purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
    redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  moveTheLockPeriod(
    newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  moveTheRedemptionPeriod(
    newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  paused(overrides?: CallOverrides): Promise<boolean>

  setConfiguration(
    configuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setPause(
    val: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  updateFuncAddress(
    fundAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  updateNetValue(
    netValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  withdrawFund(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    depositFund(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    getAddressesProvider(overrides?: CallOverrides): Promise<string>

    getConfiguration(overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>

    getReserveData(overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>

    getReserveNormalizedIncome(overrides?: CallOverrides): Promise<BigNumber>

    initReserve(
      oToken: PromiseOrValue<string>,
      fundAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    initialize(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    moveTheLockPeriod(newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    paused(overrides?: CallOverrides): Promise<boolean>

    setConfiguration(configuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    setPause(val: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>

    updateFuncAddress(fundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    updateNetValue(netValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    withdrawFund(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {
    'Deposit(address,address,uint256,uint16)'(
      user?: PromiseOrValue<string> | null,
      onBehalfOf?: PromiseOrValue<string> | null,
      amount?: null,
      referral?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter
    Deposit(
      user?: PromiseOrValue<string> | null,
      onBehalfOf?: PromiseOrValue<string> | null,
      amount?: null,
      referral?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter

    'FundAddressUpdated(address)'(newFundAddress?: PromiseOrValue<string> | null): FundAddressUpdatedEventFilter
    FundAddressUpdated(newFundAddress?: PromiseOrValue<string> | null): FundAddressUpdatedEventFilter

    'FundDeposit(address,uint256)'(from?: PromiseOrValue<string> | null, amount?: null): FundDepositEventFilter
    FundDeposit(from?: PromiseOrValue<string> | null, amount?: null): FundDepositEventFilter

    'FundWithdraw(address,uint256)'(to?: PromiseOrValue<string> | null, amount?: null): FundWithdrawEventFilter
    FundWithdraw(to?: PromiseOrValue<string> | null, amount?: null): FundWithdrawEventFilter

    'NetValueUpdated(uint256,uint256,uint256,uint256,int256)'(
      previousNetValue?: null,
      newNetValue?: null,
      previousLiquidityIndex?: null,
      newLiquidityIndex?: null,
      currentLiquidityRate?: null
    ): NetValueUpdatedEventFilter
    NetValueUpdated(
      previousNetValue?: null,
      newNetValue?: null,
      previousLiquidityIndex?: null,
      newLiquidityIndex?: null,
      currentLiquidityRate?: null
    ): NetValueUpdatedEventFilter

    'Paused()'(): PausedEventFilter
    Paused(): PausedEventFilter

    'PeriodInitialized(uint256,uint40,uint40,uint40,uint16,uint16)'(
      previousLiquidityIndex?: null,
      purchaseBeginTimestamp?: null,
      purchaseEndTimestamp?: null,
      redemptionBeginTimestamp?: null,
      managementFeeRate?: null,
      performanceFeeRate?: null
    ): PeriodInitializedEventFilter
    PeriodInitialized(
      previousLiquidityIndex?: null,
      purchaseBeginTimestamp?: null,
      purchaseEndTimestamp?: null,
      redemptionBeginTimestamp?: null,
      managementFeeRate?: null,
      performanceFeeRate?: null
    ): PeriodInitializedEventFilter

    'PurchaseEndTimestampMoved(uint40,uint40)'(
      previousTimestamp?: null,
      newTimetamp?: null
    ): PurchaseEndTimestampMovedEventFilter
    PurchaseEndTimestampMoved(previousTimestamp?: null, newTimetamp?: null): PurchaseEndTimestampMovedEventFilter

    'RedemptionBeginTimestampMoved(uint40,uint40)'(
      previousTimestamp?: null,
      newTimetamp?: null
    ): RedemptionBeginTimestampMovedEventFilter
    RedemptionBeginTimestampMoved(
      previousTimestamp?: null,
      newTimetamp?: null
    ): RedemptionBeginTimestampMovedEventFilter

    'Unpaused()'(): UnpausedEventFilter
    Unpaused(): UnpausedEventFilter

    'Withdraw(address,address,uint256)'(
      user?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter
    Withdraw(
      user?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter
  }

  estimateGas: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    depositFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    getAddressesProvider(overrides?: CallOverrides): Promise<BigNumber>

    getConfiguration(overrides?: CallOverrides): Promise<BigNumber>

    getReserveData(overrides?: CallOverrides): Promise<BigNumber>

    getReserveNormalizedIncome(overrides?: CallOverrides): Promise<BigNumber>

    initReserve(
      oToken: PromiseOrValue<string>,
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    moveTheLockPeriod(
      newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    paused(overrides?: CallOverrides): Promise<BigNumber>

    setConfiguration(
      configuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    updateFuncAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    updateNetValue(
      netValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    withdrawFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    depositFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getAddressesProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getConfiguration(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getReserveData(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getReserveNormalizedIncome(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initReserve(
      oToken: PromiseOrValue<string>,
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    moveTheLockPeriod(
      newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setConfiguration(
      configuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    updateFuncAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    updateNetValue(
      netValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    withdrawFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
