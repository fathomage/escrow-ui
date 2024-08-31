'use client'

import Link from "next/link";

export default function App() {
  return (
    <>
      <h1>Welcome to the Web3 Escrow Service!</h1>
      <h2>Are you <Link href="/buyer">buying</Link> or <Link href="/seller">selling</Link>?</h2>
    </>
  )
}
