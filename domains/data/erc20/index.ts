import { createContext } from 'app/utils/createContext'
import { useMemo } from 'react'
import { getMarkets } from './adapter/markets'
import { useAddress } from './application/address'

const useERC20Service = () => {
  const address = useAddress()
  const markets = useMemo(() => getMarkets(address), [address])

  return { address, markets }
}
const { Provider: ERC20Provider, createUseContext } = createContext(useERC20Service)
export const createERC20Context = createUseContext

export default ERC20Provider
