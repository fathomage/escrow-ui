'use client'

import {Input} from "@nextui-org/react";
import {useWriteContract} from 'wagmi'
import {abi, CONTRACT_ADDRESS} from "@/constants";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {ItemPurchasedEvent, SaleCompletedEvent} from "@/types";
import {watchContractEvent} from "@wagmi/core";
import {getConfig} from "@/wagmi";
import {formatEther} from "viem";

export const ReceivedItemForm = () => {
  const { writeContractAsync } = useWriteContract();
  const [event, setEvent] = useState<SaleCompletedEvent>();

  watchContractEvent(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    eventName: 'SaleCompleted',
    onLogs(logs) {
      setEvent(logs[0].args as SaleCompletedEvent);
    },
  });

  const itemReceived = async (txId: number) => {
    await writeContractAsync(
        {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: "itemReceived",
          args: [
            txId
          ],
        }
    );
  };

  type FormInputs = {
    txId: number;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await itemReceived(data.txId);
    } catch (error) {
      alert(`${error.message}`);
    }
    reset();
  };

  return (
    <>
      <div>
        <h2>Item Received</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Order ID</span>
          <Input {...register("txId")} />
          <button type="submit" >Received</button>
          <div hidden={!event}>Order Completed: ID = {String(event?.txId)}, Item = {event?.item}, Price = {event ? formatEther(event.price) : ''} ETH, Buyer = {event?.buyer}</div>
        </form>
      </div>
    </>
  )
};
