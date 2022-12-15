import { createContext } from 'app/utils/createContext'

import { useERC20Controller } from 'domains/data/erc20/application/controllers'
import { useVaultController } from 'domains/data/vault/application/controllers'
import { useOnebitAPIController } from 'domains/data/onebit-api/application/controllers'
import { useOnebitGraphController } from 'domains/data/onebit-graph/application/controllers'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'
import { useCallback } from 'react'

export const useControllersService = () => {
  const erc20 = useERC20Controller()
  const vault = useVaultController()
  const pageProcess = usePageProgressController()
  const onebitAPI = useOnebitAPIController()
  const onebitGraph = useOnebitGraphController()

  const updateData = useCallback(() => {
    erc20.balanceOf.restart()
    erc20.totalSupply.restart()
    erc20.scaledBalanceOf.restart()
    erc20.scaledTotalSupply.restart()
    vault.reserveData.restart()
    onebitGraph.transaction.restart()
    onebitGraph.depositor.restart()
    onebitGraph.vault.restart()
    onebitGraph.portfolioTerm.restart()
  }, [
    erc20.balanceOf,
    erc20.scaledBalanceOf,
    erc20.scaledTotalSupply,
    erc20.totalSupply,
    vault.reserveData,
    onebitGraph.depositor,
    onebitGraph.vault,
    onebitGraph.portfolioTerm,
    onebitGraph.transaction,
  ])

  return { erc20, vault, pageProcess, onebitAPI, onebitGraph, updateData }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
