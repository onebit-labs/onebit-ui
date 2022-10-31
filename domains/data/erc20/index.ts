import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as balanceOfSelect } from './store/balanceOf'
import { select as isApprovedSelect } from './store/isApproved'
import { select as oracleSelect } from './store/oracle'

const useERC20Service = () => {
  const balanceOf = useAppSelector(balanceOfSelect.selectData)
  const isApproved = useAppSelector(isApprovedSelect.selectData)
  const oracle = useAppSelector(oracleSelect.selectData)

  return {
    balanceOf,
    isApproved,
    oracle,
  }
}
const { Provider: ERC20Provider, createUseContext } = createContext(useERC20Service)
export const createERC20Context = createUseContext

export default ERC20Provider
