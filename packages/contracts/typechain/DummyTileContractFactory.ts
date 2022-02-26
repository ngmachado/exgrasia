/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DummyTileContract } from "./DummyTileContract";

export class DummyTileContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DummyTileContract> {
    return super.deploy(overrides || {}) as Promise<DummyTileContract>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyTileContract {
    return super.attach(address) as DummyTileContract;
  }
  connect(signer: Signer): DummyTileContractFactory {
    return super.connect(signer) as DummyTileContractFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyTileContract {
    return new Contract(address, _abi, signerOrProvider) as DummyTileContract;
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610180806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306fdde03146100515780630e8560bf146100885780637284e416146100a8578063aba11c46146100d7575b600080fd5b604080518082019091526009815268546573742054696c6560b81b60208201525b60405161007f91906100f7565b60405180910390f35b6040805180820190915260048152636970667360e01b6020820152610072565b60408051808201909152601381527254686973206973206120746573742074696c6560681b6020820152610072565b604080518082019091526004815263f09f8c8360e01b6020820152610072565b6000602080835283518082850152825b8181101561012357858101830151858201604001528201610107565b818111156101345783604083870101525b50601f01601f191692909201604001939250505056fea264697066735822122054bab5dfa4b29874971be3e98053a160325c89b4d507bd891be07f82b0fed02964736f6c63430008040033";
