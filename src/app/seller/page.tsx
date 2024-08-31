'use client'

import {Seller} from "@/components/seller/Seller";
import {CurrentUser} from "@/components/CurrentUser";
import {Escrow} from "@/components/escrow/Escrow";

export default function SellerPage() {
  return (
    <>
      <h1>The Seller</h1>
      <CurrentUser />
      <hr />
      <Seller />
      <hr />
      <h1>The Bank</h1>
      <Escrow />
    </>
  )
}
