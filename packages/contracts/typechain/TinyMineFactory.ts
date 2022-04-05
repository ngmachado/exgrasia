/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TinyMine } from "./TinyMine";

export class TinyMineFactory extends ContractFactory {
  constructor(linkLibraryAddresses: TinyMineLibraryAddresses, signer?: Signer) {
    super(_abi, TinyMineFactory.linkBytecode(linkLibraryAddresses), signer);
  }

  static linkBytecode(linkLibraryAddresses: TinyMineLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$25da62efdcc799b068a78b56dfb6cf3909\\$__", "g"),
      linkLibraryAddresses["__$25da62efdcc799b068a78b56dfb6cf3909$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(_connectedWorld: string, overrides?: Overrides): Promise<TinyMine> {
    return super.deploy(_connectedWorld, overrides || {}) as Promise<TinyMine>;
  }
  getDeployTransaction(
    _connectedWorld: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_connectedWorld, overrides || {});
  }
  attach(address: string): TinyMine {
    return super.attach(address) as TinyMine;
  }
  connect(signer: Signer): TinyMineFactory {
    return super.connect(signer) as TinyMineFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TinyMine {
    return new Contract(address, _abi, signerOrProvider) as TinyMine;
  }
}

const _abi = [
  {
    inputs: [
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
        name: "selfCoords",
        type: "tuple",
      },
    ],
    name: "mine",
    outputs: [
      {
        internalType: "string[5]",
        name: "",
        type: "string[5]",
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
        name: "selfCoords",
        type: "tuple",
      },
    ],
    name: "moveDown",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "selfCoords",
        type: "tuple",
      },
    ],
    name: "moveLeft",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "selfCoords",
        type: "tuple",
      },
    ],
    name: "moveRight",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "selfCoords",
        type: "tuple",
      },
    ],
    name: "moveUp",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "selfCoords",
        type: "tuple",
      },
    ],
    name: "rollMine",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161223d38038061223d83398101604081905261002f916100c3565b600480546001600160a01b0319166001600160a01b03831690811790915560405130919061005c906100b6565b6001600160a01b03928316815291166020820152604001604051809103906000f08015801561008f573d6000803e3d6000fd5b50600580546001600160a01b0319166001600160a01b0392909216919091179055506100f1565b61134b80610ef283390190565b6000602082840312156100d4578081fd5b81516001600160a01b03811681146100ea578182fd5b9392505050565b610df2806101006000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c80635e0536f9116100665780635e0536f9146101455780635f71a8b914610158578063986c28541461016b578063ac0b564d146101a7578063f6bc2b8a146101ba57600080fd5b8062cd97d3146100a257806313ba1ca3146100b757806319a8bbd8146100ca5780632f9ca46a146100f357806348e6672014610132575b600080fd5b6100b56100b0366004610ac0565b6101e9565b005b6100b56100c5366004610ac0565b6101f9565b6100dd6100d8366004610ac0565b610206565b6040516100ea9190610c0e565b60405180910390f35b610125610101366004610ac0565b5060408051808201909152600981526854696e79204d696e6560b81b602082015290565b6040516100ea9190610c5b565b6100b5610140366004610ac0565b6103dd565b6100b5610153366004610ac0565b6103eb565b610125610166366004610ac0565b6103f9565b610125610179366004610ac0565b506040805180820190915260138152725468697320697320612074696e79206d696e6560681b602082015290565b6100b56101b5366004610ac0565b61041a565b6101256101c8366004610ac0565b50604080518082019091526006815265e29bb0efb88f60d01b602082015290565b6101f681600060016104fa565b50565b6101f681600160006104fa565b61020e610a99565b3360009081526020818152604080832085518452825280832085830151845290915290205463ffffffff16610241610a99565b60005b60058110156103d557604080516020810190915260008082525b600a81101561039b5760006102748483886107ed565b33600090815260016020908152604080832063ffffffff8b168452909152902054909150841480156102c7575033600090815260016020818152604080842063ffffffff8b168552909152909120015482145b156102f357826040516020016102dd9190610b9f565b6040516020818303038152906040529250610388565b600281600381111561031557634e487b7160e01b600052602160045260246000fd5b141561032c57826040516020016102dd9190610b7a565b600181600381111561034e57634e487b7160e01b600052602160045260246000fd5b141561036557826040516020016102dd9190610bc4565b826040516020016103769190610be9565b60405160208183030381529060405292505b508061039381610cdf565b91505061025e565b50808383600581106103bd57634e487b7160e01b600052603260045260246000fd5b602002015250806103cd81610cdf565b915050610244565b509392505050565b6101f68160001960006104fa565b6101f68160006000196104fa565b60606040518060c00160405280608c8152602001610d31608c913992915050565b600061047b826000015183602001514233604051602001610467949392919093845260208401929092526040830152606090811b6bffffffffffffffffffffffff19169082015260740190565b604051602081830303815290604052610898565b905061048b6305f5e10082610cfa565b33600081815260208181526040808320875184528252808320968201518352958152858220805463ffffffff191663ffffffff9590951694909417909355600554918152600390925292902080546001600160a01b039093166001600160a01b03199093169290921790915550565b33600081815260208181526040808320875184528252808320878301518452825280832054938352600180835281842063ffffffff9095168085529483528184208251808401909352805480845291015492820192909252919061055f908690610c6e565b1215801561057a57508051600590610578908690610c6e565b125b6105b75760405162461bcd60e51b8152602060048201526009602482015268092dcecc2d8d2c840f60bb1b60448201526064015b60405180910390fd5b60008382602001516105c99190610c6e565b121580156105e65750600a8382602001516105e49190610c6e565b125b61061e5760405162461bcd60e51b8152602060048201526009602482015268496e76616c6964207960b81b60448201526064016105ae565b6000604051806040016040528086846000015161063b9190610c6e565b81526020018584602001516106509190610c6e565b90529050600361066982600001518360200151866108c9565b600381111561068857634e487b7160e01b600052602160045260246000fd5b14156106d35733600090815260026020818152604080842063ffffffff881685528252808420855185528252808420858301518552909152909120805460ff191690911790556107e5565b60016106e882600001518360200151866108c9565b600381111561070757634e487b7160e01b600052602160045260246000fd5b14156107b95733600081815260036020526040908190205490516335313c2160e11b815260048101929092526001600160a01b031690636a62784290602401600060405180830381600087803b15801561076057600080fd5b505af1158015610774573d6000803e3d6000fd5b505033600090815260026020818152604080842063ffffffff8a1685528252808420875185528252808420878301518552909152909120805460ff1916909117905550505b33600090815260016020818152604080842063ffffffff88168552825290922083518155918301519101555b505050505050565b60008033600090815260026020908152604080832063ffffffff871684528252808320888452825280832087845290915290205460ff16600381111561084357634e487b7160e01b600052602160045260246000fd5b141561085b576108548484846109c9565b9050610891565b5033600090815260026020908152604080832063ffffffff851684528252808320868452825280832085845290915290205460ff165b9392505050565b6000816040516020016108ab9190610b5e565b60408051601f19818403018152919052805160209091012092915050565b60008033600090815260026020908152604080832063ffffffff871684528252808320888452825280832087845290915290205460ff16600381111561091f57634e487b7160e01b600052602160045260246000fd5b141561085b576109308484846109c9565b33600090815260026020908152604080832063ffffffff87168452825280832088845282528083208784529091529020805460ff1916600183600381111561098857634e487b7160e01b600052602160045260246000fd5b02179055505033600090815260026020908152604080832063ffffffff851684528252808320868452825280832085845290915290205460ff169392505050565b604051630453a0b160e31b815263ffffffff808516600483015280841660248301528216604482015260086064820152600090819073__$25da62efdcc799b068a78b56dfb6cf3909$__9063229d05889060840160206040518083038186803b158015610a3557600080fd5b505af4158015610a49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6d9190610b1a565b9050601e8111610a7e576003610a90565b60238111610a8d576002610a90565b60015b95945050505050565b6040518060a001604052806005905b6060815260200190600190039081610aa85790505090565b600060408284031215610ad1578081fd5b6040516040810181811067ffffffffffffffff82111715610b0057634e487b7160e01b83526041600452602483fd5b604052823581526020928301359281019290925250919050565b600060208284031215610b2b578081fd5b5051919050565b60008151808452610b4a816020860160208601610caf565b601f01601f19169290920160200192915050565b60008251610b70818460208701610caf565b9190910192915050565b60008251610b8c818460208701610caf565b601760f91b920191825250600101919050565b60008251610bb1818460208701610caf565b600560fc1b920191825250600101919050565b60008251610bd6818460208701610caf565b604960f81b920191825250600101919050565b60008251610bfb818460208701610caf565b602360f81b920191825250600101919050565b602080825260009060c0830183820185845b6005811015610c4f57601f19878503018352610c3d848351610b32565b93509184019190840190600101610c20565b50919695505050505050565b6020815260006108916020830184610b32565b600080821280156001600160ff1b0384900385131615610c9057610c90610d1a565b600160ff1b8390038412811615610ca957610ca9610d1a565b50500190565b60005b83811015610cca578181015183820152602001610cb2565b83811115610cd9576000848401525b50505050565b6000600019821415610cf357610cf3610d1a565b5060010190565b600082610d1557634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfe68747470733a2f2f676973742e67697468756275736572636f6e74656e742e636f6d2f6e616c696e626861726477616a2f65363361343138336539616235626338373566346466363636343336366636662f7261772f333664366130316437616663373933646464373265633762303938303137326661393031303732332f54696e794d696e652e6a736f6ea2646970667358221220b6993444ff839d69a50963d95328d6f8eda282328b4b64fade53d0769f68685464736f6c6343000804003360806040523480156200001157600080fd5b506040516200134b3803806200134b833981016040819052620000349162000185565b604051806040016040528060088152602001672a34b73ca4b937b760c11b815250604051806040016040528060048152602001632a24a92760e11b81525082828281600390805190602001906200008d929190620000df565b508051620000a3906004906020840190620000df565b5050600580546001600160a01b039384166001600160a01b03199182161790915560068054979093169616959095179055506200021992505050565b828054620000ed90620001c3565b90600052602060002090601f0160209004810192826200011157600085556200015c565b82601f106200012c57805160ff19168380011785556200015c565b828001600101855582156200015c579182015b828111156200015c5782518255916020019190600101906200013f565b506200016a9291506200016e565b5090565b5b808211156200016a57600081556001016200016f565b6000806040838503121562000198578182fd5b8251620001a58162000200565b6020840151909250620001b88162000200565b809150509250929050565b600181811c90821680620001d857607f821691505b60208210811415620001fa57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b03811681146200021657600080fd5b50565b61112280620002296000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636a627842116100715780636a6278421461014157806370a082311461015657806395d89b411461017f578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101e6565b6040516100ce9190610fe4565b60405180910390f35b6100ea6100e5366004610f29565b610278565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610eee565b610290565b604051601281526020016100ce565b6100ea61013c366004610f29565b610599565b61015461014f366004610ea2565b6105d8565b005b6100fe610164366004610ea2565b6001600160a01b031660009081526020819052604090205490565b6100c1610647565b6100ea610195366004610f29565b610656565b6100ea6101a8366004610f29565b6106f3565b6100fe6101bb366004610ebc565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f5906110b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610221906110b1565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b6000336102868185856109ef565b5060019392505050565b600554604051631a2986e560e31b81526001600160a01b038086166004830152600092869286929091169063d14c37289060240160206040518083038186803b1580156102dc57600080fd5b505afa1580156102f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103149190610f52565b6103395760405162461bcd60e51b815260040161033090611037565b60405180910390fd5b600554604051631a2986e560e31b81526001600160a01b0383811660048301529091169063d14c37289060240160206040518083038186803b15801561037e57600080fd5b505afa158015610392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b69190610f52565b6103d25760405162461bcd60e51b815260040161033090611037565b60055460405163cb7869fd60e01b81526001600160a01b038481166004830152600192169063993c157990829063cb7869fd90602401604080518083038186803b15801561041f57600080fd5b505afa158015610433573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104579190610f72565b60055460405163cb7869fd60e01b81526001600160a01b0387811660048301529091169063cb7869fd90602401604080518083038186803b15801561049b57600080fd5b505afa1580156104af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d39190610f72565b6040518363ffffffff1660e01b81526004016104f0929190611067565b60206040518083038186803b15801561050857600080fd5b505afa15801561051c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105409190610fcc565b11156105845760405162461bcd60e51b8152602060048201526013602482015272283630bcb2b9399030b932903a37b7903330b960691b6044820152606401610330565b61058f868686610b13565b9695505050505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028690829086906105d390879061108d565b6109ef565b6006546001600160a01b031633146106325760405162461bcd60e51b815260206004820152601e60248201527f43616c6c6572206973206e6f742061206d696e6573686166742074696c6500006044820152606401610330565b61064481670de0b6b3a7640000610b39565b50565b6060600480546101f5906110b1565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106db5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610330565b6106e882868684036109ef565b506001949350505050565b600554604051631a2986e560e31b81523360048201819052600092909185916001600160a01b03169063d14c37289060240160206040518083038186803b15801561073d57600080fd5b505afa158015610751573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107759190610f52565b6107915760405162461bcd60e51b815260040161033090611037565b600554604051631a2986e560e31b81526001600160a01b0383811660048301529091169063d14c37289060240160206040518083038186803b1580156107d657600080fd5b505afa1580156107ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080e9190610f52565b61082a5760405162461bcd60e51b815260040161033090611037565b60055460405163cb7869fd60e01b81526001600160a01b038481166004830152600192169063993c157990829063cb7869fd90602401604080518083038186803b15801561087757600080fd5b505afa15801561088b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108af9190610f72565b60055460405163cb7869fd60e01b81526001600160a01b0387811660048301529091169063cb7869fd90602401604080518083038186803b1580156108f357600080fd5b505afa158015610907573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092b9190610f72565b6040518363ffffffff1660e01b8152600401610948929190611067565b60206040518083038186803b15801561096057600080fd5b505afa158015610974573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109989190610fcc565b11156109dc5760405162461bcd60e51b8152602060048201526013602482015272283630bcb2b9399030b932903a37b7903330b960691b6044820152606401610330565b6109e68585610c18565b95945050505050565b6001600160a01b038316610a515760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610330565b6001600160a01b038216610ab25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610330565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600033610b21858285610c26565b610b2c858585610cb8565b60019150505b9392505050565b6001600160a01b038216610b8f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610330565b8060026000828254610ba1919061108d565b90915550506001600160a01b03821660009081526020819052604081208054839290610bce90849061108d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600033610286818585610cb8565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610cb25781811015610ca55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610330565b610cb284848484036109ef565b50505050565b6001600160a01b038316610d1c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610330565b6001600160a01b038216610d7e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610330565b6001600160a01b03831660009081526020819052604090205481811015610df65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610330565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e2d90849061108d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e7991815260200190565b60405180910390a3610cb2565b80356001600160a01b0381168114610e9d57600080fd5b919050565b600060208284031215610eb3578081fd5b610b3282610e86565b60008060408385031215610ece578081fd5b610ed783610e86565b9150610ee560208401610e86565b90509250929050565b600080600060608486031215610f02578081fd5b610f0b84610e86565b9250610f1960208501610e86565b9150604084013590509250925092565b60008060408385031215610f3b578182fd5b610f4483610e86565b946020939093013593505050565b600060208284031215610f63578081fd5b81518015158114610b32578182fd5b600060408284031215610f83578081fd5b6040516040810181811067ffffffffffffffff82111715610fb257634e487b7160e01b83526041600452602483fd5b604052825181526020928301519281019290925250919050565b600060208284031215610fdd578081fd5b5051919050565b6000602080835283518082850152825b8181101561101057858101830151858201604001528201610ff4565b818111156110215783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601690820152752737ba1030b71032bc33b930b9b4b090383630bcb2b960511b604082015260600190565b825181526020808401518183015282516040830152820151606082015260808101610b32565b600082198211156110ac57634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806110c557607f821691505b602082108114156110e657634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a7afaf71ddeae86339451b4e266227de08262e95a899958e56d89a6e7f8bdf1064736f6c63430008040033";

export interface TinyMineLibraryAddresses {
  ["__$25da62efdcc799b068a78b56dfb6cf3909$__"]: string;
}
