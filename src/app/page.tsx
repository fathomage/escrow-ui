'use client'

import {Buyer} from "@/components/buyer/buyer";
import {Seller} from "@/components/seller/seller";
import {Escrow} from "@/components/escrow/escrow";
import {CurrentUser} from "@/components/CurrentUser";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <h1>Current User</h1>
        <CurrentUser />
        <hr />

        <h1>The Bank</h1>
        <Escrow />
        <hr />

        <h1>The Buyer</h1>
        <Buyer />
        <hr />

        <h1>The Seller</h1>
        <Seller />
      </div>
    </>
  )
}

export default App
