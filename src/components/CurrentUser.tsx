'use client'

import {useAccount, useConnect, useDisconnect} from 'wagmi'
import {CheckBalance} from "@/components/seller/CheckBalance";

export const CurrentUser = () => {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>
        <h2>Wallet</h2>
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
      </div>
      <div>
        <h2>User</h2>
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
      </div>
    </>
  )
};
