import { createContext } from 'app/utils/createContext'
import { useMemo } from 'react'
import { getMarkets } from './adapter/markets'
import { useAddress } from './application/address'
import { useProvider } from './application/provider'

const useNetworkService = () => {
  const address = useAddress()
  const markets = useMemo(() => getMarkets(address), [address])
  const provider = useProvider(address)

  return { address, markets, provider }
}
const { Provider: NetworkProvider, createUseContext } = createContext(useNetworkService)
export const createNetworkContext = createUseContext

export default NetworkProvider
