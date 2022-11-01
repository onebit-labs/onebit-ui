import TableCell from '@mui/material/TableCell'
import type { TransactionGraph } from 'domains/data/portfolio/adapter/onebitGraph'
import { format } from 'date-fns'
import LinkToAddress from 'components/button/LinkToAddress'

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: TransactionGraph
  rowIndex: number
}

export const txIDCellRenderer = ({ rowData: { id } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <LinkToAddress address={id} />
    </TableCell>
  )
}
export const portfolioCellRenderer = ({ rowData: { portfolio } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      {portfolio.portfolioName || '-'}
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
