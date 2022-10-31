/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type { LendingPool, LendingPoolInterface } from '../LendingPool'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint16',
        name: 'referral',
        type: 'uint16',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newFundAddress',
        type: 'address',
      },
    ],
    name: 'FundAddressUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'FundDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'FundWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousNetValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newNetValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousLiquidityIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newLiquidityIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentLiquidityRate',
        type: 'uint256',
      },
    ],
    name: 'NetValueUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousLiquidityIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint40',
        name: 'purchaseBeginTimestamp',
        type: 'uint40',
      },
      {
        indexed: false,
        internalType: 'uint40',
        name: 'purchaseEndTimestamp',
        type: 'uint40',
      },
      {
        indexed: false,
        internalType: 'uint40',
        name: 'redemptionBeginTimestamp',
        type: 'uint40',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'managementFeeRate',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'performanceFeeRate',
        type: 'uint16',
      },
    ],
    name: 'PeriodInitialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [],
    name: 'LENDINGPOOL_REVISION',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: 'referralCode',
        type: 'uint16',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'depositFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAddressesProvider',
    outputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getConfiguration',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'data',
            type: 'uint256',
          },
        ],
        internalType: 'struct DataTypes.ReserveConfigurationMap',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getReserveData',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'data',
                type: 'uint256',
              },
            ],
            internalType: 'struct DataTypes.ReserveConfigurationMap',
            name: 'configuration',
            type: 'tuple',
          },
          {
            internalType: 'uint128',
            name: 'liquidityIndex',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'currentLiquidityRate',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'previousLiquidityIndex',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'purchaseUpperLimit',
            type: 'uint128',
          },
          {
            internalType: 'uint40',
            name: 'lastUpdateTimestamp',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'purchaseBeginTimestamp',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'purchaseEndTimestamp',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'redemptionBeginTimestamp',
            type: 'uint40',
          },
          {
            internalType: 'uint16',
            name: 'managementFeeRate',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'performanceFeeRate',
            type: 'uint16',
          },
          {
            internalType: 'address',
            name: 'oTokenAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'fundAddress',
            type: 'address',
          },
        ],
        internalType: 'struct DataTypes.ReserveData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getReserveNormalizedIncome',
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
    inputs: [
      {
        internalType: 'address',
        name: 'oToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'fundAddress',
        type: 'address',
      },
    ],
    name: 'initReserve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ILendingPoolAddressesProvider',
        name: 'provider',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'managementFeeRate',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: 'performanceFeeRate',
        type: 'uint16',
      },
      {
        internalType: 'uint128',
        name: 'purchaseUpperLimit',
        type: 'uint128',
      },
      {
        internalType: 'uint40',
        name: 'purchaseBeginTimestamp',
        type: 'uint40',
      },
      {
        internalType: 'uint40',
        name: 'purchaseEndTimestamp',
        type: 'uint40',
      },
      {
        internalType: 'uint40',
        name: 'redemptionBeginTimestamp',
        type: 'uint40',
      },
    ],
    name: 'initializeNextPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'configuration',
        type: 'uint256',
      },
    ],
    name: 'setConfiguration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'val',
        type: 'bool',
      },
    ],
    name: 'setPause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'fundAddress',
        type: 'address',
      },
    ],
    name: 'updateFuncAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'netValue',
        type: 'uint256',
      },
    ],
    name: 'updateNetValue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawFund',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040526000805534801561001457600080fd5b50603480546001600160a01b03191690556124b5806100346000396000f3fe608060405234801561001057600080fd5b506004361061010a5760003560e01c806382dbb635116100a25780639b8d6d38116100715780639b8d6d3814610347578063bedb86fb1461035a578063c4d66de81461036d578063e0b8ff7314610380578063fe65acfe1461039357600080fd5b806382dbb6351461031157806386601372146103245780638afaff021461033757806396c2614c1461033f57600080fd5b8063585e5d20116100de578063585e5d20146102ac5780635c975abb146102bf5780636bd50cef146102d55780636c3fbb80146102fe57600080fd5b8062f714ce1461010f57806305bef05e146101355780630ad40df1146102845780630cee172514610299575b600080fd5b61012261011d36600461208a565b6103ae565b6040519081526020015b60405180910390f35b610277604080516101c08101825260006101a08201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081019190915250604080516101c0810182526035546101a0820190815281526036546001600160801b038082166020840152600160801b91829004811693830193909352603754808416606084015204909116608082015260385464ffffffffff80821660a0840152600160281b8204811660c0840152600160501b8204811660e0840152600160781b82041661010083015261ffff600160a01b82048116610120840152600160b01b909104166101408201526039546001600160a01b03908116610160830152603a541661018082015290565b60405161012c91906120ba565b6102976102923660046121db565b610696565b005b6101226102a73660046121db565b61075b565b6102976102ba3660046121db565b610adf565b603b5460ff16604051901515815260200161012c565b60408051602080820183526000909152815180820183526035549081905291519182520161012c565b61029761030c3660046121f4565b610ca9565b61029761031f366004612249565b610de7565b6102976103323660046121db565b6110ca565b610122600281565b6101226113b8565b6101226103553660046122cb565b6113c9565b610297610368366004612317565b61178d565b61029761037b366004612334565b6118bf565b61029761038e366004612334565b611991565b6034546040516001600160a01b03909116815260200161012c565b603b546040805180820190915260028152610d8d60f21b602082015260009160ff16156103f75760405162461bcd60e51b81526004016103ee9190612351565b60405180910390fd5b506039546040516370a0823160e01b81523360048201526001600160a01b039091169060009082906370a082319060240160206040518083038186803b15801561044057600080fd5b505afa158015610454573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047891906123a6565b9050846000198114156104885750805b6040805180820190915260018152603160f81b60208201524290876104c05760405162461bcd60e51b81526004016103ee9190612351565b506040805180820190915260018152603560f81b6020820152838811156104fa5760405162461bcd60e51b81526004016103ee9190612351565b5060385464ffffffffff600160281b909104811690821610801590610550575060385464ffffffffff600160501b90910481169082161080610550575060385464ffffffffff600160781b909104811690821610155b604051806040016040528060018152602001603760f81b815250906105885760405162461bcd60e51b81526004016103ee9190612351565b506035546040805180820190915260018152601960f91b6020820152610100909116151590816105cb5760405162461bcd60e51b81526004016103ee9190612351565b50603654604051636b81068560e11b81523360048201526001600160a01b038981166024830152604482018690526001600160801b0390921660648201529086169063d7020d0a90608401600060405180830381600087803b15801561063057600080fd5b505af1158015610644573d6000803e3d6000fd5b50506040518581526001600160a01b038a1692503391507f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb9060200160405180910390a3509093505050505b92915050565b603454604080516385c858b160e01b8152905133926001600160a01b0316916385c858b1916004808301926020929190829003018186803b1580156106da57600080fd5b505afa1580156106ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071291906123bf565b6001600160a01b03161460405180604001604052806002815260200161323760f01b815250906107555760405162461bcd60e51b81526004016103ee9190612351565b50603555565b603b546040805180820190915260028152610d8d60f21b602082015260009160ff161561079b5760405162461bcd60e51b81526004016103ee9190612351565b5060345460408051636d44f55d60e01b8152905133926001600160a01b031691636d44f55d916004808301926020929190829003018186803b1580156107e057600080fd5b505afa1580156107f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081891906123bf565b6001600160a01b03161460405180604001604052806002815260200161064760f31b8152509061085b5760405162461bcd60e51b81526004016103ee9190612351565b506040805180820190915260018152603160f81b60208201524290836108945760405162461bcd60e51b81526004016103ee9190612351565b50603854600160501b900464ffffffffff1681108015906108c45750603854600160781b900464ffffffffff1681105b604051806040016040528060018152602001603960f81b815250906108fc5760405162461bcd60e51b81526004016103ee9190612351565b50603954604080516358b50cef60e11b8152905185926001600160a01b0316918291600091839163b16a19de91600481810192602092909190829003018186803b15801561094957600080fd5b505afa15801561095d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098191906123bf565b9050600019871415610a09576040516370a0823160e01b81526001600160a01b0384811660048301528216906370a082319060240160206040518083038186803b1580156109ce57600080fd5b505afa1580156109e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0691906123a6565b93505b603a54604051634efecaa560e01b81526001600160a01b0391821660048201526024810186905290831690634efecaa590604401602060405180830381600087803b158015610a5757600080fd5b505af1158015610a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8f91906123a6565b50603a546040518581526001600160a01b03909116907fdcbc04a15249e560179846f4ed762c63956382a0d6e4972fa2b4939a184613ca9060200160405180910390a2509193505050505b919050565b60345460408051636d44f55d60e01b8152905133926001600160a01b031691636d44f55d916004808301926020929190829003018186803b158015610b2357600080fd5b505afa158015610b37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5b91906123bf565b6001600160a01b03161460405180604001604052806002815260200161064760f31b81525090610b9e5760405162461bcd60e51b81526004016103ee9190612351565b506040805180820190915260018152603160f81b602082015281610bd55760405162461bcd60e51b81526004016103ee9190612351565b50603954604080516358b50cef60e11b815290516001600160a01b0390921691600091839163b16a19de91600481810192602092909190829003018186803b158015610c2057600080fd5b505afa158015610c34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5891906123bf565b9050610c6f6001600160a01b038216338486611adc565b60405183815233907f04d1e3db499c88d526b5839da3d76fbdda6fd7310b9aa71a624f2002ef73f95f9060200160405180910390a2505050565b603454604080516385c858b160e01b8152905133926001600160a01b0316916385c858b1916004808301926020929190829003018186803b158015610ced57600080fd5b505afa158015610d01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2591906123bf565b6001600160a01b03161460405180604001604052806002815260200161323760f01b81525090610d685760405162461bcd60e51b81526004016103ee9190612351565b5060405163220e4eef60e21b8152603560048201526001600160a01b0380841660248301528216604482015273__$d3b4366daeb9cadc7528af6145b50b2183$__906388393bbc9060640160006040518083038186803b158015610dcb57600080fd5b505af4158015610ddf573d6000803e3d6000fd5b505050505050565b60345460408051636d44f55d60e01b8152905133926001600160a01b031691636d44f55d916004808301926020929190829003018186803b158015610e2b57600080fd5b505afa158015610e3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6391906123bf565b6001600160a01b03161460405180604001604052806002815260200161064760f31b81525090610ea65760405162461bcd60e51b81526004016103ee9190612351565b50603854604080518082019091526002815261031360f41b60208201529064ffffffffff600160781b9091048116429091161015610ef75760405162461bcd60e51b81526004016103ee9190612351565b5060385464ffffffffff600160781b909104811690841610801590610f2957508164ffffffffff168364ffffffffff16105b8015610f4257508064ffffffffff168264ffffffffff16105b60405180604001604052806002815260200161313160f01b81525090610f7b5760405162461bcd60e51b81526004016103ee9190612351565b506038805461ffff878116600160b01b0261ffff60b01b19918a16600160a01b029190911663ffffffff60a01b19909216919091171790556036546001600160801b03808616600160801b026001600160801b031916911617603755610fe9676765c793fa10079d601b1b90565b603680546001600160801b03928316600160801b029083161790556038805464ffffffffff848116600160781b810264ffffffffff60781b19888416600160501b810264ffffffffff60501b19958c16600160281b8102969096166effffffffffffffffffff0000000000199097169690961795909517161790935560375460408051919095168152602081019190915292830152606082015261ffff8781166080830152861660a08201527f690b9d63be57b307a8560c124fdcdada8871409db42c5f79fb205a8b93e5e61b9060c00160405180910390a1505050505050565b60345460408051636d44f55d60e01b8152905133926001600160a01b031691636d44f55d916004808301926020929190829003018186803b15801561110e57600080fd5b505afa158015611122573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114691906123bf565b6001600160a01b03161460405180604001604052806002815260200161064760f31b815250906111895760405162461bcd60e51b81526004016103ee9190612351565b506040805180820190915260018152603160f81b6020820152816111c05760405162461bcd60e51b81526004016103ee9190612351565b50603854429064ffffffffff600160501b9091048116908216108015906111fa575060385464ffffffffff600160781b9091048116908216105b604051806040016040528060018152602001603960f81b815250906112325760405162461bcd60e51b81526004016103ee9190612351565b506039546037546040805163b1bf962d60e01b815290516001600160a01b03909316926000926112cd926001600160801b0390911691859163b1bf962d916004828101926020929190829003018186803b15801561128f57600080fd5b505afa1580156112a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c791906123a6565b90611b7e565b90506112dc6035858386611c3e565b7fcd87e38b58254463eb456861835ed814f197d20a2a19119c8ad36277145ffe3881836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561133757600080fd5b505afa15801561134b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136f91906123a6565b6037546036546040805194855260208501939093526001600160801b03918216848401528181166060850152600160801b9004166080830152519081900360a00190a150505050565b60006113c46035611dc8565b905090565b603b546040805180820190915260028152610d8d60f21b602082015260009160ff16156114095760405162461bcd60e51b81526004016103ee9190612351565b506040805180820190915260018152603160f81b6020820152846114405760405162461bcd60e51b81526004016103ee9190612351565b504260008061145e6035546101008116151591610200909116151590565b603854919350915064ffffffffff600160281b9091048116908416108015906114b8575060385464ffffffffff600160501b909104811690841610806114b8575060385464ffffffffff600160781b909104811690841610155b604051806040016040528060018152602001603760f81b815250906114f05760405162461bcd60e51b81526004016103ee9190612351565b506040805180820190915260018152601960f91b6020820152826115275760405162461bcd60e51b81526004016103ee9190612351565b506040805180820190915260018152603360f81b6020820152811561155f5760405162461bcd60e51b81526004016103ee9190612351565b50603954604080516318160ddd60e01b815290516001600160a01b0390921691829160009183916318160ddd916004828101926020929190829003018186803b1580156115ab57600080fd5b505afa1580156115bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e391906123a6565b6037546116009190600160801b90046001600160801b03166123f2565b9050808a111561160e578099505b603654604051630ab714fb60e11b81526001600160a01b038b81166004830152602482018d90526001600160801b0390921660448201529083169063156e29f690606401602060405180830381600087803b15801561166c57600080fd5b505af1158015611680573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a49190612409565b5061172d33848c856001600160a01b031663b16a19de6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116e457600080fd5b505afa1580156116f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171c91906123bf565b6001600160a01b0316929190611adc565b8761ffff16896001600160a01b0316336001600160a01b03167fc4bd2b15fc4073a16fbcbebdea7175494cd3c2dc36a5c53da23f3db6bde868aa8d60405161177791815260200190565b60405180910390a4509798975050505050505050565b603454604080516385c858b160e01b8152905133926001600160a01b0316916385c858b1916004808301926020929190829003018186803b1580156117d157600080fd5b505afa1580156117e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180991906123bf565b6001600160a01b03161460405180604001604052806002815260200161323760f01b8152509061184c5760405162461bcd60e51b81526004016103ee9190612351565b50603b805460ff191682151590811790915560ff1615611892576040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a150565b6040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a15b50565b60015460029060ff16806118d25750303b155b806118de575060005481115b6119415760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b60648201526084016103ee565b60015460ff16158015611960576001805460ff19168117905560008290555b603480546001600160a01b0319166001600160a01b038516179055801561198c576001805460ff191690555b505050565b603454604080516385c858b160e01b8152905133926001600160a01b0316916385c858b1916004808301926020929190829003018186803b1580156119d557600080fd5b505afa1580156119e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a0d91906123bf565b6001600160a01b03161460405180604001604052806002815260200161323760f01b81525090611a505760405162461bcd60e51b81526004016103ee9190612351565b50604080518082019091526002815261034360f41b60208201526001600160a01b038216611a915760405162461bcd60e51b81526004016103ee9190612351565b50603a80546001600160a01b0319166001600160a01b0383169081179091556040517f6bed6474711943f2d27e5ea867d18cf848a8dab37cc30943bc20c38b12494ab490600090a250565b6040516323b872dd60e01b8082526001600160a01b038581166004840152841660248301526044820183905290600080606483828a5af1611b21573d6000803e3d6000fd5b50611b2b85611e7f565b611b775760405162461bcd60e51b815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d0000000000000060448201526064016103ee565b5050505050565b6000821580611b8b575081155b15611b9857506000610690565b81611baf6002676765c793fa10079d601b1b612426565b611bbb906000196123f2565b611bc59190612426565b83111560405180604001604052806002815260200161068760f31b81525090611c015760405162461bcd60e51b81526004016103ee9190612351565b50676765c793fa10079d601b1b611c19600282612426565b611c238486612448565b611c2d9190612467565b611c379190612426565b9392505050565b6003840154600090611c5e90600160501b900464ffffffffff16836123f2565b905060008084861115611cd057611c8d611c7886886123f2565b6003890154600160b01b900461ffff16611f28565b90506301e1338083611cb5888a60030160149054906101000a900461ffff1661ffff16611f28565b611cbf9190612448565b611cc99190612426565b9150611d0a565b60038701546301e13380908490611cf3908890600160a01b900461ffff16611f28565b611cfd9190612448565b611d079190612426565b91505b600081611d1784896123f2565b611d2191906123f2565b90506000611d2f8288611f50565b60028a0154909150611d4b9082906001600160801b0316611b7e565b60018a0180546001600160801b0319166001600160801b0392909216919091179055846301e13380676765c793fa10079d601b1b611d8990846123f2565b611d939190612448565b611d9d9190612426565b600190990180546001600160801b039a8b16600160801b029a16999099179098555050505050505050565b600381015460009064ffffffffff808216914291600160781b90910481169082161115611e0457506003830154600160781b900464ffffffffff165b8164ffffffffff168164ffffffffff16118015611e365750600384015464ffffffffff600160501b9091048116908216115b15611e6c576001840154611e64906001600160801b03808216916112c791600160801b909104168486612024565b949350505050565b505050600101546001600160801b031690565b6000611ea5565b62461bcd60e51b60005260206004528060245250806044525060646000fd5b3d8015611ee45760208114611f1557611edf7f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611e86565b611f22565b823b611f0c57611f0c7311d41d8c8e881b9bdd08184818dbdb9d1c9858dd60621b6014611e86565b60019150611f22565b3d6000803e600051151591505b50919050565b6000821580611f35575081155b15611f4257506000610690565b612710611c19600282612426565b604080518082019091526002815261035360f41b602082015260009082611f8a5760405162461bcd60e51b81526004016103ee9190612351565b506000611f98600284612426565b9050676765c793fa10079d601b1b611fb2826000196123f2565b611fbc9190612426565b84111560405180604001604052806002815260200161068760f31b81525090611ff85760405162461bcd60e51b81526004016103ee9190612351565b508281612010676765c793fa10079d601b1b87612448565b61201a9190612467565b611e649190612426565b60008061203b64ffffffffff8085169086166123f2565b9050676765c793fa10079d601b1b6301e133806120588388612448565b6120629190612426565b61206c9190612467565b95945050505050565b6001600160a01b03811681146118bc57600080fd5b6000806040838503121561209d57600080fd5b8235915060208301356120af81612075565b809150509250929050565b81515181526101a0810160208301516120de60208401826001600160801b03169052565b5060408301516120f960408401826001600160801b03169052565b50606083015161211460608401826001600160801b03169052565b50608083015161212f60808401826001600160801b03169052565b5060a083015161214860a084018264ffffffffff169052565b5060c083015161216160c084018264ffffffffff169052565b5060e083015161217a60e084018264ffffffffff169052565b506101008381015164ffffffffff16908301526101208084015161ffff908116918401919091526101408085015190911690830152610160808401516001600160a01b03908116918401919091526101809384015116929091019190915290565b6000602082840312156121ed57600080fd5b5035919050565b6000806040838503121561220757600080fd5b823561221281612075565b915060208301356120af81612075565b803561ffff81168114610ada57600080fd5b803564ffffffffff81168114610ada57600080fd5b60008060008060008060c0878903121561226257600080fd5b61226b87612222565b955061227960208801612222565b945060408701356001600160801b038116811461229557600080fd5b93506122a360608801612234565b92506122b160808801612234565b91506122bf60a08801612234565b90509295509295509295565b6000806000606084860312156122e057600080fd5b8335925060208401356122f281612075565b915061230060408501612222565b90509250925092565b80151581146118bc57600080fd5b60006020828403121561232957600080fd5b8135611c3781612309565b60006020828403121561234657600080fd5b8135611c3781612075565b600060208083528351808285015260005b8181101561237e57858101830151858201604001528201612362565b81811115612390576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156123b857600080fd5b5051919050565b6000602082840312156123d157600080fd5b8151611c3781612075565b634e487b7160e01b600052601160045260246000fd5b600082821015612404576124046123dc565b500390565b60006020828403121561241b57600080fd5b8151611c3781612309565b60008261244357634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615612462576124626123dc565b500290565b6000821982111561247a5761247a6123dc565b50019056fea26469706673582212204f1be0c6cbb70f37038cd0d07f20a047162bca364bf5effe6d6a0f1bf0040e8864736f6c63430008090033'

