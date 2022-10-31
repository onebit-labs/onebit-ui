import { useBalanceOfController } from '../../store/balanceOf'
import { useIsApprovedController } from '../../store/isApproved'
import { useOracleController } from '../../store/oracle'
import { useTotalSupplyController } from '../../store/totalSupply'

export const useERC20Controller = () => {
  const { polling: balanceOf } = useBalanceOfController()
  const { single: isApproved } = useIsApprovedController()
  const { single: oracle } = useOracleController()
  const { polling: totalSupply } = useTotalSupplyController()

  return { balanceOf, isApproved, oracle, totalSupply }
}
