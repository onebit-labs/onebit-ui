import type { FC } from 'react'
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

const PCTable: FC<BasicTableProps> = (props) => {
  const { columns, data } = props
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
      body:
        data &&
        data.map((row, rowIndex) => (
          <Card key={rowIndex}>
            <TableRow
              className={clsx(['ReactVirtualized__Table__row'])}
              onClick={(e) =>
                onRowClick &&
                onRowClick({
                  rowData: row,
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
                    cellData: getCellData(row, column),
                    columnData: column,
                    columnIndex,
                    dataKey: column.dataKey,
                    isScrolling: false,
                    rowData: row,
                    rowIndex,
                  })}
                </td>
              ))}
            </TableRow>
          </Card>
        )),
    }
  }, [columns, data, onRowClick])

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
    &:hover {
      ${({ theme }) => ({
        backgroundColor: theme.palette.secondary[400],
      })}
    }
  }
`

export default PCTable
