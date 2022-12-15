import { createContext } from 'app/utils/createContext'
import { useMemo } from 'react'
import { getMarkets } from './adapter/markets'
import { useAddress } from './application/address'
import { useProvider } from './application/provider'
import { useContracts } from './application/contracts'
import { useSubgraph } from './application/subgraph'

const useNetworkService = () => {
  const address = useAddress()
  const markets = useMemo(() => getMarkets(address), [address])
  const provider = useProvider(address)
  const contracts = useContracts(provider)
  const subgraph = useSubgraph()

  return { address, markets, provider, contracts, subgraph }
}
const { Provider: NetworkProvider, createUseContext } = createContext(useNetworkService)
export const createNetworkContext = createUseContext

export default NetworkProvider
