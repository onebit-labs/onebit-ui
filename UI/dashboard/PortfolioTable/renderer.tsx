import TableCell from '@mui/material/TableCell'
import { format, differenceInDays } from 'date-fns'
import type { Portfolio } from 'domains/data/portfolio'
import Stack from '@mui/material/Stack'
import { Paragraph } from 'components/Typography'
import ProjectStatus from 'components/project/status'

export type RowData = Portfolio

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: RowData
  rowIndex: number
}
const now = new Date()

export const lockedUntilCellRenderer = ({
  rowData: { purchaseEndTimestamp, redemptionBeginTimestamp },
}: TableCellProps) => {
  const daysleft = differenceInDays(now, purchaseEndTimestamp)
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Paragraph color="text.secondary">{format(redemptionBeginTimestamp, 'MM/dd/yyyy')}</Paragraph>
        {daysleft > 0 && <Paragraph color="text.secondary">{daysleft} Days Left</Paragraph>}
      </Stack>
    </TableCell>
  )
}

export const statusCellRenderer = ({ cellData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <ProjectStatus status={cellData} />
    </TableCell>
  )
}
