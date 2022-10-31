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

export interface ChainlinkInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment
    'accessController()': FunctionFragment
    'aggregator()': FunctionFragment
    'confirmAggregator(address)': FunctionFragment
    'decimals()': FunctionFragment
    'description()': FunctionFragment
    'getAnswer(uint256)': FunctionFragment
    'getRoundData(uint80)': FunctionFragment
    'getTimestamp(uint256)': FunctionFragment
    'latestAnswer()': FunctionFragment
    'latestRound()': FunctionFragment
    'latestRoundData()': FunctionFragment
    'latestTimestamp()': FunctionFragment
    'owner()': FunctionFragment
    'phaseAggregators(uint16)': FunctionFragment
    'phaseId()': FunctionFragment
    'proposeAggregator(address)': FunctionFragment
    'proposedAggregator()': FunctionFragment
    'proposedGetRoundData(uint80)': FunctionFragment
    'proposedLatestRoundData()': FunctionFragment
    'setController(address)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'version()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'accessController'
      | 'aggregator'
      | 'confirmAggregator'
      | 'decimals'
      | 'description'
      | 'getAnswer'
      | 'getRoundData'
      | 'getTimestamp'
      | 'latestAnswer'
      | 'latestRound'
      | 'latestRoundData'
      | 'latestTimestamp'
      | 'owner'
      | 'phaseAggregators'
      | 'phaseId'
      | 'proposeAggregator'
      | 'proposedAggregator'
      | 'proposedGetRoundData'
      | 'proposedLatestRoundData'
      | 'setController'
      | 'transferOwnership'
      | 'version'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'accessController', values?: undefined): string
  encodeFunctionData(functionFragment: 'aggregator', values?: undefined): string
  encodeFunctionData(functionFragment: 'confirmAggregator', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(functionFragment: 'description', values?: undefined): string
  encodeFunctionData(functionFragment: 'getAnswer', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'getRoundData', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'getTimestamp', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'latestAnswer', values?: undefined): string
  encodeFunctionData(functionFragment: 'latestRound', values?: undefined): string
  encodeFunctionData(functionFragment: 'latestRoundData', values?: undefined): string
  encodeFunctionData(functionFragment: 'latestTimestamp', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'phaseAggregators', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'phaseId', values?: undefined): string
  encodeFunctionData(functionFragment: 'proposeAggregator', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'proposedAggregator', values?: undefined): string
  encodeFunctionData(functionFragment: 'proposedGetRoundData', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'proposedLatestRoundData', values?: undefined): string
  encodeFunctionData(functionFragment: 'setController', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'version', values?: undefined): string

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'accessController', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'aggregator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'confirmAggregator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'description', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getAnswer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getRoundData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getTimestamp', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestAnswer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestRound', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestRoundData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestTimestamp', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'phaseAggregators', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'phaseId', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'proposeAggregator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'proposedAggregator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'proposedGetRoundData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'proposedLatestRoundData', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setController', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result

  events: {
    'AnswerUpdated(int256,uint256,uint256)': EventFragment
    'NewRound(uint256,address,uint256)': EventFragment
    'OwnershipTransferRequested(address,address)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'AnswerUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewRound'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferRequested'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
}

export interface AnswerUpdatedEventObject {
  current: BigNumber
  roundId: BigNumber
  updatedAt: BigNumber
}
export type AnswerUpdatedEvent = TypedEvent<[BigNumber, BigNumber, BigNumber], AnswerUpdatedEventObject>

export type AnswerUpdatedEventFilter = TypedEventFilter<AnswerUpdatedEvent>

export interface NewRoundEventObject {
  roundId: BigNumber
  startedBy: string
  startedAt: BigNumber
}
export type NewRoundEvent = TypedEvent<[BigNumber, string, BigNumber], NewRoundEventObject>

export type NewRoundEventFilter = TypedEventFilter<NewRoundEvent>

export interface OwnershipTransferRequestedEventObject {
  from: string
  to: string
}
export type OwnershipTransferRequestedEvent = TypedEvent<[string, string], OwnershipTransferRequestedEventObject>

export type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>

export interface OwnershipTransferredEventObject {
  from: string
  to: string
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface Chainlink extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: ChainlinkInterface

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
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    accessController(overrides?: CallOverrides): Promise<[string]>

    aggregator(overrides?: CallOverrides): Promise<[string]>

    confirmAggregator(
      _aggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    decimals(overrides?: CallOverrides): Promise<[number]>

    description(overrides?: CallOverrides): Promise<[string]>

    getAnswer(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>

    getRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    getTimestamp(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>

    latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>

    latestRound(overrides?: CallOverrides): Promise<[BigNumber]>

    latestRoundData(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    latestTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>

    owner(overrides?: CallOverrides): Promise<[string]>

    phaseAggregators(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>

    phaseId(overrides?: CallOverrides): Promise<[number]>

    proposeAggregator(
      _aggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    proposedAggregator(overrides?: CallOverrides): Promise<[string]>

    proposedGetRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    proposedLatestRoundData(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    setController(
      _accessController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    version(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  accessController(overrides?: CallOverrides): Promise<string>

  aggregator(overrides?: CallOverrides): Promise<string>

  confirmAggregator(
    _aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  decimals(overrides?: CallOverrides): Promise<number>

  description(overrides?: CallOverrides): Promise<string>

  getAnswer(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

  getRoundData(
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber
      answer: BigNumber
      startedAt: BigNumber
      updatedAt: BigNumber
      answeredInRound: BigNumber
    }
  >

  getTimestamp(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

  latestAnswer(overrides?: CallOverrides): Promise<BigNumber>

  latestRound(overrides?: CallOverrides): Promise<BigNumber>

  latestRoundData(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber
      answer: BigNumber
      startedAt: BigNumber
      updatedAt: BigNumber
      answeredInRound: BigNumber
    }
  >

  latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>

  owner(overrides?: CallOverrides): Promise<string>

  phaseAggregators(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

  phaseId(overrides?: CallOverrides): Promise<number>

  proposeAggregator(
    _aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  proposedAggregator(overrides?: CallOverrides): Promise<string>

  proposedGetRoundData(
    _roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber
      answer: BigNumber
      startedAt: BigNumber
      updatedAt: BigNumber
      answeredInRound: BigNumber
    }
  >

  proposedLatestRoundData(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber
      answer: BigNumber
      startedAt: BigNumber
      updatedAt: BigNumber
      answeredInRound: BigNumber
    }
  >

  setController(
    _accessController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  version(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>

    accessController(overrides?: CallOverrides): Promise<string>

    aggregator(overrides?: CallOverrides): Promise<string>

    confirmAggregator(_aggregator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    decimals(overrides?: CallOverrides): Promise<number>

    description(overrides?: CallOverrides): Promise<string>

    getAnswer(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    getTimestamp(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>

    latestRound(overrides?: CallOverrides): Promise<BigNumber>

    latestRoundData(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<string>

    phaseAggregators(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

    phaseId(overrides?: CallOverrides): Promise<number>

    proposeAggregator(_aggregator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    proposedAggregator(overrides?: CallOverrides): Promise<string>

    proposedGetRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    proposedLatestRoundData(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber
        answer: BigNumber
        startedAt: BigNumber
        updatedAt: BigNumber
        answeredInRound: BigNumber
      }
    >

    setController(_accessController: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    transferOwnership(_to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    version(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {
    'AnswerUpdated(int256,uint256,uint256)'(
      current?: PromiseOrValue<BigNumberish> | null,
      roundId?: PromiseOrValue<BigNumberish> | null,
      updatedAt?: null
    ): AnswerUpdatedEventFilter
    AnswerUpdated(
      current?: PromiseOrValue<BigNumberish> | null,
      roundId?: PromiseOrValue<BigNumberish> | null,
      updatedAt?: null
    ): AnswerUpdatedEventFilter

    'NewRound(uint256,address,uint256)'(
      roundId?: PromiseOrValue<BigNumberish> | null,
      startedBy?: PromiseOrValue<string> | null,
      startedAt?: null
    ): NewRoundEventFilter
    NewRound(
      roundId?: PromiseOrValue<BigNumberish> | null,
      startedBy?: PromiseOrValue<string> | null,
      startedAt?: null
    ): NewRoundEventFilter

    'OwnershipTransferRequested(address,address)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter
    OwnershipTransferRequested(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter

    'OwnershipTransferred(address,address)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
  }

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    accessController(overrides?: CallOverrides): Promise<BigNumber>

    aggregator(overrides?: CallOverrides): Promise<BigNumber>

    confirmAggregator(
      _aggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    description(overrides?: CallOverrides): Promise<BigNumber>

    getAnswer(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getRoundData(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    getTimestamp(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>

    latestRound(overrides?: CallOverrides): Promise<BigNumber>

    latestRoundData(overrides?: CallOverrides): Promise<BigNumber>

    latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    phaseAggregators(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    phaseId(overrides?: CallOverrides): Promise<BigNumber>

    proposeAggregator(
      _aggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    proposedAggregator(overrides?: CallOverrides): Promise<BigNumber>

    proposedGetRoundData(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    proposedLatestRoundData(overrides?: CallOverrides): Promise<BigNumber>

    setController(
      _accessController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferOwnership(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    version(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    accessController(overrides?: CallOverrides): Promise<PopulatedTransaction>

    aggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    confirmAggregator(
      _aggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getAnswer(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getRoundData(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getTimestamp(_roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>

    latestRound(overrides?: CallOverrides): Promise<PopulatedTransaction>

    latestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>

    latestTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    phaseAggregators(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    phaseId(overrides?: CallOverrides): Promise<PopulatedTransaction>

    proposeAggregator(
      _aggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    proposedAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    proposedGetRoundData(
      _roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    proposedLatestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setController(
      _accessController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
