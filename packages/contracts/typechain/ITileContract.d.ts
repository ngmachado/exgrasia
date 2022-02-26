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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITileContractInterface extends ethers.utils.Interface {
  functions: {
    "description()": FunctionFragment;
    "emoji()": FunctionFragment;
    "extendedAbi()": FunctionFragment;
    "name()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "emoji", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "extendedAbi",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "emoji", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "extendedAbi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;

  events: {};
}

export class ITileContract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITileContractInterface;

  functions: {
    description(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "description()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    emoji(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "emoji()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    extendedAbi(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "extendedAbi()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    name(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "name()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  description(overrides?: CallOverrides): Promise<string>;

  "description()"(overrides?: CallOverrides): Promise<string>;

  emoji(overrides?: CallOverrides): Promise<string>;

  "emoji()"(overrides?: CallOverrides): Promise<string>;

  extendedAbi(overrides?: CallOverrides): Promise<string>;

  "extendedAbi()"(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    description(overrides?: CallOverrides): Promise<string>;

    "description()"(overrides?: CallOverrides): Promise<string>;

    emoji(overrides?: CallOverrides): Promise<string>;

    "emoji()"(overrides?: CallOverrides): Promise<string>;

    extendedAbi(overrides?: CallOverrides): Promise<string>;

    "extendedAbi()"(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    description(overrides?: CallOverrides): Promise<BigNumber>;

    "description()"(overrides?: CallOverrides): Promise<BigNumber>;

    emoji(overrides?: CallOverrides): Promise<BigNumber>;

    "emoji()"(overrides?: CallOverrides): Promise<BigNumber>;

    extendedAbi(overrides?: CallOverrides): Promise<BigNumber>;

    "extendedAbi()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "description()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emoji(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "emoji()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    extendedAbi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "extendedAbi()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
