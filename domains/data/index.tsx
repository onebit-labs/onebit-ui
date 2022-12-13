import type { FCC } from 'app/types'

import NetworkProvider, { createNetworkContext } from './network'
import ERC20Provider, { createERC20Context } from './erc20'
import VaultProvider, { createVaultContext } from './lendingPool'
import PortfolioProvider, { createPortfolioContext } from './portfolio'
import PortfolioDetailsProvider, { createPortfolioDetailsContext } from './portfolioDetails'
import OnebitAPIProvider, { createOnebitAPIContext } from './onebit-api'
import OnebitGraphProvider, { createOnebitGraphContext } from './onebit-graph'
const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <ERC20Provider>
        <VaultProvider>
          <OnebitAPIProvider>
            <OnebitGraphProvider>
              <PortfolioProvider>
                <PortfolioDetailsProvider>{children}</PortfolioDetailsProvider>
              </PortfolioProvider>
            </OnebitGraphProvider>
          </OnebitAPIProvider>
        </VaultProvider>
      </ERC20Provider>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useERC20 = createERC20Context()
export const useVault = createVaultContext()
export const usePortfolio = createPortfolioContext()
export const usePortfolioDetails = createPortfolioDetailsContext()
export const useOnebitAPI = createOnebitAPIContext()
export const useOnebitGraph = createOnebitGraphContext()
