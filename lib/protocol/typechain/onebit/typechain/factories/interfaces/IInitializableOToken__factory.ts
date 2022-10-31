/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { IInitializableOToken, IInitializableOTokenInterface } from '../../interfaces/IInitializableOToken'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'oTokenDecimals',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'oTokenName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'oTokenSymbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract ILendingPool',
        name: 'pool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'underlyingAsset',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: 'oTokenDecimals',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: 'oTokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'oTokenSymbol',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'initialize',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class IInitializableOToken__factory {
  static readonly abi = _abi
  static createInterface(): IInitializableOTokenInterface {
    return new utils.Interface(_abi) as IInitializableOTokenInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IInitializableOToken {
    return new Contract(address, _abi, signerOrProvider) as IInitializableOToken
  }
}
