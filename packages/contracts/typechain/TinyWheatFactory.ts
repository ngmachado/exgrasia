/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TinyWheat } from "./TinyWheat";

export class TinyWheatFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _farmland: string,
    _connectedWorld: string,
    overrides?: Overrides
  ): Promise<TinyWheat> {
    return super.deploy(
      _farmland,
      _connectedWorld,
      overrides || {}
    ) as Promise<TinyWheat>;
  }
  getDeployTransaction(
    _farmland: string,
    _connectedWorld: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _farmland,
      _connectedWorld,
      overrides || {}
    );
  }
  attach(address: string): TinyWheat {
    return super.attach(address) as TinyWheat;
  }
  connect(signer: Signer): TinyWheatFactory {
    return super.connect(signer) as TinyWheatFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TinyWheat {
    return new Contract(address, _abi, signerOrProvider) as TinyWheat;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_farmland",
        type: "address",
      },
      {
        internalType: "contract TinyWorld",
        name: "_connectedWorld",
        type: "address",
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
        name: "aprovee",
        type: "address",
      },
    ],
    name: "approveAll",
    outputs: [],
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "farmer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileABI",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileDescription",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileEmoji",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileName",
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
        name: "to",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
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
  "0x60806040523480156200001157600080fd5b506040516200160f3803806200160f833981016040819052620000349162000185565b60405180604001604052806009815260200168151a5b9e55da19585d60ba1b815250604051806040016040528060038152602001620a8ae960eb1b81525082828281600390805190602001906200008d929190620000df565b508051620000a3906004906020840190620000df565b5050600580546001600160a01b039384166001600160a01b03199182161790915560068054979093169616959095179055506200021992505050565b828054620000ed90620001c3565b90600052602060002090601f0160209004810192826200011157600085556200015c565b82601f106200012c57805160ff19168380011785556200015c565b828001600101855582156200015c579182015b828111156200015c5782518255916020019190600101906200013f565b506200016a9291506200016e565b5090565b5b808211156200016a57600081556001016200016f565b6000806040838503121562000198578182fd5b8251620001a58162000200565b6020840151909250620001b88162000200565b809150509250929050565b600181811c90821680620001d857607f821691505b60208210811415620001fa57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b03811681146200021657600080fd5b50565b6113e680620002296000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806342966c68116100ad578063986c285411610071578063986c285414610253578063a457c2d714610266578063a9059cbb14610279578063dd62ed3e1461028c578063f6bc2b8a146102c557600080fd5b806342966c68146101e95780635f71a8b9146101fc57806370a082311461020f57806379cc67901461023857806395d89b411461024b57600080fd5b806323b872dd116100f457806323b872dd1461018e5780632f9ca46a146101a1578063313ce567146101b457806339509351146101c357806340c10f19146101d657600080fd5b80630621472c1461012657806306fdde031461013b578063095ea7b31461015957806318160ddd1461017c575b600080fd5b610139610134366004610f3f565b6102f2565b005b610143610304565b60405161015091906111c8565b60405180910390f35b61016c610167366004610fc6565b610396565b6040519015158152602001610150565b6002545b604051908152602001610150565b61016c61019c366004610f8b565b6103ae565b6101436101af36600461100f565b6103d4565b60405160128152602001610150565b61016c6101d1366004610fc6565b61040d565b6101396101e4366004610fc6565b61044c565b6101396101f7366004611071565b6104c6565b61014361020a36600461100f565b6104d3565b61018061021d366004610f3f565b6001600160a01b031660009081526020819052604090205490565b610139610246366004610fc6565b6104f4565b610143610509565b61014361026136600461100f565b610518565b61016c610274366004610fc6565b61053b565b61016c610287366004610fc6565b6105d8565b61018061029a366004610f59565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101436102d336600461100f565b506040805180820190915260048152630f09f92b60e41b602082015290565b61030081600160fa1b610396565b5050565b606060038054610313906112d2565b80601f016020809104026020016040519081016040528092919081815260200182805461033f906112d2565b801561038c5780601f106103615761010080835404028352916020019161038c565b820191906000526020600020905b81548152906001019060200180831161036f57829003601f168201915b5050505050905090565b6000336103a48185856105e6565b5060019392505050565b6000336103bc85828561070b565b6103c785858561079d565b60019150505b9392505050565b60606103de610304565b6103e6610509565b6040516020016103f79291906110a1565b6040516020818303038152906040529050919050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906103a49082908690610447908790611258565b6105e6565b6006546001600160a01b031633146104ab5760405162461bcd60e51b815260206004820152601d60248201527f43616c6c6572206973206e6f742061206661726d6c616e642074696c6500000060448201526064015b60405180910390fd5b610300826104c183670de0b6b3a7640000611270565b610976565b6104d03382610a61565b50565b60606040518060c00160405280608d8152602001611324608d913992915050565b6104ff82338361070b565b6103008282610a61565b606060048054610313906112d2565b6060610522610304565b61052a610509565b6040516020016103f7929190611108565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105c05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104a2565b6105cd82868684036105e6565b506001949350505050565b6000336103a481858561079d565b6001600160a01b0383166106485760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104a2565b6001600160a01b0382166106a95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104a2565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610797578181101561078a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104a2565b61079784848484036105e6565b50505050565b6001600160a01b0383166108015760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104a2565b6001600160a01b0382166108635760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104a2565b61086e838383610bb8565b6001600160a01b038316600090815260208190526040902054818110156108e65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104a2565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061091d908490611258565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161096991815260200190565b60405180910390a3610797565b6001600160a01b0382166109cc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104a2565b6109d860008383610bb8565b80600260008282546109ea9190611258565b90915550506001600160a01b03821660009081526020819052604081208054839290610a17908490611258565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610ac15760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104a2565b610acd82600083610bb8565b6001600160a01b03821660009081526020819052604090205481811015610b415760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104a2565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b7090849061128f565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106fe565b505050565b6001600160a01b0383161580610bd557506001600160a01b038216155b15610bdf57505050565b600554604051631a2986e560e31b81526001600160a01b0385811660048301529091169063d14c37289060240160206040518083038186803b158015610c2457600080fd5b505afa158015610c38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5c9190610fef565b610ca85760405162461bcd60e51b815260206004820152601e60248201527f66726f6d206973206e6f7420616e20657867726173696120706c61796572000060448201526064016104a2565b600554604051631a2986e560e31b81526001600160a01b0384811660048301529091169063d14c37289060240160206040518083038186803b158015610ced57600080fd5b505afa158015610d01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d259190610fef565b610d715760405162461bcd60e51b815260206004820152601c60248201527f746f206973206e6f7420616e20657867726173696120706c617965720000000060448201526064016104a2565b60055460405163cb7869fd60e01b81526001600160a01b038581166004830152600192169063993c157990829063cb7869fd90602401604080518083038186803b158015610dbe57600080fd5b505afa158015610dd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df69190611040565b60055460405163cb7869fd60e01b81526001600160a01b0388811660048301529091169063cb7869fd90602401604080518083038186803b158015610e3a57600080fd5b505afa158015610e4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e729190611040565b6040518363ffffffff1660e01b8152600401610e8f9291906111fb565b60206040518083038186803b158015610ea757600080fd5b505afa158015610ebb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edf9190611089565b1115610bb35760405162461bcd60e51b8152602060048201526013602482015272283630bcb2b9399030b932903a37b7903330b960691b60448201526064016104a2565b80356001600160a01b0381168114610f3a57600080fd5b919050565b600060208284031215610f50578081fd5b6103cd82610f23565b60008060408385031215610f6b578081fd5b610f7483610f23565b9150610f8260208401610f23565b90509250929050565b600080600060608486031215610f9f578081fd5b610fa884610f23565b9250610fb660208501610f23565b9150604084013590509250925092565b60008060408385031215610fd8578182fd5b610fe183610f23565b946020939093013593505050565b600060208284031215611000578081fd5b815180151581146103cd578182fd5b600060408284031215611020578081fd5b611028611221565b82358152602083013560208201528091505092915050565b600060408284031215611051578081fd5b611059611221565b82518152602083015160208201528091505092915050565b600060208284031215611082578081fd5b5035919050565b60006020828403121561109a578081fd5b5051919050565b6f029ba30b1b59037b31021b7b4b7399d160851b8152600083516110cc8160108501602088016112a6565b61040560f31b60109184019182015283516110ee8160128401602088016112a6565b602960f81b60129290910191820152601301949350505050565b7202a3434b99034b990309039ba30b1b59037b31606d1b8152600083516111368160138501602088016112a6565b61040560f31b60139184019182015283516111588160158401602088016112a6565b7f292e20596f752063616e20757365207468697320746f206d616e61676520616e601592909101918201527f6420617574686f726973652061636365737320666f7220646966666572656e7460358201526a1031b7b73a3930b1ba399760a91b6055820152606001949350505050565b60208152600082518060208401526111e78160408501602087016112a6565b601f01601f19169190910160400192915050565b8251815260208084015181830152825160408301528201516060820152608081016103cd565b6040805190810167ffffffffffffffff8111828210171561125257634e487b7160e01b600052604160045260246000fd5b60405290565b6000821982111561126b5761126b61130d565b500190565b600081600019048311821515161561128a5761128a61130d565b500290565b6000828210156112a1576112a161130d565b500390565b60005b838110156112c15781810151838201526020016112a9565b838111156107975750506000910152565b600181811c908216806112e657607f821691505b6020821081141561130757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfe68747470733a2f2f676973742e67697468756275736572636f6e74656e742e636f6d2f6e616c696e626861726477616a2f65363361343138336539616235626338373566346466363636343336366636662f7261772f366333383730666330333164666161366534633063316633613035626637326430386332313164642f54696e7945524332302e6a736f6ea2646970667358221220b81445daed7907d9d2fae9c3dff25c970d1d15392cddd046cf61b95c3c2a300c64736f6c63430008040033";
