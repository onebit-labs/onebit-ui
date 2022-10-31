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

export interface OTokenInterface extends utils.Interface {
  functions: {
    'DOMAIN_SEPARATOR()': FunctionFragment
    'EIP712_REVISION()': FunctionFragment
    'OTOKEN_REVISION()': FunctionFragment
    'PERMIT_TYPEHASH()': FunctionFragment
    'POOL()': FunctionFragment
    'UNDERLYING_ASSET_ADDRESS()': FunctionFragment
    '_nonces(address)': FunctionFragment
    'allowance(address,address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'burn(address,address,uint256,uint256)': FunctionFragment
    'decimals()': FunctionFragment
    'decreaseAllowance(address,uint256)': FunctionFragment
    'getScaledUserBalanceAndSupply(address)': FunctionFragment
    'increaseAllowance(address,uint256)': FunctionFragment
    'initialize(address,address,uint8,string,string,bytes)': FunctionFragment
    'mint(address,uint256,uint256)': FunctionFragment
    'name()': FunctionFragment
    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment
    'scaledBalanceOf(address)': FunctionFragment
    'scaledTotalSupply()': FunctionFragment
    'symbol()': FunctionFragment
    'totalSupply()': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'transferUnderlyingTo(address,uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'DOMAIN_SEPARATOR'
      | 'EIP712_REVISION'
      | 'OTOKEN_REVISION'
      | 'PERMIT_TYPEHASH'
      | 'POOL'
      | 'UNDERLYING_ASSET_ADDRESS'
      | '_nonces'
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'burn'
      | 'decimals'
      | 'decreaseAllowance'
      | 'getScaledUserBalanceAndSupply'
      | 'increaseAllowance'
      | 'initialize'
      | 'mint'
      | 'name'
      | 'permit'
      | 'scaledBalanceOf'
      | 'scaledTotalSupply'
      | 'symbol'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'transferUnderlyingTo'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'DOMAIN_SEPARATOR', values?: undefined): string
  encodeFunctionData(functionFragment: 'EIP712_REVISION', values?: undefined): string
  encodeFunctionData(functionFragment: 'OTOKEN_REVISION', values?: undefined): string
  encodeFunctionData(functionFragment: 'PERMIT_TYPEHASH', values?: undefined): string
  encodeFunctionData(functionFragment: 'POOL', values?: undefined): string
  encodeFunctionData(functionFragment: 'UNDERLYING_ASSET_ADDRESS', values?: undefined): string
  encodeFunctionData(functionFragment: '_nonces', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'burn',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'getScaledUserBalanceAndSupply', values: [PromiseOrValue<string>]): string
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'mint',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'permit',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string
  encodeFunctionData(functionFragment: 'scaledBalanceOf', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'scaledTotalSupply', values?: undefined): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'transferUnderlyingTo',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string

