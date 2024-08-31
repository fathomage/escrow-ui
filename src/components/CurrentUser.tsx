'use client'

import {useAccount, useConnect, useDisconnect} from 'wagmi'
import {CheckBalance} from "@/components/seller/CheckBalance";

export const CurrentUser = () => {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <b>Wallet </b>
      <span>
        {connectors.map((connector) => (
            <button
                key={connector.uid}
                onClick={() => connect({ connector })}
                type="button"
            >
              {connector.name}
            </button>
        ))}
        <div>{error?.message}</div>
      </span>
      <span>
        <table>
          <tbody>
            {account.addresses?.map((addr) => (
                <tr key={addr}>
                  <th>Address</th>
                  <td>{addr}</td>
                  <td>
                    <CheckBalance _address={addr} />
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </span>
    </>
  )
};
