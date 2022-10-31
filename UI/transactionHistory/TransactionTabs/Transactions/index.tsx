import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import BasicTable from 'components/table/BasicTable'
import { useTable } from './useTable'

const ROOT = styled(Paper)``

type TransactionsProps = {
  data: any[]
}
const Transactions: FC<TransactionsProps> = ({ data }) => {
  const table = useTable(data)

  return (
    <ROOT>
      <BasicTable {...table} />
    </ROOT>
  )
}

export default Transactions
