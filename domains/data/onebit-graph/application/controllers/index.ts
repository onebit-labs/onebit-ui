import { useVaultController } from '../../store/vault'
import { usePortfolioTermController } from '../../store/portfolioTerm'
import { useTransactionController } from '../../store/transaction'
import { useDepositorController } from '../../store/depositor'
import { useNetValueController } from '../../store/netValue'

export const useOnebitGraphController = () => {
  const { single: vault } = useVaultController()
  const { single: portfolioTerm } = usePortfolioTermController()
  const { polling: transaction } = useTransactionController()
  const { polling: depositor } = useDepositorController()
  const { single: netValue } = useNetValueController()

  return { vault, portfolioTerm, transaction, depositor, netValue }
}
