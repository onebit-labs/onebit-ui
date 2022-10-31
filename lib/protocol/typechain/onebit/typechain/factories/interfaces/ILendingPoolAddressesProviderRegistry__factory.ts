/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type {
  ILendingPoolAddressesProviderRegistry,
  ILendingPoolAddressesProviderRegistryInterface,
} from '../../interfaces/ILendingPoolAddressesProviderRegistry'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newAddress',
        type: 'address',
      },
    ],
    name: 'AddressesProviderRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newAddress',
        type: 'address',
      },
    ],
    name: 'AddressesProviderUnregistered',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addressesProvider',
        type: 'address',
      },
    ],
    name: 'getAddressesProviderIdByAddress',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [] as any,
    name: 'getAddressesProvidersList',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'registerAddressesProvider',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
    ],
    name: 'unregisterAddressesProvider',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ILendingPoolAddressesProviderRegistry__factory {
  static readonly abi = _abi
  static createInterface(): ILendingPoolAddressesProviderRegistryInterface {
    return new utils.Interface(_abi) as ILendingPoolAddressesProviderRegistryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ILendingPoolAddressesProviderRegistry {
    return new Contract(address, _abi, signerOrProvider) as ILendingPoolAddressesProviderRegistry
  }
}
