
import { useLendingPoolController } from '../../store/lendingPool'
import { usePortfolioTermController } from '../../store/portfolioTerm'
import { useTransactionController } from '../../store/transaction'

export const useOnebitGraphController = () => {
  const { single: lendingPool } = useLendingPoolController()
  const { single: portfolioTerm } = usePortfolioTermController()
  const { single: transaction } = useTransactionController()

  return { lendingPool, portfolioTerm, transaction }
}
