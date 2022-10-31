/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MintableERC20, MintableERC20Interface } from "../MintableERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000cb738038062000cb78339810160408190526200003491620001f1565b8251839083906200004d9060039060208501906200007e565b508051620000639060049060208401906200007e565b50506005805460ff191660ff841617905550505050620002b3565b8280546200008c9062000276565b90600052602060002090601f016020900481019282620000b05760008555620000fb565b82601f10620000cb57805160ff1916838001178555620000fb565b82800160010185558215620000fb579182015b82811115620000fb578251825591602001919060010190620000de565b50620001099291506200010d565b5090565b5b808211156200010957600081556001016200010e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014c57600080fd5b81516001600160401b038082111562000169576200016962000124565b604051601f8301601f19908116603f0116810190828211818310171562000194576200019462000124565b81604052838152602092508683858801011115620001b157600080fd5b600091505b83821015620001d55785820183015181830184015290820190620001b6565b83821115620001e75760008385830101525b9695505050505050565b6000806000606084860312156200020757600080fd5b83516001600160401b03808211156200021f57600080fd5b6200022d878388016200013a565b945060208601519150808211156200024457600080fd5b5062000253868287016200013a565b925050604084015160ff811681146200026b57600080fd5b809150509250925092565b600181811c908216806200028b57607f821691505b60208210811415620002ad57634e487b7160e01b600052602260045260246000fd5b50919050565b6109f480620002c36000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014757806395d89b4114610170578063a0712d6814610178578063a457c2d71461018b578063a9059cbb1461019e578063dd62ed3e146101b157600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101ea565b6040516100ce9190610818565b60405180910390f35b6100ea6100e5366004610889565b61027c565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a3660046108b3565b610292565b60055460405160ff90911681526020016100ce565b6100ea610142366004610889565b610341565b6100fe6101553660046108ef565b6001600160a01b031660009081526020819052604090205490565b6100c161037d565b6100ea610186366004610911565b61038c565b6100ea610199366004610889565b6103a0565b6100ea6101ac366004610889565b610439565b6100fe6101bf36600461092a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f99061095d565b80601f01602080910402602001604051908101604052809291908181526020018280546102259061095d565b80156102725780601f1061024757610100808354040283529160200191610272565b820191906000526020600020905b81548152906001019060200180831161025557829003601f168201915b5050505050905090565b6000610289338484610446565b50600192915050565b600061029f84848461056a565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103295760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103368533858403610446565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610289918590610378908690610998565b610446565b6060600480546101f99061095d565b60006103983383610739565b506001919050565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104225760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610320565b61042f3385858403610446565b5060019392505050565b600061028933848461056a565b6001600160a01b0383166104a85760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610320565b6001600160a01b0382166105095760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610320565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105ce5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610320565b6001600160a01b0382166106305760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610320565b6001600160a01b038316600090815260208190526040902054818110156106a85760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610320565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106df908490610998565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072b91815260200190565b60405180910390a350505050565b6001600160a01b03821661078f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610320565b80600260008282546107a19190610998565b90915550506001600160a01b038216600090815260208190526040812080548392906107ce908490610998565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b8181101561084557858101830151858201604001528201610829565b81811115610857576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461088457600080fd5b919050565b6000806040838503121561089c57600080fd5b6108a58361086d565b946020939093013593505050565b6000806000606084860312156108c857600080fd5b6108d18461086d565b92506108df6020850161086d565b9150604084013590509250925092565b60006020828403121561090157600080fd5b61090a8261086d565b9392505050565b60006020828403121561092357600080fd5b5035919050565b6000806040838503121561093d57600080fd5b6109468361086d565b91506109546020840161086d565b90509250929050565b600181811c9082168061097157607f821691505b6020821081141561099257634e487b7160e01b600052602260045260246000fd5b50919050565b600082198211156109b957634e487b7160e01b600052601160045260246000fd5b50019056fea264697066735822122035e5dad9fc7d22137f3ffc514ebe2ee13df26eda3cd165342677df9d6e4831be64736f6c63430008090033";

type MintableERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintableERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintableERC20__factory extends ContractFactory {
  constructor(...args: MintableERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MintableERC20> {
    return super.deploy(
      name,
      symbol,
      decimals,
      overrides || {}
    ) as Promise<MintableERC20>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  override attach(address: string): MintableERC20 {
    return super.attach(address) as MintableERC20;
  }
  override connect(signer: Signer): MintableERC20__factory {
    return super.connect(signer) as MintableERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintableERC20Interface {
    return new utils.Interface(_abi) as MintableERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableERC20 {
    return new Contract(address, _abi, signerOrProvider) as MintableERC20;
  }
}
