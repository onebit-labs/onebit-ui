import type { FCC } from 'app/types'

import WalletProvider, { createWalletContext } from 'lib/protocol/components/wallet'

import DataProvider from './data'
import ControllersProvider, { createControllersContext } from './controllers'

const Provider: FCC = ({ children }) => {
  return (
    <WalletProvider>
      <ControllersProvider>
        <DataProvider>{children}</DataProvider>
      </ControllersProvider>
    </WalletProvider>
  )
}

export default Provider

export const useWallet = createWalletContext()
export const useControllers = createControllersContext()
