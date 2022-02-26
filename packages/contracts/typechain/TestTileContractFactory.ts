/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestTileContract } from "./TestTileContract";

export class TestTileContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestTileContract> {
    return super.deploy(overrides || {}) as Promise<TestTileContract>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestTileContract {
    return super.attach(address) as TestTileContract;
  }
  connect(signer: Signer): TestTileContractFactory {
    return super.connect(signer) as TestTileContractFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTileContract {
    return new Contract(address, _abi, signerOrProvider) as TestTileContract;
  }
}

const _abi = [
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emoji",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "extendedAbi",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "logger",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "inp",
        type: "string",
      },
    ],
    name: "test",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600560808190526468656c6c6f60d81b60a09081526100269160009190610039565b5034801561003357600080fd5b5061010d565b828054610045906100d2565b90600052602060002090601f01602090048101928261006757600085556100ad565b82601f1061008057805160ff19168380011785556100ad565b828001600101855582156100ad579182015b828111156100ad578251825591602001919060010190610092565b506100b99291506100bd565b5090565b5b808211156100b957600081556001016100be565b600181811c908216806100e657607f821691505b6020821081141561010757634e487b7160e01b600052602260045260246000fd5b50919050565b6105d78061011c6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde03146100675780630e8560bf1461009e5780637284e416146100a6578063aba11c46146100d5578063f24ccbfe146100f5578063f9fbd554146100fd575b600080fd5b604080518082019091526009815268546573742054696c6560b81b60208201525b604051610095919061047c565b60405180910390f35b610088610112565b60408051808201909152601381527254686973206973206120746573742074696c6560681b6020820152610088565b604080518082019091526004815263f09f8c8360e01b6020820152610088565b610088610132565b61011061010b366004610387565b610276565b005b60606040518060c00160405280608c8152602001610516608c9139905090565b60606101e6604051806040016040528060068152602001653bb7b936321d60d11b81525060008054610163906104c4565b80601f016020809104026020016040519081016040528092919081815260200182805461018f906104c4565b80156101dc5780601f106101b1576101008083540402835291602001916101dc565b820191906000526020600020905b8154815290600101906020018083116101bf57829003601f168201915b505050505061028d565b600080546101f3906104c4565b80601f016020809104026020016040519081016040528092919081815260200182805461021f906104c4565b801561026c5780601f106102415761010080835404028352916020019161026c565b820191906000526020600020905b81548152906001019060200180831161024f57829003601f168201915b5050505050905090565b80516102899060009060208401906102ee565b5050565b61028982826040516024016102a3929190610496565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b17905280516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546102fa906104c4565b90600052602060002090601f01602090048101928261031c5760008555610362565b82601f1061033557805160ff1916838001178555610362565b82800160010185558215610362579182015b82811115610362578251825591602001919060010190610347565b5061036e929150610372565b5090565b5b8082111561036e5760008155600101610373565b600060208284031215610398578081fd5b813567ffffffffffffffff808211156103af578283fd5b818401915084601f8301126103c2578283fd5b8135818111156103d4576103d46104ff565b604051601f8201601f19908116603f011681019083821181831017156103fc576103fc6104ff565b81604052828152876020848701011115610414578586fd5b826020860160208301379182016020019490945295945050505050565b60008151808452815b818110156104565760208185018101518683018201520161043a565b818111156104675782602083870101525b50601f01601f19169290920160200192915050565b60208152600061048f6020830184610431565b9392505050565b6040815260006104a96040830185610431565b82810360208401526104bb8185610431565b95945050505050565b600181811c908216806104d857607f821691505b602082108114156104f957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfe68747470733a2f2f676973742e67697468756275736572636f6e74656e742e636f6d2f6e616c696e626861726477616a2f63316266356162643130346164633938653530633632333531633263613636382f7261772f363834366634376237303361343065343239633066316433626632366432383030376133353562342f746573745f6162692e6a736f6ea2646970667358221220d4e642bebbbf67b5ce7cea36818d07b7721ccc0eb5bd2d6afd18d6718ddbafb864736f6c63430008040033";
