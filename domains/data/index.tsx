import type { FCC } from 'app/types'

import NetworkProvider, { createNetworkContext } from './network'
import ERC20Provider, { createERC20Context } from './erc20'

const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <ERC20Provider>{children}</ERC20Provider>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useERC20 = createERC20Context()
