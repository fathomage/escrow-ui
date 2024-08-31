'use client'

import {PurchaseItemForm} from "@/components/buyer/PurchaseItemForm";
import {ReceivedItemForm} from "@/components/buyer/ReceivedItemForm";
import {TrackPurchaseForm} from "@/components/buyer/TrackPurchaseForm";
import {CancelPurchaseForm} from "@/components/buyer/CancelPurchaseForm";
import {OrderUpdates} from "@/components/OrderUpdates";

export const Buyer = () => {
  return (
    <>
      <OrderUpdates />
      <PurchaseItemForm />
      <ReceivedItemForm />
      <TrackPurchaseForm />
      <CancelPurchaseForm />
    </>
  )
};
