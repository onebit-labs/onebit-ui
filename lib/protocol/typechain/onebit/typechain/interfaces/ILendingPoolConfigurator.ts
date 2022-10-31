/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ILendingPoolConfiguratorInterface extends utils.Interface {
  functions: {};

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

export interface ILendingPoolConfigurator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILendingPoolConfiguratorInterface;

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

  functions: {};

  callStatic: {};

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

  estimateGas: {};

  populateTransaction: {};
}
