import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { useMemo } from 'react'
import { usePortfolio } from '..'

import { usePortfolioId } from './application/portfolioId'

const usePortfolioDetailsService = () => {
  const portfolioId = usePortfolioId()
  const { portfolioData } = usePortfolio()
  const portfolio = useMemo(() => {
    const id = portfolioId.value
    if (!id || !portfolioData.length) return {} as undefined
    const returnValue = portfolioData.find((i) => i.id === id) || ({} as undefined)
    log('[portfolio] [portfolioDetails]', returnValue)
    return returnValue
  }, [portfolioData, portfolioId.value])

  return {
    portfolioId,
    portfolio,
  }
}
const { Provider: PortfolioDetailsProvider, createUseContext } = createContext(usePortfolioDetailsService)
export const createPortfolioDetailsContext = createUseContext

export default PortfolioDetailsProvider
