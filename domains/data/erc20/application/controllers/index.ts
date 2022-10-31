import { useBalanceOfController } from '../../store/balanceOf'
import { useIsApprovedController } from '../../store/isApproved'
import { useOracleController } from '../../store/oracle'

export const useERC20Controller = () => {
  const { polling: balanceOf } = useBalanceOfController()
  const { single: isApproved } = useIsApprovedController()
  const { single: oracle } = useOracleController()

  return { balanceOf, isApproved, oracle }
}
