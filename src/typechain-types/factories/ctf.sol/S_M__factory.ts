/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { S_M, S_MInterface } from "../../ctf.sol/S_M";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_magicno",
        type: "uint16",
      },
      {
        internalType: "string",
        name: "_just_a_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_secret_missive",
        type: "string",
      },
      {
        internalType: "string",
        name: "_x_",
        type: "string",
      },
    ],
    name: "open_entrance_door",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class S_M__factory {
  static readonly abi = _abi;
  static createInterface(): S_MInterface {
    return new Interface(_abi) as S_MInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): S_M {
    return new Contract(address, _abi, runner) as unknown as S_M;
  }
}
