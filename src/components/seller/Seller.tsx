'use client'

import {ShipItemForm} from "@/components/seller/ShipItemForm";
import {OrderUpdates} from "@/components/OrderUpdates";

export const Seller = () => {
  return (
    <>
      <OrderUpdates />
      <ShipItemForm />
    </>
  )
};
