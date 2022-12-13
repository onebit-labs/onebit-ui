/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface VaultAddressesProviderInterface extends utils.Interface {
  functions: {
    'getAddress(bytes32)': FunctionFragment
    'getEmergencyAdmin()': FunctionFragment
    'getKYCAdmin()': FunctionFragment
    'getMarketId()': FunctionFragment
    'getVault()': FunctionFragment
    'getVaultAdmin()': FunctionFragment
    'getVaultConfigurator()': FunctionFragment
    'getVaultOperator()': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'setAddress(bytes32,address)': FunctionFragment
    'setAddressAsProxy(bytes32,address)': FunctionFragment
    'setEmergencyAdmin(address)': FunctionFragment
    'setKYCAdmin(address)': FunctionFragment
    'setMarketId(string)': FunctionFragment
    'setVaultAdmin(address)': FunctionFragment
    'setVaultConfiguratorImpl(address)': FunctionFragment
    'setVaultImpl(address)': FunctionFragment
    'setVaultOperator(address)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'getAddress'
      | 'getEmergencyAdmin'
      | 'getKYCAdmin'
      | 'getMarketId'
      | 'getVault'
      | 'getVaultAdmin'
      | 'getVaultConfigurator'
      | 'getVaultOperator'
      | 'owner'
      | 'renounceOwnership'
      | 'setAddress'
      | 'setAddressAsProxy'
      | 'setEmergencyAdmin'
      | 'setKYCAdmin'
      | 'setMarketId'
      | 'setVaultAdmin'
      | 'setVaultConfiguratorImpl'
      | 'setVaultImpl'
      | 'setVaultOperator'
      | 'transferOwnership'
  ): FunctionFragment

  encodeFunctionData(functionFragment: 'getAddress', values: [PromiseOrValue<BytesLike>]): string
  encodeFunctionData(functionFragment: 'getEmergencyAdmin', values?: undefined): string
  encodeFunctionData(functionFragment: 'getKYCAdmin', values?: undefined): string
  encodeFunctionData(functionFragment: 'getMarketId', values?: undefined): string
  encodeFunctionData(functionFragment: 'getVault', values?: undefined): string
  encodeFunctionData(functionFragment: 'getVaultAdmin', values?: undefined): string
  encodeFunctionData(functionFragment: 'getVaultConfigurator', values?: undefined): string
  encodeFunctionData(functionFragment: 'getVaultOperator', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setAddress',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'setAddressAsProxy',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'setEmergencyAdmin', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setKYCAdmin', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setMarketId', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setVaultAdmin', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setVaultConfiguratorImpl', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setVaultImpl', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'setVaultOperator', values: [PromiseOrValue<string>]): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string

  decodeFunctionResult(functionFragment: 'getAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getEmergencyAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getKYCAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getMarketId', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVault', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVaultAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVaultConfigurator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVaultOperator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setAddress', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setAddressAsProxy', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setEmergencyAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setKYCAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMarketId', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setVaultAdmin', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setVaultConfiguratorImpl', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setVaultImpl', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setVaultOperator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result

  events: {
    'AddressSet(bytes32,address,bool)': EventFragment
    'ConfigurationAdminUpdated(address)': EventFragment
    'EmergencyAdminUpdated(address)': EventFragment
    'KYCAdminUpdated(address)': EventFragment
    'MarketIdSet(string)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'ProxyCreated(bytes32,address)': EventFragment
    'VaultConfiguratorUpdated(address)': EventFragment
    'VaultOperatorUpdated(address)': EventFragment
    'VaultUpdated(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'AddressSet'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ConfigurationAdminUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'EmergencyAdminUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'KYCAdminUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'MarketIdSet'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'ProxyCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'VaultConfiguratorUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'VaultOperatorUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'VaultUpdated'): EventFragment
}

export interface AddressSetEventObject {
  id: string
  newAddress: string
  hasProxy: boolean
}
export type AddressSetEvent = TypedEvent<[string, string, boolean], AddressSetEventObject>

export type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>

export interface ConfigurationAdminUpdatedEventObject {
  newAddress: string
}
export type ConfigurationAdminUpdatedEvent = TypedEvent<[string], ConfigurationAdminUpdatedEventObject>

export type ConfigurationAdminUpdatedEventFilter = TypedEventFilter<ConfigurationAdminUpdatedEvent>

export interface EmergencyAdminUpdatedEventObject {
  newAddress: string
}
export type EmergencyAdminUpdatedEvent = TypedEvent<[string], EmergencyAdminUpdatedEventObject>

export type EmergencyAdminUpdatedEventFilter = TypedEventFilter<EmergencyAdminUpdatedEvent>

export interface KYCAdminUpdatedEventObject {
  newAddress: string
}
export type KYCAdminUpdatedEvent = TypedEvent<[string], KYCAdminUpdatedEventObject>

export type KYCAdminUpdatedEventFilter = TypedEventFilter<KYCAdminUpdatedEvent>

export interface MarketIdSetEventObject {
  newMarketId: string
}
export type MarketIdSetEvent = TypedEvent<[string], MarketIdSetEventObject>

export type MarketIdSetEventFilter = TypedEventFilter<MarketIdSetEvent>

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface ProxyCreatedEventObject {
  id: string
  newAddress: string
}
export type ProxyCreatedEvent = TypedEvent<[string, string], ProxyCreatedEventObject>

export type ProxyCreatedEventFilter = TypedEventFilter<ProxyCreatedEvent>

export interface VaultConfiguratorUpdatedEventObject {
  newAddress: string
}
export type VaultConfiguratorUpdatedEvent = TypedEvent<[string], VaultConfiguratorUpdatedEventObject>

export type VaultConfiguratorUpdatedEventFilter = TypedEventFilter<VaultConfiguratorUpdatedEvent>

export interface VaultOperatorUpdatedEventObject {
  newAddress: string
}
export type VaultOperatorUpdatedEvent = TypedEvent<[string], VaultOperatorUpdatedEventObject>

export type VaultOperatorUpdatedEventFilter = TypedEventFilter<VaultOperatorUpdatedEvent>

export interface VaultUpdatedEventObject {
  newAddress: string
}
export type VaultUpdatedEvent = TypedEvent<[string], VaultUpdatedEventObject>

export type VaultUpdatedEventFilter = TypedEventFilter<VaultUpdatedEvent>

export interface VaultAddressesProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: VaultAddressesProviderInterface

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
    getAddress(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>

    getEmergencyAdmin(overrides?: CallOverrides): Promise<[string]>

    getKYCAdmin(overrides?: CallOverrides): Promise<[string]>

    getMarketId(overrides?: CallOverrides): Promise<[string]>

    getVault(overrides?: CallOverrides): Promise<[string]>

    getVaultAdmin(overrides?: CallOverrides): Promise<[string]>

    getVaultConfigurator(overrides?: CallOverrides): Promise<[string]>

    getVaultOperator(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

    setAddress(
      id: PromiseOrValue<BytesLike>,
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setAddressAsProxy(
      id: PromiseOrValue<BytesLike>,
      implementationAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setEmergencyAdmin(
      emergencyAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setKYCAdmin(
      kycAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setMarketId(
      marketId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setVaultAdmin(
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setVaultConfiguratorImpl(
      configurator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setVaultImpl(
      vault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    setVaultOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  getAddress(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>

  getEmergencyAdmin(overrides?: CallOverrides): Promise<string>

  getKYCAdmin(overrides?: CallOverrides): Promise<string>

  getMarketId(overrides?: CallOverrides): Promise<string>

  getVault(overrides?: CallOverrides): Promise<string>

  getVaultAdmin(overrides?: CallOverrides): Promise<string>

  getVaultConfigurator(overrides?: CallOverrides): Promise<string>

  getVaultOperator(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>

  setAddress(
    id: PromiseOrValue<BytesLike>,
    newAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setAddressAsProxy(
    id: PromiseOrValue<BytesLike>,
    implementationAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setEmergencyAdmin(
    emergencyAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setKYCAdmin(
    kycAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setMarketId(
    marketId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setVaultAdmin(
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setVaultConfiguratorImpl(
    configurator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setVaultImpl(
    vault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  setVaultOperator(
    operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    getAddress(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>

    getEmergencyAdmin(overrides?: CallOverrides): Promise<string>

    getKYCAdmin(overrides?: CallOverrides): Promise<string>

    getMarketId(overrides?: CallOverrides): Promise<string>

    getVault(overrides?: CallOverrides): Promise<string>

    getVaultAdmin(overrides?: CallOverrides): Promise<string>

    getVaultConfigurator(overrides?: CallOverrides): Promise<string>

    getVaultOperator(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    setAddress(
      id: PromiseOrValue<BytesLike>,
      newAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    setAddressAsProxy(
      id: PromiseOrValue<BytesLike>,
      implementationAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    setEmergencyAdmin(emergencyAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setKYCAdmin(kycAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setMarketId(marketId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setVaultAdmin(admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setVaultConfiguratorImpl(configurator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setVaultImpl(vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    setVaultOperator(operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'AddressSet(bytes32,address,bool)'(
      id?: null,
      newAddress?: PromiseOrValue<string> | null,
      hasProxy?: null
    ): AddressSetEventFilter
    AddressSet(id?: null, newAddress?: PromiseOrValue<string> | null, hasProxy?: null): AddressSetEventFilter

    'ConfigurationAdminUpdated(address)'(
      newAddress?: PromiseOrValue<string> | null
    ): ConfigurationAdminUpdatedEventFilter
    ConfigurationAdminUpdated(newAddress?: PromiseOrValue<string> | null): ConfigurationAdminUpdatedEventFilter

    'EmergencyAdminUpdated(address)'(newAddress?: PromiseOrValue<string> | null): EmergencyAdminUpdatedEventFilter
    EmergencyAdminUpdated(newAddress?: PromiseOrValue<string> | null): EmergencyAdminUpdatedEventFilter

    'KYCAdminUpdated(address)'(newAddress?: PromiseOrValue<string> | null): KYCAdminUpdatedEventFilter
    KYCAdminUpdated(newAddress?: PromiseOrValue<string> | null): KYCAdminUpdatedEventFilter

    'MarketIdSet(string)'(newMarketId?: null): MarketIdSetEventFilter
    MarketIdSet(newMarketId?: null): MarketIdSetEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter

    'ProxyCreated(bytes32,address)'(id?: null, newAddress?: PromiseOrValue<string> | null): ProxyCreatedEventFilter
    ProxyCreated(id?: null, newAddress?: PromiseOrValue<string> | null): ProxyCreatedEventFilter

    'VaultConfiguratorUpdated(address)'(newAddress?: PromiseOrValue<string> | null): VaultConfiguratorUpdatedEventFilter
    VaultConfiguratorUpdated(newAddress?: PromiseOrValue<string> | null): VaultConfiguratorUpdatedEventFilter

    'VaultOperatorUpdated(address)'(newAddress?: PromiseOrValue<string> | null): VaultOperatorUpdatedEventFilter
    VaultOperatorUpdated(newAddress?: PromiseOrValue<string> | null): VaultOperatorUpdatedEventFilter

    'VaultUpdated(address)'(newAddress?: PromiseOrValue<string> | null): VaultUpdatedEventFilter
    VaultUpdated(newAddress?: PromiseOrValue<string> | null): VaultUpdatedEventFilter
  }

  estimateGas: {
    getAddress(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>

    getEmergencyAdmin(overrides?: CallOverrides): Promise<BigNumber>

    getKYCAdmin(overrides?: CallOverrides): Promise<BigNumber>

    getMarketId(overrides?: CallOverrides): Promise<BigNumber>

    getVault(overrides?: CallOverrides): Promise<BigNumber>

    getVaultAdmin(overrides?: CallOverrides): Promise<BigNumber>

    getVaultConfigurator(overrides?: CallOverrides): Promise<BigNumber>

    getVaultOperator(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    setAddress(
      id: PromiseOrValue<BytesLike>,
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setAddressAsProxy(
      id: PromiseOrValue<BytesLike>,
      implementationAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setEmergencyAdmin(
      emergencyAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setKYCAdmin(
      kycAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setMarketId(
      marketId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setVaultAdmin(
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setVaultConfiguratorImpl(
      configurator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setVaultImpl(
      vault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    setVaultOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getAddress(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getEmergencyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getKYCAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getMarketId(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getVaultAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getVaultConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getVaultOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>

    setAddress(
      id: PromiseOrValue<BytesLike>,
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setAddressAsProxy(
      id: PromiseOrValue<BytesLike>,
      implementationAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setEmergencyAdmin(
      emergencyAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setKYCAdmin(
      kycAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setMarketId(
      marketId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setVaultAdmin(
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setVaultConfiguratorImpl(
      configurator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setVaultImpl(
      vault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    setVaultOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}