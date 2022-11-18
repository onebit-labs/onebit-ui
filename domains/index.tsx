import type { FCC } from 'app/types'

import WalletProvider, { createWalletContext } from 'lib/protocol/components/wallet'

import UtilsProvider from './utils'
import DataProvider from './data'
import LoadingProvider, { createLoadingContext } from './loading'
import ControllersProvider, { createControllersContext } from './controllers'

const Provider: FCC = ({ children }) => {
  return (
    <WalletProvider>
      <UtilsProvider>
        <ControllersProvider>
          <DataProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </DataProvider>
        </ControllersProvider>
      </UtilsProvider>
    </WalletProvider>
  )
}

export default Provider

export const useWallet = createWalletContext()
export const useControllers = createControllersContext()
export const useLoading = createLoadingContext()
