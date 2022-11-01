import TableCell from '@mui/material/TableCell'
import type { TransactionGraph } from 'domains/data/portfolio/adapter/onebitGraph'
import LinkToAddress from 'components/button/LinkToAddress'
import IconButton from '@mui/material/IconButton'
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import { toast } from 'lib/toastify'
import { writeText } from 'app/utils/dom/clipboard'
import { useState } from 'react'

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
const Depositors = ({ cellData }: any) => {
  const [copyValue, setCopyValue] = useState('')
  return (
    <TableCell align="center" component="div">
      <LinkToAddress address={cellData} />
      <IconButton
        onClick={(e) => {
          e.stopPropagation()
          setCopyValue(cellData)
          writeText(cellData)
          toast.success('Wallet address copied successfully', {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        }}
      >
        {copyValue === cellData ? (
          <InventoryRoundedIcon fontSize="small" sx={{ color: 'text.primary' }} />
        ) : (
          <ContentCopyRoundedIcon fontSize="small" sx={{ color: 'text.primary' }} />
        )}
      </IconButton>
    </TableCell>
  )
}
export const depositorsCellRenderer = ({ cellData }: TableCellProps) => {
  return <Depositors cellData={cellData} />
}
