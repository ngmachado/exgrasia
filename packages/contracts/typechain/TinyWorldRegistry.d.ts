/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TinyWorldRegistryInterface extends ethers.utils.Interface {
  functions: {
    "appendWhitelist(address[])": FunctionFragment;
    "dummySetProxyAddress(address[],address)": FunctionFragment;
    "getPlayerInfos()": FunctionFragment;
    "getProxyAddress(address)": FunctionFragment;
    "getRealAddress(address)": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "proxyAddressToRealAddress(address)": FunctionFragment;
    "realAddressToProxyAddress(address)": FunctionFragment;
    "setProxyAddress(address)": FunctionFragment;
    "whitelistAddresses(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "appendWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "dummySetProxyAddress",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayerInfos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRealAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyAddressToRealAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "realAddressToProxyAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProxyAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistAddresses",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "appendWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dummySetProxyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlayerInfos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRealAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyAddressToRealAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realAddressToProxyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProxyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistAddresses",
    data: BytesLike
  ): Result;

  events: {};
}

export class TinyWorldRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TinyWorldRegistryInterface;

  functions: {
    appendWhitelist(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "appendWhitelist(address[])"(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    dummySetProxyAddress(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "dummySetProxyAddress(address[],address)"(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getPlayerInfos(overrides?: CallOverrides): Promise<{
      0: string[];
      1: string[];
    }>;

    "getPlayerInfos()"(overrides?: CallOverrides): Promise<{
      0: string[];
      1: string[];
    }>;

    getProxyAddress(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getProxyAddress(address)"(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getRealAddress(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getRealAddress(address)"(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isWhitelisted(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    proxyAddressToRealAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "proxyAddressToRealAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    realAddressToProxyAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "realAddressToProxyAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setProxyAddress(
      _proxyAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setProxyAddress(address)"(
      _proxyAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    whitelistAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "whitelistAddresses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  appendWhitelist(
    _addresses: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "appendWhitelist(address[])"(
    _addresses: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  dummySetProxyAddress(
    realAddresses: string[],
    proxyAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "dummySetProxyAddress(address[],address)"(
    realAddresses: string[],
    proxyAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getPlayerInfos(overrides?: CallOverrides): Promise<{
    0: string[];
    1: string[];
  }>;

  "getPlayerInfos()"(overrides?: CallOverrides): Promise<{
    0: string[];
    1: string[];
  }>;

  getProxyAddress(
    _realAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getProxyAddress(address)"(
    _realAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRealAddress(
    _proxyAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRealAddress(address)"(
    _proxyAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  isWhitelisted(_address: string, overrides?: CallOverrides): Promise<boolean>;

  "isWhitelisted(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  proxyAddressToRealAddress(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "proxyAddressToRealAddress(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  realAddressToProxyAddress(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "realAddressToProxyAddress(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setProxyAddress(
    _proxyAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setProxyAddress(address)"(
    _proxyAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  whitelistAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "whitelistAddresses(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    appendWhitelist(
      _addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "appendWhitelist(address[])"(
      _addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    dummySetProxyAddress(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "dummySetProxyAddress(address[],address)"(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getPlayerInfos(overrides?: CallOverrides): Promise<{
      0: string[];
      1: string[];
    }>;

    "getPlayerInfos()"(overrides?: CallOverrides): Promise<{
      0: string[];
      1: string[];
    }>;

    getProxyAddress(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getProxyAddress(address)"(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRealAddress(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRealAddress(address)"(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isWhitelisted(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    proxyAddressToRealAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "proxyAddressToRealAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    realAddressToProxyAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "realAddressToProxyAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setProxyAddress(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setProxyAddress(address)"(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "whitelistAddresses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    appendWhitelist(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "appendWhitelist(address[])"(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    dummySetProxyAddress(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "dummySetProxyAddress(address[],address)"(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getPlayerInfos(overrides?: CallOverrides): Promise<BigNumber>;

    "getPlayerInfos()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProxyAddress(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProxyAddress(address)"(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRealAddress(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRealAddress(address)"(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhitelisted(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proxyAddressToRealAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proxyAddressToRealAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    realAddressToProxyAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "realAddressToProxyAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setProxyAddress(
      _proxyAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setProxyAddress(address)"(
      _proxyAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    whitelistAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "whitelistAddresses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    appendWhitelist(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "appendWhitelist(address[])"(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    dummySetProxyAddress(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "dummySetProxyAddress(address[],address)"(
      realAddresses: string[],
      proxyAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getPlayerInfos(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPlayerInfos()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProxyAddress(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProxyAddress(address)"(
      _realAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRealAddress(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRealAddress(address)"(
      _proxyAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhitelisted(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxyAddressToRealAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proxyAddressToRealAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    realAddressToProxyAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "realAddressToProxyAddress(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setProxyAddress(
      _proxyAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setProxyAddress(address)"(
      _proxyAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    whitelistAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "whitelistAddresses(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
