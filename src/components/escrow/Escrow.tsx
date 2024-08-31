'use client'

import {abi, CONTRACT_ADDRESS} from "@/constants";
import {formatEther} from "viem";
import {useState} from "react";
import {readContract} from "@wagmi/core";
import {getConfig} from "@/wagmi";
import {Input} from "@nextui-org/react";
import {TxStatus} from "@/types";
import {SubmitHandler, useForm} from "react-hook-form";

export const Escrow = () => {
  const [balance, setBalance] = useState<bigint>();
  const [activeTx, setActiveTx] = useState<number>();
  const [completedTx, setCompletedTx] = useState<number>();

  const refreshData = () => {
      setBalance(await readContract(getConfig(), {
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "totalInEscrow",
      }));
      setActiveTx(await readContract(getConfig(), {
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "numActiveTransactions",
      }));
      setCompletedTx(await readContract(getConfig(), {
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "numCompletedTransactions",
      }));
  };

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler = async (data) => {
    try {
      refreshData();
    } catch (error) {
      alert(`${error.message}`);
    }
    reset();
  };

  return (
    <>
      <div>
        <h2>Escrow</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" >Refresh data</button>
        </form>
      </div>
    </>
  )
};
