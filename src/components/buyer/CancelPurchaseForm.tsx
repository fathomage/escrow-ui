'use client'

import {Input} from "@nextui-org/react";
import {useWriteContract} from 'wagmi'
import {abi, CONTRACT_ADDRESS} from "@/constants";
import {SubmitHandler, useForm} from "react-hook-form";

export const CancelPurchaseForm = () => {
  const { writeContractAsync } = useWriteContract();

  const cancelPurchase = async (txId: number) => {
    await writeContractAsync(
        {
          abi,
          address: CONTRACT_ADDRESS,
          functionName: "cancelPurchase",
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
      await cancelPurchase(data.txId);
    } catch (error) {
      alert(`${error.message}`);
    }
    reset();
  };

  return (
    <>
      <div>
        <h2>Cancel Purchase</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Order ID</span>
          <Input {...register("txId")} />
          <button type="submit" >Cancel</button>
        </form>
      </div>
    </>
  )
};
