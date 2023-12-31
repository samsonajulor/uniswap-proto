/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../common";
import type { Lock, LockInterface } from "../../contracts/Lock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "getBalanceAndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610611380380610611833981810160405281019061002591906100f0565b804210610067576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161005e906101a0565b60405180910390fd5b8060008190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101c0565b600080fd5b6000819050919050565b6100cd816100ba565b81146100d857600080fd5b50565b6000815190506100ea816100c4565b92915050565b600060208284031215610106576101056100b5565b5b6000610114848285016100db565b91505092915050565b600082825260208201905092915050565b7f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460008201527f7572650000000000000000000000000000000000000000000000000000000000602082015250565b600061018a60238361011d565b91506101958261012e565b604082019050919050565b600060208201905081810360008301526101b98161017d565b9050919050565b610442806101cf6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063251c1aa3146100515780633ccfd60b1461006f5780637b5deafd146100795780638da5cb5b14610098575b600080fd5b6100596100b6565b6040516100669190610283565b60405180910390f35b6100776100bc565b005b610081610235565b60405161008f92919061029e565b60405180910390f35b6100a0610244565b6040516100ad9190610308565b60405180910390f35b60005481565b600054421015610101576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100f890610380565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610191576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610188906103ec565b60405180910390fd5b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9347426040516101c292919061029e565b60405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610232573d6000803e3d6000fd5b50565b60008047600054915091509091565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b61027d8161026a565b82525050565b60006020820190506102986000830184610274565b92915050565b60006040820190506102b36000830185610274565b6102c06020830184610274565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102f2826102c7565b9050919050565b610302816102e7565b82525050565b600060208201905061031d60008301846102f9565b92915050565b600082825260208201905092915050565b7f596f752063616e27742077697468647261772079657400000000000000000000600082015250565b600061036a601683610323565b915061037582610334565b602082019050919050565b600060208201905081810360008301526103998161035d565b9050919050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b60006103d6601483610323565b91506103e1826103a0565b602082019050919050565b60006020820190508181036000830152610405816103c9565b905091905056fea2646970667358221220593e0ddde2397f75b0d064952e65e3262c3e3731c95d9d279b7126d4665e2f4164736f6c634300080d0033";

type LockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lock__factory extends ContractFactory {
  constructor(...args: LockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_unlockTime, overrides || {});
  }
  override deploy(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_unlockTime, overrides || {}) as Promise<
      Lock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lock__factory {
    return super.connect(runner) as Lock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new Interface(_abi) as LockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lock {
    return new Contract(address, _abi, runner) as unknown as Lock;
  }
}
