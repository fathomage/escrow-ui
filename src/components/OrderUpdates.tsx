'use client'

import {abi, CONTRACT_ADDRESS} from "@/constants";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {watchContractEvent} from "@wagmi/core";
import {getConfig} from "@/wagmi";
import {formatEther} from "viem";

export const OrderUpdates = () => {
  const [event, setEvent] = useState<Event>();

  watchContractEvent(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    eventName: 'ItemPurchased',
    onLogs(logs) {
      let event = logs[0].args as Event;
      event.type = 'Item Purchased';
      setEvent(event);
    },
  });

  watchContractEvent(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    eventName: 'SaleCompleted',
    onLogs(logs) {
      let event = logs[0].args as Event;
      event.type = 'Sale Completed';
      setEvent(event);
    },
  });

  watchContractEvent(getConfig(), {
    abi,
    address: CONTRACT_ADDRESS,
    eventName: 'PurchaseCanceled',
    onLogs(logs) {
      let event = logs[0].args as Event;
      event.type = 'Purchase Canceled';
      setEvent(event);
    },
  });

  return (
    <>
      <div>
        <h2>Order Updates</h2>
          <div hidden={!event}>
            <table>
              <tbody>
              <tr>
                <th>Event</th>
                <td>{event?.type}</td>
              </tr>
              <tr>
                <th>Order ID</th>
                <td>{String(event?.txId)}</td>
              </tr>
              <tr>
                <th>Item</th>
                <td>{event?.item}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{event ? formatEther(event.price) : ''} ETH</td>
              </tr>
              <tr>
                <th>Buyer</th>
                <td>{event?.buyer}</td>
              </tr>
              <tr>
                <th>Seller</th>
                <td>{event?.seller}</td>
              </tr>
              </tbody>
            </table>
          </div>
      </div>
    </>
  )
};
