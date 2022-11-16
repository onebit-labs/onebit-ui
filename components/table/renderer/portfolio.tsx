import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'
import TimePeriod from 'components/date/TimePeriod'
import { Paragraph } from 'components/Typography'
import type { Portfolio } from 'domains/data/portfolio'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: Portfolio
  rowIndex: number
}
export const lockUpPeriodCellRenderer = ({
  rowData: { lockTime, purchaseEndTimestamp, redemptionBeginTimestamp },
}: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Paragraph color="text.secondary">{lockTime} Days</Paragraph>
        <Paragraph color="text.secondary">
          <TimePeriod start={purchaseEndTimestamp} end={redemptionBeginTimestamp} />
        </Paragraph>
      </Stack>
    </TableCell>
  )
}
export const symbolCellRenderer = ({ cellData, rowData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={0.5} direction="row">
        <NumberDisplay value={cellData} abbreviate={{ maximumFractionDigits: 3 }} />
        <span> {rowData.symbol}</span>
      </Stack>
    </TableCell>
  )
}

export const numberCellRenderer = ({ cellData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <NumberDisplay value={cellData} options="number" />
    </TableCell>
  )
}

export const percentCellRenderer = ({ cellData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <NumberDisplay value={cellData} options="percent" />
    </TableCell>
  )
}

export const PNLCellRenderer = ({ rowData: { PNLInUSD, PNLRate } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <RiseOrFall value={PNLInUSD}>
          <NumberDisplay
            value={PNLInUSD}
            options="USD"
            abbreviate={{}}
            numberFormatOptions={{ signDisplay: 'always' }}
          />
        </RiseOrFall>
        <RiseOrFall value={PNLRate}>
          <NumberDisplay value={PNLRate} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
      </Stack>
    </TableCell>
  )
}
