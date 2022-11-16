import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as balanceOfSelect } from './store/balanceOf'
import { select as scaledBalanceOfSelect } from './store/scaledBalanceOf'
import { select as isApprovedSelect } from './store/isApproved'
import { select as oracleSelect } from './store/oracle'
import { select as totalSupplySelect } from './store/totalSupply'
import { select as scaledTotalSupplySelect } from './store/scaledTotalSupply'

const useERC20Service = () => {
  const balanceOf = useAppSelector(balanceOfSelect.selectData)
  const scaledBalanceOf = useAppSelector(scaledBalanceOfSelect.selectData)
  const isApproved = useAppSelector(isApprovedSelect.selectData)
  const oracle = useAppSelector(oracleSelect.selectData)
  const totalSupply = useAppSelector(totalSupplySelect.selectData)
  const scaledTotalSupply = useAppSelector(scaledTotalSupplySelect.selectData)

  return {
    balanceOf,
    scaledBalanceOf,
    isApproved,
    oracle,
    totalSupply,
    scaledTotalSupply,
  }
}
const { Provider: ERC20Provider, createUseContext } = createContext(useERC20Service)
export const createERC20Context = createUseContext

export default ERC20Provider
