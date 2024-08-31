import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { type ReactNode } from 'react'
import { cookieToInitialState } from 'wagmi'

import { getConfig } from '../wagmi'
import { Providers } from './providers'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Escrow App',
  description: 'Web3 Example Application',
}

export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie'),
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialState={initialState}>{props.children}</Providers>
        <footer>
          <br/><br/>
          <hr />
          View the source code for this example:&nbsp;
          <Link className="mx-1" target="_blank" href="https://github.com/fathomage/escrow-ui">Webapp</Link>&nbsp;
          <Link className="mx-1" target="_blank" href="https://github.com/fathomage/escrow-contract">Smart Contract</Link>
        </footer>
      </body>
    </html>
  )
}
