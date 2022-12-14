import { Web3Provider } from '@ethersproject/providers'

import { UseWalletProvider } from 'lib/wallet'
import type { FCC } from 'app/types'

const getLibrary = (provider?: any) => new Web3Provider(provider)
export const useUseWalletService = () => {
  return {
    getLibrary,
    connectors: {},
    autoConnect: true,
    pollBalanceInterval: 2000,
    pollBlockNumberInterval: 5000,
  }
}

export const Provider: FCC = (props) => {
  const useWallet = useUseWalletService()
  return <UseWalletProvider {...useWallet}>{props.children}</UseWalletProvider>
}

export default Provider
