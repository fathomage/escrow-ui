'use client'

import {Input} from "@nextui-org/react";
import {useWriteContract} from 'wagmi'
import {abi, CONTRACT_ADDRESS, SELLER_ADDRESS} from "@/constants";
import {formatEther, parseEther} from "viem";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {ItemPurchasedEvent} from "@/types";
import {watchContractEvent} from "@wagmi/core";
import {getConfig} from "@/wagmi";

export const PurchaseItemForm = () => {
  const { writeContractAsync } = useWriteContract();
  const [event, setEvent] = useState<ItemPurchasedEvent>();

  watchContractEvent(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    eventName: 'ItemPurchased',
    onLogs(logs) {
      setEvent(logs[0].args as ItemPurchasedEvent);
    },
  });

  const purchaseItem = async (sellerAddress: string, item: string, price: bigint) => {
    await writeContractAsync(
        {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: "purchaseItem",
          args: [
            sellerAddress,
            item
          ],
          value: price
        }
    );
  };

  type FormInputs = {
    sellerAddress: string;
    item: string;
    price: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await purchaseItem(data.sellerAddress, data.item, parseEther(data.price));
    } catch (error) {
      alert(`${error.message}`);
    }
    reset();
  };

  return (
    <>
      <div>
        <h2>Purchase Item</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Seller's address</span>
          <Input defaultValue={SELLER_ADDRESS} {...register("sellerAddress")} />
          <span>Item</span>
          <Input defaultValue="Baseball bat" {...register("item")} />
          <span>Price</span>
          <Input defaultValue="0.01" {...register("price")} />
          <button type="submit" >Purchase</button>
          <div hidden={!event}>Purchase Order: ID = {String(event?.txId)}, Item = {event?.item}, Price = {event ? formatEther(event.price) : ''} ETH, Seller = {event?.seller}</div>
        </form>
      </div>
    </>
  )
};
