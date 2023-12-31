/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "MyContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyContract__factory>;
    getContractFactory(
      name: "S_M",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.S_M__factory>;
    getContractFactory(
      name: "ETHToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ETHToken__factory>;
    getContractFactory(
      name: "IMultiSig",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMultiSig__factory>;
    getContractFactory(
      name: "IMultiSigWura",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMultiSigWura__factory>;
    getContractFactory(
      name: "ISwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapper__factory>;
    getContractFactory(
      name: "ITOK",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITOK__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "Multisig",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multisig__factory>;
    getContractFactory(
      name: "MultiSigMain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiSigMain__factory>;
    getContractFactory(
      name: "MultiSigFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiSigFactory__factory>;
    getContractFactory(
      name: "MultiSig",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiSig__factory>;
    getContractFactory(
      name: "Swapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Swapper__factory>;
    getContractFactory(
      name: "USDCToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDCToken__factory>;

    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "MyContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyContract>;
    getContractAt(
      name: "S_M",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.S_M>;
    getContractAt(
      name: "ETHToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ETHToken>;
    getContractAt(
      name: "IMultiSig",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IMultiSig>;
    getContractAt(
      name: "IMultiSigWura",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IMultiSigWura>;
    getContractAt(
      name: "ISwapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapper>;
    getContractAt(
      name: "ITOK",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ITOK>;
    getContractAt(
      name: "Lock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "Multisig",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Multisig>;
    getContractAt(
      name: "MultiSigMain",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiSigMain>;
    getContractAt(
      name: "MultiSigFactory",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiSigFactory>;
    getContractAt(
      name: "MultiSig",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiSig>;
    getContractAt(
      name: "Swapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Swapper>;
    getContractAt(
      name: "USDCToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.USDCToken>;

    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "MyContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyContract>;
    deployContract(
      name: "S_M",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.S_M>;
    deployContract(
      name: "ETHToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ETHToken>;
    deployContract(
      name: "IMultiSig",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IMultiSig>;
    deployContract(
      name: "IMultiSigWura",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IMultiSigWura>;
    deployContract(
      name: "ISwapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISwapper>;
    deployContract(
      name: "ITOK",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ITOK>;
    deployContract(
      name: "Lock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "Multisig",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Multisig>;
    deployContract(
      name: "MultiSigMain",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSigMain>;
    deployContract(
      name: "MultiSigFactory",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSigFactory>;
    deployContract(
      name: "MultiSig",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSig>;
    deployContract(
      name: "Swapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Swapper>;
    deployContract(
      name: "USDCToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.USDCToken>;

    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "MyContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyContract>;
    deployContract(
      name: "S_M",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.S_M>;
    deployContract(
      name: "ETHToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ETHToken>;
    deployContract(
      name: "IMultiSig",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IMultiSig>;
    deployContract(
      name: "IMultiSigWura",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IMultiSigWura>;
    deployContract(
      name: "ISwapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISwapper>;
    deployContract(
      name: "ITOK",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ITOK>;
    deployContract(
      name: "Lock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "Multisig",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Multisig>;
    deployContract(
      name: "MultiSigMain",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSigMain>;
    deployContract(
      name: "MultiSigFactory",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSigFactory>;
    deployContract(
      name: "MultiSig",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSig>;
    deployContract(
      name: "Swapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Swapper>;
    deployContract(
      name: "USDCToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.USDCToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
