import TableCell from '@mui/material/TableCell'
import { format } from 'date-fns'
import LinkToAddress from 'components/button/LinkToAddress'
import type { Transaction } from 'domains/data/onebit-graph/adapter/transaction'

export type TransactionTableData = Transaction & {
  portfolioName: string
}

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: TransactionTableData
  rowIndex: number
}

export const txIDCellRenderer = ({ rowData: { id } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <LinkToAddress address={id} />
    </TableCell>
  )
}
export const dateCellRenderer = ({ rowData: { createTimestamp } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      {format(createTimestamp, 'MMM dd,yyyy HH:mm:ss')}
    </TableCell>
  )
}
