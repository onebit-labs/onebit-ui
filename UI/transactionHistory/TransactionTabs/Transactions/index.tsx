import type { FC } from 'react'

import BasicTable from 'components/table/BasicTable'
import { useTable } from './useTable'
import type { TransactionGraph } from 'domains/data/portfolio/adapter/onebitGraph'

type TransactionsProps = {
  data: TransactionGraph[]
}
const Transactions: FC<TransactionsProps> = ({ data }) => {
  const table = useTable(data)

  return <BasicTable {...table} />
}

export default Transactions
