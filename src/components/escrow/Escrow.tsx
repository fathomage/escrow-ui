'use client'

import {abi, CONTRACT_ADDRESS} from "@/constants";
import {formatEther} from "viem";
import {useState} from "react";
import {readContract} from "@wagmi/core";
import {getConfig} from "@/wagmi";

export const Escrow = () => {
  const [balance, setBalance] = useState<bigint>();
  const [activeTx, setActiveTx] = useState<number>();
  const [completedTx, setCompletedTx] = useState<number>();

  const refreshData = async () => {
    try {
      setBalance(await readContract(getConfig(), {
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "totalInEscrow",
      }));
      setActiveTx(await readContract(getConfig(), {
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "numActiveTransactions",
      });
      setCompletedTx(await readContract(getConfig(), {
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "numCompletedTransactions",
      });
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
              <td>{balance ? formatEther(balance) : ''} ETH</td>
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