type LendingPoolConstructorParams =
  | [linkLibraryAddresses: LendingPoolLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: LendingPoolConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  )
}

export class LendingPool__factory extends ContractFactory {
  constructor(...args: LendingPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      const [linkLibraryAddresses, signer] = args
      super(_abi, LendingPool__factory.linkBytecode(linkLibraryAddresses), signer)
    }
  }

  static linkBytecode(linkLibraryAddresses: LendingPoolLibraryAddresses): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$d3b4366daeb9cadc7528af6145b50b2183\\$__', 'g'),
      linkLibraryAddresses['contracts/libraries/logic/ReserveLogic.sol:ReserveLogic'].replace(/^0x/, '').toLowerCase()
    )

    return linkedBytecode
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<LendingPool> {
    return super.deploy(overrides || {}) as Promise<LendingPool>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): LendingPool {
    return super.attach(address) as LendingPool
  }
  override connect(signer: Signer): LendingPool__factory {
    return super.connect(signer) as LendingPool__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): LendingPoolInterface {
    return new utils.Interface(_abi) as LendingPoolInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LendingPool {
    return new Contract(address, _abi, signerOrProvider) as LendingPool
  }
}

export interface LendingPoolLibraryAddresses {
  ['contracts/libraries/logic/ReserveLogic.sol:ReserveLogic']: string
}
