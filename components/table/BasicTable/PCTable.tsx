import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useMemo } from 'react'
import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import type { BasicTableProps } from './types'
import { getCellData } from './utils'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'

const Tr: typeof Card = (props: any) => <Card component="tr" {...props} />
const DataFetcher: FC<{
  rowIndex: any
  onRowClick: any
  row: any
  columns: any[]
  dataFetcher: (data: any) => Promise<any>
}> = ({ rowIndex, onRowClick, dataFetcher, row, columns }) => {
  const [rowData, setRowData] = useState(row)
  useEffect(() => {
    if (!dataFetcher) {
      setRowData(row)
      return
    } else {
      dataFetcher(row).then((data) => setRowData(data))
    }
  }, [dataFetcher, row])

  return (
    <TableRow
      component={Tr}
      className={clsx(['ReactVirtualized__Table__row'])}
      onClick={(e) =>
        onRowClick &&
        onRowClick({
          rowData,
          index: rowIndex,
          event: e,
        })
      }
    >
      {columns.map((column, columnIndex) => (
        <td
          key={rowIndex + column.dataKey}
          className="ReactVirtualized__Table__rowColumn"
          role="gridcell"
          style={{
            overflow: 'hidden',
            flex: `0 1 ${column.width}px`,
          }}
        >
          {column.cellRenderer({
            cellData: getCellData(rowData, column),
            columnData: column,
            columnIndex,
            dataKey: column.dataKey,
            isScrolling: false,
            rowData,
            rowIndex,
          })}
        </td>
      ))}
    </TableRow>
  )
}

const PCTable: FC<BasicTableProps> = (props) => {
  const { columns, data, dataFetcher } = props
  const { onRowClick } = props.tableProps || {}

  const table = useMemo(() => {
    return {
      head: columns.map((column) => (
        <td
          key={column.dataKey}
          className="ReactVirtualized__Table__headerColumn"
          role="columnheader"
          style={{
            overflow: 'hidden',
            flex: `0 1 ${column.width}px`,
          }}
        >
          {column.headerRenderer(column)}
        </td>
      )),
      body: data.map((row, rowIndex) => (
        <DataFetcher key={rowIndex} {...{ rowIndex, onRowClick, dataFetcher, row, columns }} />
      )),
    }
  }, [columns, data, dataFetcher, onRowClick])

  return (
    <ROOT className="table basic-table">
      <Table>
        <TableHead>
          <TableRow className="ReactVirtualized__Table__headerRow">{table.head}</TableRow>
        </TableHead>
        <Stack component={TableBody} spacing={2}>
          {table.body}
        </Stack>
      </Table>
    </ROOT>
  )
}

export const ROOT = styled('div')`
  height: 100%;
  width: 100%;
  .MuiTable-root,
  .MuiTableHead-root,
  .MuiTableBody-root {
    display: block;
  }
  .ReactVirtualized__Table__headerRow,
  .ReactVirtualized__Table__rowColumn {
    display: flex;
  }
  .MuiTableCell-root {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    flex: 1;
  }

  .MuiTableCell-alignCenter {
    justify-content: center;
  }

  .ReactVirtualized__Table__row {
    display: flex;
    will-change: transform;
    padding: 20px 0;
    &:hover {
      ${({ theme }) => ({
        backgroundColor: theme.palette.action.hover,
      })}
    }
  }

  .ReactVirtualized__Table__headerColumn div {
    ${({ theme }) => ({
      color: theme.palette.text.secondary,
      fontSize: 13,
    })}
  }
`

export default PCTable
