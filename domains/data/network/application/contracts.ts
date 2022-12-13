import { useMemo } from 'react'
import type { Provider } from 'lib/protocol/provider/common-static-json-rpc-provider'

import { ERC20Service } from 'lib/protocol/typechain/erc20'
import { ChainlinkService } from 'lib/protocol/typechain/chainlink'
import { VaultService, OTokenService } from 'lib/protocol/typechain/onebit'

export const useContracts = (provider: Provider) => {
  const contracts = useMemo(() => {
    return {
      lendingPool: new VaultService(provider),
      erc20Service: new ERC20Service(provider),
      oTokenService: new OTokenService(provider),
      chainlinkService: new ChainlinkService(provider),
    }
  }, [provider])

  // contracts.ChainlinkService.latestRound()

  return contracts
}
