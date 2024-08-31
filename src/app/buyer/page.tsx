'use client'

import {Seller} from "@/components/seller/Seller";
import {CurrentUser} from "@/components/CurrentUser";
import {Buyer} from "@/components/buyer/Buyer";
import {Escrow} from "@/components/escrow/Escrow";

export default function BuyerPage() {
  return (
    <>
      <h1>The Buyer</h1>
      <CurrentUser />
      <hr />
      <Buyer />
      <hr />
      <h1>The Bank</h1>
      <Escrow />
    </>
  )
}
