export enum TxStatus {
  DEFAULT,
  PURCHASED,
  SHIPPED,
  RECEIVED,
  CANCELED
};

export interface Event {
  type: string;
  txId: number;
  buyer: string;
  seller: string;
  item: string;
  price: bigint;
};
