import { useLendingPoolController } from '../../store/lendingPool'
import { usePortfolioTermController } from '../../store/portfolioTerm'
import { useTransactionController } from '../../store/transaction'
import { useDepositorController } from '../../store/depositor'

export const useOnebitGraphController = () => {
  const { single: lendingPool } = useLendingPoolController()
  const { single: portfolioTerm } = usePortfolioTermController()
  const { polling: transaction } = useTransactionController()
  const { polling: depositor } = useDepositorController()

  return { lendingPool, portfolioTerm, transaction, depositor }
}
