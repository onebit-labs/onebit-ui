import { useBalanceOfController } from '../../store/balanceOf'
import { useScaledBalanceOfController } from '../../store/scaledBalanceOf'
import { useIsApprovedController } from '../../store/isApproved'
import { useOracleController } from '../../store/oracle'
import { useTotalSupplyController } from '../../store/totalSupply'
import { useScaledTotalTotalSupplyController } from '../../store/scaledTotalSupply'

export const useERC20Controller = () => {
  const { polling: balanceOf } = useBalanceOfController()
  const { polling: scaledBalanceOf } = useScaledBalanceOfController()
  const { single: isApproved } = useIsApprovedController()
  const { single: oracle } = useOracleController()
  const { polling: totalSupply } = useTotalSupplyController()
  const { polling: scaledTotalSupply } = useScaledTotalTotalSupplyController()

  return { balanceOf, isApproved, oracle, totalSupply, scaledBalanceOf, scaledTotalSupply }
}
