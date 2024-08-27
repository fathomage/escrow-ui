'use client'

import {abi, CONTRACT_ADDRESS} from "@/constants";
import {formatEther} from "viem";
import {useState} from "react";
import {readContract} from "@wagmi/core";
import {getConfig} from "@/wagmi";

export const Escrow = () => {
  const [balance, setBalance] = useState<bigint>(0n);

  const getTotalInEscrow: Promise<bigint> = readContract(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "totalInEscrow",
  });

  const checkBalance = async () => {
    const result = await getTotalInEscrow;
    setBalance(result);
  };

  return (
    <>
      <div>
        <h2>Total in Escrow</h2>
        <button onClick={checkBalance} className="border p-4 rounded-3xl">
          Check Total in Escrow
        </button>
        <br />
        balance: {formatEther(balance)}
      </div>
    </>
  )
};
