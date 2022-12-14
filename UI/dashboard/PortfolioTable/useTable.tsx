import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { TableCellRenderer } from 'react-virtualized'

import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { useRouter } from 'next/router'
import { usePortfolio } from 'domains/data'
import { lockedUntilCellRenderer, statusCellRenderer } from './renderer'
import { netValueCellRenderer, PNLCellRenderer, symbolCellRenderer } from 'components/table/renderer/portfolio'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('dashboard')
  const router = useRouter()
  const {
    portfolioUserData: {
      dashboard: { portfolioUserData },
    },
  } = usePortfolio()

  const ActionCellRenderer: TableCellRenderer = useCallback(
    ({ rowData }) => {
      return (
        <TableCell component="div" align="center">
          <Button
            variant="contained"
            size="small"
            onClick={() => router.push(`/portfolio/${encodeURIComponent(rowData.id)}`)}
            sx={{ padding: '5px' }}
          >
            {t('common:wallet.btn.details')}
          </Button>
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
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'lockedUntil',
            width: 200,
            headerRenderer,
            cellRenderer: lockedUntilCellRenderer,
          },
          {
            dataKey: 'netValue',
            width: 200,
            tip: 'tip',
            headerRenderer,
            cellRenderer: netValueCellRenderer,
          },
          {
            dataKey: 'yourEquity',
            width: 200,
            tip: 'tip',
            headerRenderer,
            cellRenderer: symbolCellRenderer,
          },
          {
            dataKey: 'PNL',
            width: 200,
            tip: 'tip',
            headerRenderer,
            cellRenderer: PNLCellRenderer,
          },
          {
            dataKey: 'status',
            width: 150,
            headerRenderer,
            cellRenderer: statusCellRenderer,
          },
          {
            dataKey: 'action',
            width: 150,
            headerRenderer,
            cellRenderer: ActionCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('portfolioTable.' + column.dataKey)
        if (column.tip) column.tip = t('portfolioTable.' + column.tip)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  return {
    columns,
    data: portfolioUserData,
  }
}
