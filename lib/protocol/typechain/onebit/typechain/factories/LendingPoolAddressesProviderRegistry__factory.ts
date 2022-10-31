/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type {
  LendingPoolAddressesProviderRegistry,
  LendingPoolAddressesProviderRegistryInterface,
} from '../LendingPoolAddressesProviderRegistry'

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
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
    inputs: [] as any,
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
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
    inputs: [] as any,
    name: 'renounceOwnership',
    outputs: [] as any,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
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

const _bytecode =
  '0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107d08061007e6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100bd578063d0267be7146100d8578063d258191e1461010f578063f2fde38b1461012257600080fd5b80630de2670714610082578063365ccbbf14610097578063715018a6146100b5575b600080fd5b610095610090366004610622565b610135565b005b61009f61020f565b6040516100ac9190610644565b60405180910390f35b610095610376565b6000546040516001600160a01b0390911681526020016100ac565b6101016100e6366004610622565b6001600160a01b031660009081526001602052604090205490565b6040519081526020016100ac565b61009561011d366004610691565b6103ac565b610095610130366004610622565b61046a565b6000546001600160a01b031633146101685760405162461bcd60e51b815260040161015f906106bb565b60405180910390fd5b600060016000836001600160a01b03166001600160a01b03168152602001908152602001600020541160405180604001604052806002815260200161343160f01b815250906101ca5760405162461bcd60e51b815260040161015f91906106f0565b506001600160a01b038116600081815260016020526040808220829055517f851e5971c053e6b76e3a1e0b8ffa81430df738007fad86e195c409a757faccd29190a250565b60606000600280548060200260200160405190810160405280929190818152602001828054801561026957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161024b575b5050505050905060008151905060008167ffffffffffffffff81111561029157610291610745565b6040519080825280602002602001820160405280156102ba578160200160208202803683370190505b50905060005b8281101561036e576000600160008684815181106102e0576102e061075b565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054111561035c578381815181106103215761032161075b565b602002602001015182828151811061033b5761033b61075b565b60200260200101906001600160a01b031690816001600160a01b0316815250505b8061036681610771565b9150506102c0565b509392505050565b6000546001600160a01b031633146103a05760405162461bcd60e51b815260040161015f906106bb565b6103aa6000610505565b565b6000546001600160a01b031633146103d65760405162461bcd60e51b815260040161015f906106bb565b6040805180820190915260028152611b9960f11b60208201528161040d5760405162461bcd60e51b815260040161015f91906106f0565b506001600160a01b038216600090815260016020526040902081905561043282610555565b6040516001600160a01b038316907f2db38786c10176b033a1608361716b0ca992e3af55dc05b6dc710969790beeda90600090a25050565b6000546001600160a01b031633146104945760405162461bcd60e51b815260040161015f906106bb565b6001600160a01b0381166104f95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161015f565b61050281610505565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60025460005b818110156105b257826001600160a01b0316600282815481106105805761058061075b565b6000918252602090912001546001600160a01b031614156105a057505050565b806105aa81610771565b91505061055b565b5050600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461061d57600080fd5b919050565b60006020828403121561063457600080fd5b61063d82610606565b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156106855783516001600160a01b031683529284019291840191600101610660565b50909695505050505050565b600080604083850312156106a457600080fd5b6106ad83610606565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208083528351808285015260005b8181101561071d57858101830151858201604001528201610701565b8181111561072f576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060001982141561079357634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220dc8db620e40773cbfba92bdd6fb9c1e50a2d5994ca49df988ba37026b73ee3e564736f6c63430008090033'

type LendingPoolAddressesProviderRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: LendingPoolAddressesProviderRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class LendingPoolAddressesProviderRegistry__factory extends ContractFactory {
  constructor(...args: LendingPoolAddressesProviderRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LendingPoolAddressesProviderRegistry> {
    return super.deploy(overrides || {}) as Promise<LendingPoolAddressesProviderRegistry>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): LendingPoolAddressesProviderRegistry {
    return super.attach(address) as LendingPoolAddressesProviderRegistry
  }
  override connect(signer: Signer): LendingPoolAddressesProviderRegistry__factory {
    return super.connect(signer) as LendingPoolAddressesProviderRegistry__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): LendingPoolAddressesProviderRegistryInterface {
    return new utils.Interface(_abi) as LendingPoolAddressesProviderRegistryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LendingPoolAddressesProviderRegistry {
    return new Contract(address, _abi, signerOrProvider) as LendingPoolAddressesProviderRegistry
  }
}
