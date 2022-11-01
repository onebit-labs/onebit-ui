import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { TableCellRenderer } from 'react-virtualized'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { useRouter } from 'next/router'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('dashboard')
  const router = useRouter()

  const ActionCellRenderer: TableCellRenderer = useCallback(
    ({ rowData }) => {
      return (
        <TableCell component="div">
          <Stack spacing={1} direction="row">
            <Button
              variant="contained"
              size="small"
              onClick={() => router.push(`/portfolio/${encodeURIComponent(rowData.id)}`)}
              sx={{ padding: '5px' }}
            >
              {t('common:wallet.btn.details')}
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
            width: 200,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'lockedUntil',
            width: 200,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'netValue',
            width: 200,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'yourEquity',
            width: 200,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'PNL',
            width: 200,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'status',
            width: 200,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'action',
            width: 200,
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
    data: [
      {
        id: 'Onebit-USDT-2',
        portfolioName: 'Onebit跟单1号',
        lockedUntil: '1234',
        netValue: 1.2,
        yourEquity: '123',
        PNL: '0.12',
        status: 'open',
      },
      {
        id: 'Onebit-USDT-1',
        portfolioName: 'Onebit主观1号',
        lockedUntil: '1234',
        netValue: 1.2,
        yourEquity: '123',
        PNL: '0.12',
        status: 'open',
      },
    ],
  }
}
