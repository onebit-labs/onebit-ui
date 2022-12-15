import { useWallet } from 'domains'
import { ChainId } from 'lib/protocol/chain/types'
import { useMemo } from 'react'

export const useSubgraph = () => {
  const { chainId } = useWallet()
  const name = useMemo(() => {
    switch (chainId) {
      case ChainId.bsc:
        return 'rockgold0911/onebit-bsc'
      case ChainId.goerli:
        return 'rockgold0911/onebit'
    }
  }, [chainId])

  return {
    name,
  }
}
