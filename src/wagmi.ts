import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { mainnet, sepolia, localhost } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export function getConfig() {
  return createConfig({
    chains: [
      // mainnet,
      // sepolia,
      localhost],
    connectors: [
      // injected(),
      // coinbaseWallet(),
      // walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      // [mainnet.id]: http(),
      // [sepolia.id]: http(),
      [localhost.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
