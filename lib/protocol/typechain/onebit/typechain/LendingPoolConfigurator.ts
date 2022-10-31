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
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace ILendingPoolConfigurator {
  export type InitReserveInputStruct = {
    oTokenImpl: PromiseOrValue<string>;
    underlyingAssetDecimals: PromiseOrValue<BigNumberish>;
    underlyingAsset: PromiseOrValue<string>;
    fundAddress: PromiseOrValue<string>;
    underlyingAssetName: PromiseOrValue<string>;
    oTokenName: PromiseOrValue<string>;
    oTokenSymbol: PromiseOrValue<string>;
    params: PromiseOrValue<BytesLike>;
  };

  export type InitReserveInputStructOutput = [
    string,
    number,
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    oTokenImpl: string;
    underlyingAssetDecimals: number;
    underlyingAsset: string;
    fundAddress: string;
    underlyingAssetName: string;
    oTokenName: string;
    oTokenSymbol: string;
    params: string;
  };

  export type UpdateOTokenInputStruct = {
    name: PromiseOrValue<string>;
    symbol: PromiseOrValue<string>;
    implementation: PromiseOrValue<string>;
    params: PromiseOrValue<BytesLike>;
  };

  export type UpdateOTokenInputStructOutput = [
    string,
    string,
    string,
    string
  ] & { name: string; symbol: string; implementation: string; params: string };
}

export interface LendingPoolConfiguratorInterface extends utils.Interface {
  functions: {
    "activateReserve()": FunctionFragment;
    "deactivateReserve()": FunctionFragment;
    "freezeReserve()": FunctionFragment;
    "initReserve((address,uint8,address,address,string,string,string,bytes))": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "setPoolPause(bool)": FunctionFragment;
    "unfreezeReserve()": FunctionFragment;
    "updateFundAddress(address)": FunctionFragment;
    "updateOToken((string,string,address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activateReserve"
      | "deactivateReserve"
      | "freezeReserve"
      | "initReserve"
      | "initialize"
      | "setPoolPause"
      | "unfreezeReserve"
      | "updateFundAddress"
      | "updateOToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activateReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "freezeReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initReserve",
    values: [ILendingPoolConfigurator.InitReserveInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolPause",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "unfreezeReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateFundAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOToken",
    values: [ILendingPoolConfigurator.UpdateOTokenInputStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPoolPause",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezeReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFundAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOToken",
    data: BytesLike
  ): Result;

  events: {
    "OTokenUpgraded(address,address)": EventFragment;
    "ReserveActivated()": EventFragment;
    "ReserveDeactivated()": EventFragment;
    "ReserveDecimalsChanged(address,uint256)": EventFragment;
    "ReserveFrozen()": EventFragment;
    "ReserveInitialized(address,address)": EventFragment;
    "ReserveUnfrozen()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OTokenUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDeactivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDecimalsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveFrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveUnfrozen"): EventFragment;
}

export interface OTokenUpgradedEventObject {
  proxy: string;
  implementation: string;
}
export type OTokenUpgradedEvent = TypedEvent<
  [string, string],
  OTokenUpgradedEventObject
>;

export type OTokenUpgradedEventFilter = TypedEventFilter<OTokenUpgradedEvent>;

export interface ReserveActivatedEventObject {}
export type ReserveActivatedEvent = TypedEvent<[], ReserveActivatedEventObject>;

export type ReserveActivatedEventFilter =
  TypedEventFilter<ReserveActivatedEvent>;

export interface ReserveDeactivatedEventObject {}
export type ReserveDeactivatedEvent = TypedEvent<
  [],
  ReserveDeactivatedEventObject
>;

export type ReserveDeactivatedEventFilter =
  TypedEventFilter<ReserveDeactivatedEvent>;

export interface ReserveDecimalsChangedEventObject {
  asset: string;
  decimals: BigNumber;
}
export type ReserveDecimalsChangedEvent = TypedEvent<
  [string, BigNumber],
  ReserveDecimalsChangedEventObject
>;

export type ReserveDecimalsChangedEventFilter =
  TypedEventFilter<ReserveDecimalsChangedEvent>;

export interface ReserveFrozenEventObject {}
export type ReserveFrozenEvent = TypedEvent<[], ReserveFrozenEventObject>;

export type ReserveFrozenEventFilter = TypedEventFilter<ReserveFrozenEvent>;

export interface ReserveInitializedEventObject {
  asset: string;
  oToken: string;
}
export type ReserveInitializedEvent = TypedEvent<
  [string, string],
  ReserveInitializedEventObject
>;

export type ReserveInitializedEventFilter =
  TypedEventFilter<ReserveInitializedEvent>;

export interface ReserveUnfrozenEventObject {}
export type ReserveUnfrozenEvent = TypedEvent<[], ReserveUnfrozenEventObject>;

export type ReserveUnfrozenEventFilter = TypedEventFilter<ReserveUnfrozenEvent>;

export interface LendingPoolConfigurator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LendingPoolConfiguratorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    activateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deactivateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    freezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPoolPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unfreezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOToken(
      input: ILendingPoolConfigurator.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  activateReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deactivateReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  freezeReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initReserve(
    input: ILendingPoolConfigurator.InitReserveInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPoolPause(
    val: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unfreezeReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateFundAddress(
    fundAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOToken(
    input: ILendingPoolConfigurator.UpdateOTokenInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateReserve(overrides?: CallOverrides): Promise<void>;

    deactivateReserve(overrides?: CallOverrides): Promise<void>;

    freezeReserve(overrides?: CallOverrides): Promise<void>;

    initReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolPause(
      val: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    unfreezeReserve(overrides?: CallOverrides): Promise<void>;

    updateFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOToken(
      input: ILendingPoolConfigurator.UpdateOTokenInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OTokenUpgraded(address,address)"(
      proxy?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null
    ): OTokenUpgradedEventFilter;
    OTokenUpgraded(
      proxy?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null
    ): OTokenUpgradedEventFilter;

    "ReserveActivated()"(): ReserveActivatedEventFilter;
    ReserveActivated(): ReserveActivatedEventFilter;

    "ReserveDeactivated()"(): ReserveDeactivatedEventFilter;
    ReserveDeactivated(): ReserveDeactivatedEventFilter;

    "ReserveDecimalsChanged(address,uint256)"(
      asset?: PromiseOrValue<string> | null,
      decimals?: null
    ): ReserveDecimalsChangedEventFilter;
    ReserveDecimalsChanged(
      asset?: PromiseOrValue<string> | null,
      decimals?: null
    ): ReserveDecimalsChangedEventFilter;

    "ReserveFrozen()"(): ReserveFrozenEventFilter;
    ReserveFrozen(): ReserveFrozenEventFilter;

    "ReserveInitialized(address,address)"(
      asset?: PromiseOrValue<string> | null,
      oToken?: PromiseOrValue<string> | null
    ): ReserveInitializedEventFilter;
    ReserveInitialized(
      asset?: PromiseOrValue<string> | null,
      oToken?: PromiseOrValue<string> | null
    ): ReserveInitializedEventFilter;

    "ReserveUnfrozen()"(): ReserveUnfrozenEventFilter;
    ReserveUnfrozen(): ReserveUnfrozenEventFilter;
  };

  estimateGas: {
    activateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deactivateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    freezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPoolPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unfreezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOToken(
      input: ILendingPoolConfigurator.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deactivateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    freezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPoolPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unfreezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOToken(
      input: ILendingPoolConfigurator.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
