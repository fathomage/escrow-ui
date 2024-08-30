'use client'

import {PurchaseItemForm} from "@/components/buyer/PurchaseItemForm";
import {ReceivedItemForm} from "@/components/buyer/ReceivedItemForm";
import {TrackPurchaseForm} from "@/components/buyer/TrackPurchaseForm";
import {CancelPurchaseForm} from "@/components/buyer/CancelPurchaseForm";

export const Buyer = () => {
  return (
    <>
      <PurchaseItemForm />
      <TrackPurchaseForm />
      <ReceivedItemForm />
      <CancelPurchaseForm />
    </>
  )
};
