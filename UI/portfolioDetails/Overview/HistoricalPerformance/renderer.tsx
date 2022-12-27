import TableCell from '@mui/material/TableCell'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'

type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: any
  rowIndex: number
}
export const returnCellRenderer = ({ cellData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div" sx={{ 'span': { fontSize: 14 }}}>
      <RiseOrFall value={cellData}>
        <NumberDisplay value={cellData} options="percent" />
      </RiseOrFall>
    </TableCell>
  )
}
