import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { TableCellRenderer } from 'react-virtualized'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('dashboard')

  const ActionCellRenderer: TableCellRenderer = useCallback(
    ({ rowData }) => {
      return (
        <TableCell component="div">
          <Stack spacing={1} direction="row">
            <Button variant="outlined" size="small" onClick={() => {}}>
              {t('common:wallet.btn.deposit')}
            </Button>
          </Stack>
        </TableCell>
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'portfolioName',
            width: 210,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'lockedUntil',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'netValue',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'yourEquity',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'PNL',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'status',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'action',
            width: 120,
            headerRenderer,
            cellRenderer: ActionCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('portfolioTable.' + column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  return {
    columns,
    data: [],
  }
}
