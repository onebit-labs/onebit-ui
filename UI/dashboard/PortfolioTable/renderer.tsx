import TableCell from '@mui/material/TableCell'
import { format } from 'date-fns'
import type { Portfolio } from 'domains/data/portfolio'
import Stack from '@mui/material/Stack'
import { Paragraph } from 'components/Typography'
import ProjectStatus from 'components/project/status'
import { useTranslation } from 'next-i18next'

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

export const lockedUntilCellRenderer = ({
  rowData: { redemptionBeginTimestamp, daysleft, purchaseEndTimestamp, status },
}: TableCellProps) => {
  const TimeTips = () => {
    const { t } = useTranslation('dashboard')
    if (status === 'lockedUp') {
      return (
        <>
          <Paragraph>{format(redemptionBeginTimestamp, 'MM/dd/yyyy')}</Paragraph>
          <Paragraph color="error.main">
            {daysleft} {t('portfolioTable.daysLeft')}
          </Paragraph>
        </>
      )
    } else if (status === 'open') {
      return (
        <>
          <Paragraph color="text.main">{t('portfolioTable.withdrawableUntil')}</Paragraph>
          <Paragraph color="success.main">{format(purchaseEndTimestamp, 'MM/dd/yyyy')}</Paragraph>
        </>
      )
    } else {
      return (
        <>
          <Paragraph color="info.main">{t('portfolioTable.onlyForWithdrawal')}</Paragraph>
        </>
      )
    }
  }

  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <TimeTips />
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
