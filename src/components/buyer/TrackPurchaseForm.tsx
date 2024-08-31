'use client'

import {Input} from "@nextui-org/react";
import {abi, CONTRACT_ADDRESS} from "@/constants";
import {SubmitHandler, useForm} from "react-hook-form";
import {readContract} from "@wagmi/core";
import {getConfig} from "@/wagmi";
import {useReadContract} from "wagmi";
import {useState} from "react";
import {TxStatus} from "@/types";

export const TrackPurchaseForm = () => {
  const [txStatus, setTxStatus] = useState<TxStatus>(TxStatus.DEFAULT);

  const checkTransactionStatus = async (txId: number) => {
    setTxStatus(await readContract(
        getConfig(),
        {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: "checkTransactionStatus",
          args: [
            txId
          ],
        }
    ) as TxStatus);
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
      await checkTransactionStatus(data.txId);
    } catch (error) {
      alert(`${error.message}`);
    }
    reset();
  };

  return (
    <>
      <div>
        <h2>Track Purchase</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Order ID</span>
          <Input {...register("txId")} />
          <button type="submit" >Track</button>
          <span hidden={!txStatus}> Status = {TxStatus[txStatus]}</span>
        </form>
      </div>
    </>
  )
};
