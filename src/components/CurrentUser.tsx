'use client'

import { Input } from "@nextui-org/react";
import {useAccount, useConnect, useDisconnect, useWriteContract} from 'wagmi'
import {readContract} from "@wagmi/core";
import {getConfig} from "@/wagmi";
import {useState} from "react";
import {abi, CONTRACT_ADDRESS, SELLER_ADDRESS} from "@/constants";
import {formatEther, parseEther} from "viem";
import { SubmitHandler, useForm } from "react-hook-form";
import {purchaseItem} from "@/services/EscrowContract";
import {Buyer} from "@/components/buyer/buyer";
import {Seller} from "@/components/seller/seller";
import {Escrow} from "@/components/escrow/escrow";

export const CurrentUser = () => {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
};
