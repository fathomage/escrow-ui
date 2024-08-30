'use client'

import {formatEther} from "viem";
import {useState} from "react";
import {getBalance} from "@wagmi/core";
import {getConfig} from "@/wagmi";

export const CheckBalance = ({_address}: string) => {
  const [balance, setBalance] = useState<bigint>();

  const refreshData = async () => {
    try {
      const result = await getBalance(getConfig(), {
        address: _address,
      });
      setBalance(result.value);
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <>
      <div>
        <button onClick={refreshData} className="border p-4 rounded-3xl">
          Check balance
        </button>
        <span hidden={!balance}> Balance = {balance ? formatEther(balance) : ''} ETH</span>
      </div>
    </>
  )
};
