import { createContext } from 'app/utils/createContext'
import { useNetwork } from 'domains/data'
import { useEffect } from 'react'

const usePortfolioService = () => {
  const {
    markets,
    contracts: { lendingPool },
  } = useNetwork()

  useEffect(() => {
    const lendingPools = markets.map(market => market.address.LendingPool)

    lendingPools

  }, [])

  return
}
const { Provider: PortfolioProvider, createUseContext } = createContext(usePortfolioService)
export const createPortfolioContext = createUseContext

export default PortfolioProvider
