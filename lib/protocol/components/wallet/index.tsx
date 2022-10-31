import type { FCC } from 'app/types'
import { useMemo } from 'react'

import { createContext } from 'app/utils/createContext'
import { useWalletBase } from 'lib/wallet'

import UseWalletProvider from './UseWallet/Provider'

import { useChainDialog } from './modules/chain-dialog'
import { useConnectDialog } from './modules/connect-dialog'

const useWalletService = () => {
  const chainDialog = useChainDialog()
  const connectDialog = useConnectDialog()
  const wallet = useWalletBase()

  const { account, network } = wallet

  const networkAccount = useMemo(() => (!network ? null : account), [account, network])

  return { ...wallet, networkAccount, connectDialog, chainDialog }
}

export const {
  Context,
  Provider: WalletProvider,
  createUseContext: createWalletContext,
} = createContext(useWalletService)

export const Provider: FCC = (props) => {
  return (
    <UseWalletProvider>
      <WalletProvider>{props.children}</WalletProvider>
    </UseWalletProvider>
  )
}

export default Provider
