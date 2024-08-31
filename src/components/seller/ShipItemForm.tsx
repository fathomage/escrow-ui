'use client'

import {Input} from "@nextui-org/react";
import {useWriteContract} from 'wagmi'
import {abi, CONTRACT_ADDRESS} from "@/constants";
import {SubmitHandler, useForm} from "react-hook-form";

export const ShipItemForm = () => {
  const { writeContractAsync } = useWriteContract();

  const shipItem = async (txId : number) => {
    await writeContractAsync(
        {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: "shipItem",
          args: [
            txId
          ]
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
      await shipItem(data.txId);
    } catch (error) {
      alert(`${error.message}`);
    }
    reset();
  };

  return (
    <>
      <div>
        <h2>Ship Item</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Order ID</span>
          <Input {...register("txId")} />
          <button type="submit" >Ship</button>
        </form>
      </div>
    </>
  )
};
