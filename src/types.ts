export enum TxStatus {
  DEFAULT,
  PURCHASED,
  SHIPPED,
  RECEIVED,
  CANCELED
};

export interface ItemPurchasedEvent {
  txId: number;
  buyer: string;
  seller: string;
  item: string;
  price: bigint;
};

export interface SaleCompletedEvent {
  txId: number;
  buyer: string;
  seller: string;
  item: string;
  price: bigint;
};

