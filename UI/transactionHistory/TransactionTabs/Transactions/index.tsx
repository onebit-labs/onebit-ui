import type { FC } from 'react'

import BasicTable from 'components/table/BasicTable'
import { useTable } from './useTable'

type TransactionsProps = {
  data: any[]
}
const Transactions: FC<TransactionsProps> = ({ data }) => {
  const table = useTable(data)

  return <BasicTable {...table} />
}

export default Transactions
