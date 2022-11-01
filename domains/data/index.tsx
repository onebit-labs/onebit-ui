import type { FCC } from 'app/types'

import NetworkProvider, { createNetworkContext } from './network'
import ERC20Provider, { createERC20Context } from './erc20'
import LendingPoolProvider, { createLendingPoolContext } from './lendingPool'
import PortfolioProvider, { createPortfolioContext } from './portfolio'
import PortfolioDetailsProvider, { createPortfolioDetailsContext } from './portfolioDetails'
import OnebitAPIProvider, { createOnebitAPIContext } from './onebit-api'
import OnebitGraphProvider, { createOnebitGraphContext } from './onebit-graph'
const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <ERC20Provider>
        <LendingPoolProvider>
          <OnebitAPIProvider>
            <OnebitGraphProvider>
              <PortfolioProvider>
                <PortfolioDetailsProvider>{children}</PortfolioDetailsProvider>
              </PortfolioProvider>
            </OnebitGraphProvider>
          </OnebitAPIProvider>
        </LendingPoolProvider>
      </ERC20Provider>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useERC20 = createERC20Context()
export const useLendingPool = createLendingPoolContext()
export const usePortfolio = createPortfolioContext()
export const usePortfolioDetails = createPortfolioDetailsContext()
export const useOnebitAPI = createOnebitAPIContext()
export const useOnebitGraph = createOnebitGraphContext()
