import type { FCC } from 'app/types'

import WalletProvider, { createWalletContext } from 'lib/protocol/components/wallet'

import ControllersProvider, { createControllersContext } from './controllers'

const Provider: FCC = ({ children }) => {
  return (
    <WalletProvider>
      <ControllersProvider>
        {/* <DataProvider>{children}</DataProvider> */}
        {children}
      </ControllersProvider>
    </WalletProvider>
  )
}

export default Provider

export const useControllers = createControllersContext()
export const useWallet = createWalletContext()
