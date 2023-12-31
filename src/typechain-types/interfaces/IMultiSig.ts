/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export type TransactionStruct = {
  spender: AddressLike;
  amount: BigNumberish;
  approvals: BigNumberish;
  isActive: boolean;
};

export type TransactionStructOutput = [
  spender: string,
  amount: bigint,
  approvals: bigint,
  isActive: boolean
] & { spender: string; amount: bigint; approvals: bigint; isActive: boolean };

export interface IMultiSigInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ApproveTransaction"
      | "CreateTransaction"
      | "GetBalance"
      | "GetTransaction"
      | "ProcessTransaction"
      | "RevokeApproval"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "TransactionApproved"
      | "TransactionCreated"
      | "TransactionExecuted"
      | "TransactionRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ApproveTransaction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "CreateTransaction",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "GetBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "GetTransaction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ProcessTransaction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RevokeApproval",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ApproveTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CreateTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GetBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GetTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ProcessTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RevokeApproval",
    data: BytesLike
  ): Result;
}

export namespace TransactionApprovedEvent {
  export type InputTuple = [admin: AddressLike, txIndex: BigNumberish];
  export type OutputTuple = [admin: string, txIndex: bigint];
  export interface OutputObject {
    admin: string;
    txIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransactionCreatedEvent {
  export type InputTuple = [
    admin: AddressLike,
    txIndex: BigNumberish,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    admin: string,
    txIndex: bigint,
    to: string,
    amount: bigint
  ];
  export interface OutputObject {
    admin: string;
    txIndex: bigint;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransactionExecutedEvent {
  export type InputTuple = [admin: AddressLike, txIndex: BigNumberish];
  export type OutputTuple = [admin: string, txIndex: bigint];
  export interface OutputObject {
    admin: string;
    txIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransactionRevokedEvent {
  export type InputTuple = [admin: AddressLike, txIndex: BigNumberish];
  export type OutputTuple = [admin: string, txIndex: bigint];
  export interface OutputObject {
    admin: string;
    txIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IMultiSig extends BaseContract {
  connect(runner?: ContractRunner | null): IMultiSig;
  waitForDeployment(): Promise<this>;

  interface: IMultiSigInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ApproveTransaction: TypedContractMethod<
    [id: BigNumberish],
    [void],
    "nonpayable"
  >;

  CreateTransaction: TypedContractMethod<
    [_spender: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  GetBalance: TypedContractMethod<[_of: AddressLike], [bigint], "view">;

  GetTransaction: TypedContractMethod<
    [_id: BigNumberish],
    [TransactionStructOutput],
    "view"
  >;

  ProcessTransaction: TypedContractMethod<[], [void], "nonpayable">;

  RevokeApproval: TypedContractMethod<[id: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ApproveTransaction"
  ): TypedContractMethod<[id: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "CreateTransaction"
  ): TypedContractMethod<
    [_spender: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "GetBalance"
  ): TypedContractMethod<[_of: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "GetTransaction"
  ): TypedContractMethod<
    [_id: BigNumberish],
    [TransactionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "ProcessTransaction"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "RevokeApproval"
  ): TypedContractMethod<[id: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "TransactionApproved"
  ): TypedContractEvent<
    TransactionApprovedEvent.InputTuple,
    TransactionApprovedEvent.OutputTuple,
    TransactionApprovedEvent.OutputObject
  >;
  getEvent(
    key: "TransactionCreated"
  ): TypedContractEvent<
    TransactionCreatedEvent.InputTuple,
    TransactionCreatedEvent.OutputTuple,
    TransactionCreatedEvent.OutputObject
  >;
  getEvent(
    key: "TransactionExecuted"
  ): TypedContractEvent<
    TransactionExecutedEvent.InputTuple,
    TransactionExecutedEvent.OutputTuple,
    TransactionExecutedEvent.OutputObject
  >;
  getEvent(
    key: "TransactionRevoked"
  ): TypedContractEvent<
    TransactionRevokedEvent.InputTuple,
    TransactionRevokedEvent.OutputTuple,
    TransactionRevokedEvent.OutputObject
  >;

  filters: {
    "TransactionApproved(address,uint256)": TypedContractEvent<
      TransactionApprovedEvent.InputTuple,
      TransactionApprovedEvent.OutputTuple,
      TransactionApprovedEvent.OutputObject
    >;
    TransactionApproved: TypedContractEvent<
      TransactionApprovedEvent.InputTuple,
      TransactionApprovedEvent.OutputTuple,
      TransactionApprovedEvent.OutputObject
    >;

    "TransactionCreated(address,uint256,address,uint256)": TypedContractEvent<
      TransactionCreatedEvent.InputTuple,
      TransactionCreatedEvent.OutputTuple,
      TransactionCreatedEvent.OutputObject
    >;
    TransactionCreated: TypedContractEvent<
      TransactionCreatedEvent.InputTuple,
      TransactionCreatedEvent.OutputTuple,
      TransactionCreatedEvent.OutputObject
    >;

    "TransactionExecuted(address,uint256)": TypedContractEvent<
      TransactionExecutedEvent.InputTuple,
      TransactionExecutedEvent.OutputTuple,
      TransactionExecutedEvent.OutputObject
    >;
    TransactionExecuted: TypedContractEvent<
      TransactionExecutedEvent.InputTuple,
      TransactionExecutedEvent.OutputTuple,
      TransactionExecutedEvent.OutputObject
    >;

    "TransactionRevoked(address,uint256)": TypedContractEvent<
      TransactionRevokedEvent.InputTuple,
      TransactionRevokedEvent.OutputTuple,
      TransactionRevokedEvent.OutputObject
    >;
    TransactionRevoked: TypedContractEvent<
      TransactionRevokedEvent.InputTuple,
      TransactionRevokedEvent.OutputTuple,
      TransactionRevokedEvent.OutputObject
    >;
  };
}
