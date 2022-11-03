import type { FC } from 'react'

import BasicTable from 'components/table/BasicTable'
import { useTable } from './useTable'
import type { Transaction } from 'domains/data/onebit-graph/adapter/transaction'

type TransactionsProps = {
  data: Transaction[]
}
const Transactions: FC<TransactionsProps> = ({ data }) => {
  const table = useTable(data)

  return <BasicTable {...table} />
}

export default Transactions
