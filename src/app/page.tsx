'use client'

import {Buyer} from "@/components/buyer";
import {Seller} from "@/components/seller";
import {Escrow} from "@/components/escrow";
import {User} from "@/components/user";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <User className="flex-auto" />
        <Escrow className="flex-auto" />
        <Buyer className="flex-auto" />
        <Seller className="flex-auto" />
      </div>
    </>
  )
}

export default App
