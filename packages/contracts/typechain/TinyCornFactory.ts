/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TinyCorn } from "./TinyCorn";

export class TinyCornFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _farmland: string,
    _connectedWorld: string,
    overrides?: Overrides
  ): Promise<TinyCorn> {
    return super.deploy(
      _farmland,
      _connectedWorld,
      overrides || {}
    ) as Promise<TinyCorn>;
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
  attach(address: string): TinyCorn {
    return super.attach(address) as TinyCorn;
  }
  connect(signer: Signer): TinyCornFactory {
    return super.connect(signer) as TinyCornFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TinyCorn {
    return new Contract(address, _abi, signerOrProvider) as TinyCorn;
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
  "0x60806040523480156200001157600080fd5b50604051620017fb380380620017fb833981016040819052620000349162000184565b604051806040016040528060088152602001672a34b73ca1b7b93760c11b815250604051806040016040528060038152602001622a21a760e91b81525082828281600390805190602001906200008c929190620000de565b508051620000a2906004906020840190620000de565b5050600580546001600160a01b039384166001600160a01b03199182161790915560068054979093169616959095179055506200021892505050565b828054620000ec90620001c2565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b6000806040838503121562000197578182fd5b8251620001a481620001ff565b6020840151909250620001b781620001ff565b809150509250929050565b600181811c90821680620001d757607f821691505b60208210811415620001f957634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b03811681146200021557600080fd5b50565b6115d380620002286000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806342966c68116100ad578063986c285411610071578063986c285414610253578063a457c2d714610266578063a9059cbb14610279578063dd62ed3e1461028c578063f6bc2b8a146102c557600080fd5b806342966c68146101e95780635f71a8b9146101fc57806370a082311461020f57806379cc67901461023857806395d89b411461024b57600080fd5b806323b872dd116100f457806323b872dd1461018e5780632f9ca46a146101a1578063313ce567146101b457806339509351146101c357806340c10f19146101d657600080fd5b80630621472c1461012657806306fdde031461013b578063095ea7b31461015957806318160ddd1461017c575b600080fd5b610139610134366004611048565b6102f2565b005b610143610304565b604051610150919061138a565b60405180910390f35b61016c6101673660046110cf565b610396565b6040519015158152602001610150565b6002545b604051908152602001610150565b61016c61019c366004611094565b6103ae565b6101436101af3660046111ca565b6103d4565b60405160128152602001610150565b61016c6101d13660046110cf565b61040d565b6101396101e43660046110cf565b61044c565b6101396101f7366004611233565b6104c6565b61014361020a3660046111ca565b6104d3565b61018061021d366004611048565b6001600160a01b031660009081526020819052604090205490565b6101396102463660046110cf565b6104f4565b610143610509565b6101436102613660046111ca565b610518565b61016c6102743660046110cf565b61053b565b61016c6102873660046110cf565b6105d8565b61018061029a366004611062565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101436102d33660046111ca565b506040805180820190915260048152630f09f92b60e41b602082015290565b61030081600160fa1b610396565b5050565b6060600380546103139061148e565b80601f016020809104026020016040519081016040528092919081815260200182805461033f9061148e565b801561038c5780601f106103615761010080835404028352916020019161038c565b820191906000526020600020905b81548152906001019060200180831161036f57829003601f168201915b5050505050905090565b6000336103a48185856105e6565b5060019392505050565b6000336103bc85828561070b565b6103c785858561079d565b60019150505b9392505050565b60606103de610304565b6103e6610509565b6040516020016103f7929190611263565b6040516020818303038152906040529050919050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906103a49082908690610447908790611414565b6105e6565b6006546001600160a01b031633146104ab5760405162461bcd60e51b815260206004820152601d60248201527f43616c6c6572206973206e6f742061206661726d6c616e642074696c6500000060448201526064015b60405180910390fd5b610300826104c183670de0b6b3a764000061142c565b610976565b6104d03382610a61565b50565b60606040518060c00160405280608d8152602001611511608d913992915050565b6104ff82338361070b565b6103008282610a61565b6060600480546103139061148e565b6060610522610304565b61052a610509565b6040516020016103f79291906112ca565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105c05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104a2565b6105cd82868684036105e6565b506001949350505050565b6000336103a481858561079d565b6001600160a01b0383166106485760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104a2565b6001600160a01b0382166106a95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104a2565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610797578181101561078a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104a2565b61079784848484036105e6565b50505050565b6001600160a01b0383166108015760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104a2565b6001600160a01b0382166108635760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104a2565b61086e838383610bb3565b6001600160a01b038316600090815260208190526040902054818110156108e65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104a2565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061091d908490611414565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161096991815260200190565b60405180910390a3610797565b6001600160a01b0382166109cc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104a2565b6109d860008383610bb3565b80600260008282546109ea9190611414565b90915550506001600160a01b03821660009081526020819052604081208054839290610a17908490611414565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610ac15760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104a2565b610acd82600083610bb3565b6001600160a01b03821660009081526020819052604090205481811015610b415760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104a2565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b7090849061144b565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106fe565b6001600160a01b0383161580610bd057506001600160a01b038216155b15610bda57505050565b6000610be584610d8e565b90506000610bf284610d8e565b90506000805b8351811015610d205760005b8351811015610d025760055485516001916001600160a01b03169063993c157990889086908110610c4557634e487b7160e01b600052603260045260246000fd5b6020026020010151878581518110610c6d57634e487b7160e01b600052603260045260246000fd5b60200260200101516040518363ffffffff1660e01b8152600401610c929291906113bd565b60206040518083038186803b158015610caa57600080fd5b505afa158015610cbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce2919061124b565b11610cf05760019250610d02565b80610cfa816114c9565b915050610c04565b508115610d0e57610d20565b80610d18816114c9565b915050610bf8565b5080610d865760405162461bcd60e51b815260206004820152602f60248201527f5472616e73666572206973206f6e6c7920616c6c6f776564206265747765656e60448201526e2061646a6163656e742074696c657360881b60648201526084016104a2565b505050505050565b60606001600160a01b0382163b15610e275760055460405163077380a160e31b81526001600160a01b03848116600483015290911690633b9c05089060240160006040518083038186803b158015610de557600080fd5b505afa158015610df9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e2191908101906110f8565b92915050565b600554604051631a2986e560e31b81526001600160a01b0384811660048301529091169063d14c37289060240160206040518083038186803b158015610e6c57600080fd5b505afa158015610e80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea491906111aa565b610ef05760405162461bcd60e51b815260206004820152601e60248201527f61646472206973206e6f7420616e20657867726173696120706c61796572000060448201526064016104a2565b604080516001808252818301909252600091816020015b6040805180820190915260008082526020820152815260200190600190039081610f075790505060055460405163cb7869fd60e01b81526001600160a01b03868116600483015292935091169063cb7869fd90602401604080518083038186803b158015610f7457600080fd5b505afa158015610f88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fac9190611218565b81600081518110610fcd57634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b919050565b80356001600160a01b0381168114610fde57600080fd5b60006040828403121561100b578081fd5b6040516040810181811067ffffffffffffffff8211171561102e5761102e6114fa565b604052825181526020928301519281019290925250919050565b600060208284031215611059578081fd5b6103cd82610fe3565b60008060408385031215611074578081fd5b61107d83610fe3565b915061108b60208401610fe3565b90509250929050565b6000806000606084860312156110a8578081fd5b6110b184610fe3565b92506110bf60208501610fe3565b9150604084013590509250925092565b600080604083850312156110e1578182fd5b6110ea83610fe3565b946020939093013593505050565b6000602080838503121561110a578182fd5b825167ffffffffffffffff80821115611121578384fd5b818501915085601f830112611134578384fd5b815181811115611146576111466114fa565b611154848260051b016113e3565b8181528481019250838501600683901b85018601891015611173578687fd5b8694505b8285101561119e576111898982610ffa565b84526001949094019392850192604001611177565b50979650505050505050565b6000602082840312156111bb578081fd5b815180151581146103cd578182fd5b6000604082840312156111db578081fd5b6040516040810181811067ffffffffffffffff821117156111fe576111fe6114fa565b604052823581526020928301359281019290925250919050565b600060408284031215611229578081fd5b6103cd8383610ffa565b600060208284031215611244578081fd5b5035919050565b60006020828403121561125c578081fd5b5051919050565b6f029ba30b1b59037b31021b7b4b7399d160851b81526000835161128e816010850160208801611462565b61040560f31b60109184019182015283516112b0816012840160208801611462565b602960f81b60129290910191820152601301949350505050565b7202a3434b99034b990309039ba30b1b59037b31606d1b8152600083516112f8816013850160208801611462565b61040560f31b601391840191820152835161131a816015840160208801611462565b7f292e20596f752063616e20757365207468697320746f206d616e61676520616e601592909101918201527f6420617574686f726973652061636365737320666f7220646966666572656e7460358201526a1031b7b73a3930b1ba399760a91b6055820152606001949350505050565b60208152600082518060208401526113a9816040850160208701611462565b601f01601f19169190910160400192915050565b8251815260208084015181830152825160408301528201516060820152608081016103cd565b604051601f8201601f1916810167ffffffffffffffff8111828210171561140c5761140c6114fa565b604052919050565b60008219821115611427576114276114e4565b500190565b6000816000190483118215151615611446576114466114e4565b500290565b60008282101561145d5761145d6114e4565b500390565b60005b8381101561147d578181015183820152602001611465565b838111156107975750506000910152565b600181811c908216806114a257607f821691505b602082108114156114c357634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156114dd576114dd6114e4565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe68747470733a2f2f676973742e67697468756275736572636f6e74656e742e636f6d2f6e616c696e626861726477616a2f65363361343138336539616235626338373566346466363636343336366636662f7261772f366333383730666330333164666161366534633063316633613035626637326430386332313164642f54696e7945524332302e6a736f6ea26469706673582212207c4c3fe51a29dc85f468835f0e2796258bbf8312631059e1d127638601011a0364736f6c63430008040033";
