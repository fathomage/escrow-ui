'use client'

import {Input} from "@nextui-org/react";
import {useWriteContract} from 'wagmi'
import {abi, CONTRACT_ADDRESS} from "@/constants";
import {parseEther} from "viem";
import {SubmitHandler, useForm} from "react-hook-form";

export const PurchaseItemForm = () => {
  const { writeContractAsync } = useWriteContract();

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
          <Input {...register("sellerAddress")} />
          <span>Item</span>
          <Input defaultValue="Jewelry" {...register("item")} />
          <span>Price</span>
          <Input defaultValue="1" {...register("price")} />
          <button type="submit" >Purchase</button>
        </form>
      </div>
    </>
  )
};
