/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AdminUpgradeabilityProxy,
  AdminUpgradeabilityProxyInterface,
} from "../../../../dependencies/openzeppelin/upgradeability/AdminUpgradeabilityProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405162000a8738038062000a87833981016040819052620000269162000274565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd62000354565b60008051602062000a67833981519152146200007557620000756200037a565b620000808262000168565b805115620000f7576000826001600160a01b031682604051620000a4919062000390565b600060405180830381855af49150503d8060008114620000e1576040519150601f19603f3d011682016040523d82523d6000602084013e620000e6565b606091505b5050905080620000f557600080fd5b505b5062000127905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610462000354565b60008051602062000a47833981519152146200014757620001476200037a565b6200015f8260008051602062000a4783398151915255565b505050620003ae565b6200017e816200020860201b620003cc1760201c565b620001f55760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840160405180910390fd5b60008051602062000a6783398151915255565b3b151590565b80516001600160a01b03811681146200022657600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200025e57818101518382015260200162000244565b838111156200026e576000848401525b50505050565b6000806000606084860312156200028a57600080fd5b62000295846200020e565b9250620002a5602085016200020e565b60408501519092506001600160401b0380821115620002c357600080fd5b818601915086601f830112620002d857600080fd5b815181811115620002ed57620002ed6200022b565b604051601f8201601f19908116603f011681019083821181831017156200031857620003186200022b565b816040528281528960208487010111156200033257600080fd5b6200034583602083016020880162000241565b80955050505050509250925092565b6000828210156200037557634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60008251620003a481846020870162000241565b9190910192915050565b61068980620003be6000396000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100745780635c60da1b146100875780638f283970146100b8578063f851a440146100d8575b6100526100ed565b005b34801561006057600080fd5b5061005261006f36600461057e565b610127565b6100526100823660046105a0565b610164565b34801561009357600080fd5b5061009c610213565b6040516001600160a01b03909116815260200160405180910390f35b3480156100c457600080fd5b506100526100d336600461057e565b610275565b3480156100e457600080fd5b5061009c610387565b6100f56103d2565b6101256101207f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6103da565b565b600080516020610634833981519152546001600160a01b0316336001600160a01b0316141561015c57610159816103fe565b50565b6101596100ed565b600080516020610634833981519152546001600160a01b0316336001600160a01b0316141561020657610196836103fe565b6000836001600160a01b031683836040516101b2929190610623565b600060405180830381855af49150503d80600081146101ed576040519150601f19603f3d011682016040523d82523d6000602084013e6101f2565b606091505b505090508061020057600080fd5b50505050565b61020e6100ed565b505050565b600061022b6000805160206106348339815191525490565b6001600160a01b0316336001600160a01b0316141561026a57507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6102726100ed565b90565b600080516020610634833981519152546001600160a01b0316336001600160a01b0316141561015c576001600160a01b0381166103185760405162461bcd60e51b815260206004820152603660248201527f43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f604482015275787920746f20746865207a65726f206164647265737360501b60648201526084015b60405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61034f6000805160206106348339815191525490565b604080516001600160a01b03928316815291841660208301520160405180910390a16101598160008051602061063483398151915255565b600061039f6000805160206106348339815191525490565b6001600160a01b0316336001600160a01b0316141561026a57506000805160206106348339815191525490565b3b151590565b61012561043e565b3660008037600080366000845af43d6000803e8080156103f9573d6000f35b3d6000fd5b610407816104ca565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600080516020610634833981519152546001600160a01b0316336001600160a01b031614156101255760405162461bcd60e51b815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527137b6903a343290383937bc3c9030b236b4b760711b606482015260840161030f565b803b61053e5760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840161030f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b80356001600160a01b038116811461057957600080fd5b919050565b60006020828403121561059057600080fd5b61059982610562565b9392505050565b6000806000604084860312156105b557600080fd5b6105be84610562565b9250602084013567ffffffffffffffff808211156105db57600080fd5b818601915086601f8301126105ef57600080fd5b8135818111156105fe57600080fd5b87602082850101111561061057600080fd5b6020830194508093505050509250925092565b818382376000910190815291905056feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103a26469706673582212207228d8e79473d62ad720e2b69f856b708806d57572ddfa2c4c3a1e7125d3fecc64736f6c63430008090033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";

type AdminUpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdminUpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdminUpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: AdminUpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<AdminUpgradeabilityProxy> {
    return super.deploy(
      _logic,
      _admin,
      _data,
      overrides || {}
    ) as Promise<AdminUpgradeabilityProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _admin, _data, overrides || {});
  }
  override attach(address: string): AdminUpgradeabilityProxy {
    return super.attach(address) as AdminUpgradeabilityProxy;
  }
  override connect(signer: Signer): AdminUpgradeabilityProxy__factory {
    return super.connect(signer) as AdminUpgradeabilityProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as AdminUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdminUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AdminUpgradeabilityProxy;
  }
}
