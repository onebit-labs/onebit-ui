/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, PayableOverrides, BytesLike } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../../common'
import type {
  ERC1967Proxy,
  ERC1967ProxyInterface,
} from '../../../../dependencies/openzeppelin/upgradeability/ERC1967Proxy'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
]

const _bytecode =
  '0x608060405260405161078438038061078483398101604081905261002291610337565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610405565b60008051602061073d833981519152146100695761006961042a565b6100758282600061007c565b505061048f565b610085836100b2565b6000825111806100925750805b156100ad576100ab83836100f260201b6100201760201c565b505b505050565b6100bb8161011e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610117838360405180606001604052806027815260200161075d602791396101de565b9392505050565b610131816102b360201b61004c1760201c565b6101985760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101bd60008051602061073d83398151915260001b6102b960201b6100521760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61023d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161018f565b600080856001600160a01b0316856040516102589190610440565b600060405180830381855af49150503d8060008114610293576040519150601f19603f3d011682016040523d82523d6000602084013e610298565b606091505b5090925090506102a98282866102bc565b9695505050505050565b3b151590565b90565b606083156102cb575081610117565b8251156102db5782518084602001fd5b8160405162461bcd60e51b815260040161018f919061045c565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561032657818101518382015260200161030e565b838111156100ab5750506000910152565b6000806040838503121561034a57600080fd5b82516001600160a01b038116811461036157600080fd5b60208401519092506001600160401b038082111561037e57600080fd5b818501915085601f83011261039257600080fd5b8151818111156103a4576103a46102f5565b604051601f8201601f19908116603f011681019083821181831017156103cc576103cc6102f5565b816040528281528860208487010111156103e557600080fd5b6103f683602083016020880161030b565b80955050505050509250929050565b60008282101561042557634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825161045281846020870161030b565b9190910192915050565b602081526000825180602084015261047b81604085016020870161030b565b601f01601f19169190910160400192915050565b61029f8061049e6000396000f3fe608060405261000c61000e565b005b61001e610019610055565b61008d565b565b60606100458383604051806060016040528060278152602001610243602791396100b1565b9392505050565b3b151590565b90565b60006100887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100ac573d6000f35b3d6000fd5b6060833b6101155760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013091906101f3565b600060405180830381855af49150503d806000811461016b576040519150601f19603f3d011682016040523d82523d6000602084013e610170565b606091505b509150915061018082828661018a565b9695505050505050565b60608315610199575081610045565b8251156101a95782518084602001fd5b8160405162461bcd60e51b815260040161010c919061020f565b60005b838110156101de5781810151838201526020016101c6565b838111156101ed576000848401525b50505050565b600082516102058184602087016101c3565b9190910192915050565b602081526000825180602084015261022e8160408501602087016101c3565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202fd13c04cf39167a71dfec11376162e21ea8f231f650dc69b7d8af8d45fb18cf64736f6c63430008090033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564'

type ERC1967ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: ERC1967ProxyConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class ERC1967Proxy__factory extends ContractFactory {
  constructor(...args: ERC1967ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1967Proxy> {
    return super.deploy(_logic, _data, overrides || {}) as Promise<ERC1967Proxy>
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {})
  }
  override attach(address: string): ERC1967Proxy {
    return super.attach(address) as ERC1967Proxy
  }
  override connect(signer: Signer): ERC1967Proxy__factory {
    return super.connect(signer) as ERC1967Proxy__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ERC1967ProxyInterface {
    return new utils.Interface(_abi) as ERC1967ProxyInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC1967Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Proxy
  }
}