  decodeFunctionResult(functionFragment: 'DOMAIN_SEPARATOR', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'EIP712_REVISION', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'OTOKEN_REVISION', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'PERMIT_TYPEHASH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'POOL', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'UNDERLYING_ASSET_ADDRESS', data: BytesLike): Result
  decodeFunctionResult(functionFragment: '_nonces', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getScaledUserBalanceAndSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'permit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'scaledBalanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'scaledTotalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferUnderlyingTo', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'BalanceTransfer(address,address,uint256,uint256)': EventFragment
    'Burn(address,address,uint256,uint256)': EventFragment
    'Initialized(address,address,uint8,string,string,bytes)': EventFragment
    'Mint(address,uint256,uint256)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'BalanceTransfer'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export interface ApprovalEventObject {
  owner: string
  spender: string
  value: BigNumber
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>

export interface BalanceTransferEventObject {
  from: string
  to: string
  value: BigNumber
  index: BigNumber
}
export type BalanceTransferEvent = TypedEvent<[string, string, BigNumber, BigNumber], BalanceTransferEventObject>

export type BalanceTransferEventFilter = TypedEventFilter<BalanceTransferEvent>

export interface BurnEventObject {
  from: string
  target: string
  value: BigNumber
  index: BigNumber
}
export type BurnEvent = TypedEvent<[string, string, BigNumber, BigNumber], BurnEventObject>

export type BurnEventFilter = TypedEventFilter<BurnEvent>

export interface InitializedEventObject {
  underlyingAsset: string
  pool: string
  oTokenDecimals: number
  oTokenName: string
  oTokenSymbol: string
  params: string
}
export type InitializedEvent = TypedEvent<[string, string, number, string, string, string], InitializedEventObject>

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>

export interface MintEventObject {
  from: string
  value: BigNumber
  index: BigNumber
}
export type MintEvent = TypedEvent<[string, BigNumber, BigNumber], MintEventObject>

export type MintEventFilter = TypedEventFilter<MintEvent>

export interface TransferEventObject {
  from: string
  to: string
  value: BigNumber
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>

export type TransferEventFilter = TypedEventFilter<TransferEvent>

export interface OToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: OTokenInterface

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
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>

    EIP712_REVISION(overrides?: CallOverrides): Promise<[string]>

    OTOKEN_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>

    POOL(overrides?: CallOverrides): Promise<[string]>

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>

    _nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    burn(
      user: PromiseOrValue<string>,
      receiverOfUnderlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    decimals(overrides?: CallOverrides): Promise<[number]>

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    getScaledUserBalanceAndSupply(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      oTokenDecimals: PromiseOrValue<BigNumberish>,
      oTokenName: PromiseOrValue<string>,
      oTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    mint(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    name(overrides?: CallOverrides): Promise<[string]>

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>

    scaledTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferUnderlyingTo(
      target: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>

  EIP712_REVISION(overrides?: CallOverrides): Promise<string>

  OTOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>

  POOL(overrides?: CallOverrides): Promise<string>

  UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>

  _nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  burn(
    user: PromiseOrValue<string>,
    receiverOfUnderlying: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  decimals(overrides?: CallOverrides): Promise<number>

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getScaledUserBalanceAndSupply(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  initialize(
    pool: PromiseOrValue<string>,
    underlyingAsset: PromiseOrValue<string>,
    oTokenDecimals: PromiseOrValue<BigNumberish>,
    oTokenName: PromiseOrValue<string>,
    oTokenSymbol: PromiseOrValue<string>,
    params: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  mint(
    user: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  permit(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

  scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>

  symbol(overrides?: CallOverrides): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferFrom(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferUnderlyingTo(
    target: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>

    EIP712_REVISION(overrides?: CallOverrides): Promise<string>

    OTOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>

    POOL(overrides?: CallOverrides): Promise<string>

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>

    _nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    burn(
      user: PromiseOrValue<string>,
      receiverOfUnderlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>

    decimals(overrides?: CallOverrides): Promise<number>

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    getScaledUserBalanceAndSupply(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      oTokenDecimals: PromiseOrValue<BigNumberish>,
      oTokenName: PromiseOrValue<string>,
      oTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>

    mint(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    name(overrides?: CallOverrides): Promise<string>

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>

    scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    transferUnderlyingTo(
      target: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter

    'BalanceTransfer(address,address,uint256,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      index?: null
    ): BalanceTransferEventFilter
    BalanceTransfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      index?: null
    ): BalanceTransferEventFilter

    'Burn(address,address,uint256,uint256)'(
      from?: PromiseOrValue<string> | null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      index?: null
    ): BurnEventFilter
    Burn(
      from?: PromiseOrValue<string> | null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      index?: null
    ): BurnEventFilter

    'Initialized(address,address,uint8,string,string,bytes)'(
      underlyingAsset?: PromiseOrValue<string> | null,
      pool?: PromiseOrValue<string> | null,
      oTokenDecimals?: null,
      oTokenName?: null,
      oTokenSymbol?: null,
      params?: null
    ): InitializedEventFilter
    Initialized(
      underlyingAsset?: PromiseOrValue<string> | null,
      pool?: PromiseOrValue<string> | null,
      oTokenDecimals?: null,
      oTokenName?: null,
      oTokenSymbol?: null,
      params?: null
    ): InitializedEventFilter

    'Mint(address,uint256,uint256)'(from?: PromiseOrValue<string> | null, value?: null, index?: null): MintEventFilter
    Mint(from?: PromiseOrValue<string> | null, value?: null, index?: null): MintEventFilter

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter
  }

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>

    EIP712_REVISION(overrides?: CallOverrides): Promise<BigNumber>

    OTOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>

    POOL(overrides?: CallOverrides): Promise<BigNumber>

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>

    _nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    burn(
      user: PromiseOrValue<string>,
      receiverOfUnderlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      oTokenDecimals: PromiseOrValue<BigNumberish>,
      oTokenName: PromiseOrValue<string>,
      oTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    mint(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferUnderlyingTo(
      target: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>

    EIP712_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>

    OTOKEN_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    _nonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    balanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    burn(
      user: PromiseOrValue<string>,
      receiverOfUnderlying: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getScaledUserBalanceAndSupply(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    initialize(
      pool: PromiseOrValue<string>,
      underlyingAsset: PromiseOrValue<string>,
      oTokenDecimals: PromiseOrValue<BigNumberish>,
      oTokenName: PromiseOrValue<string>,
      oTokenSymbol: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    mint(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    permit(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferUnderlyingTo(
      target: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
