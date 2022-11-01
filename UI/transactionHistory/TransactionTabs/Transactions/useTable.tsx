import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import type { TransactionGraph } from 'domains/data/portfolio/adapter/onebitGraph'
import { dateCellRenderer, portfolioCellRenderer, txIDCellRenderer } from './renderer'
import { symbolCellRenderer } from 'components/table/renderer/portfolio'

export const useTable = (data: TransactionGraph[]): BasicTableProps => {
  const { t } = useTranslation('transactionHistory')

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'txId',
            width: 250,
            headerRenderer,
            cellRenderer: txIDCellRenderer,
          },
          {
            dataKey: 'type',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'portfolio',
            width: 250,
            headerRenderer,
            cellRenderer: portfolioCellRenderer,
          },
          {
            dataKey: 'amount',
            width: 250,
            headerRenderer,
            cellRenderer: symbolCellRenderer,
          },
          {
            dataKey: 'date',
            width: 250,
            headerRenderer,
            cellRenderer: dateCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('transactions.' + column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  return {
    columns,
    data,
  }
}
