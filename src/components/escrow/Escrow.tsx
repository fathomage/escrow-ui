'use client'

import {abi, CONTRACT_ADDRESS} from "@/constants";
import {formatEther} from "viem";
import {useState} from "react";
import {readContract} from "@wagmi/core";
import {getConfig} from "@/wagmi";

export const Escrow = () => {
  const [balance, setBalance] = useState<bigint>(0n);
  const [activeTx, setActiveTx] = useState<number>(0);
  const [completedTx, setCompletedTx] = useState<number>(0);

  const getTotalInEscrow: Promise<bigint> = readContract(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "totalInEscrow",
  });

  const getActiveTx: Promise<number> = readContract(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "numActiveTransactions",
  });

  const getCompletedTx: Promise<number> = readContract(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "numCompletedTransactions",
  });

  const refreshData = async () => {
    try {
      setBalance(await getTotalInEscrow);
      setActiveTx(await getActiveTx);
      setCompletedTx(await getCompletedTx);
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <>
      <div>
        <h2>Escrow</h2>
        <table>
          <tbody>
            <tr>
              <th>Active transactions</th>
              <td>{String(activeTx)}</td>
            </tr>
            <tr>
              <th>Completed transactions</th>
              <td>{String(completedTx)}</td>
            </tr>
            <tr>
              <th>Total in escrow</th>
              <td>{formatEther(balance)} ETH</td>
            </tr>
          </tbody>
        </table>
        <button onClick={refreshData} className="border p-4 rounded-3xl">
          Refresh data
        </button>
      </div>
    </>
  )
};
