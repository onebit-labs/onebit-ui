import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'

export const useTable = (data: any[]): BasicTableProps => {
  const { t } = useTranslation('transactionHistory')

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'txId',
            width: 250,
            headerRenderer,
            cellRenderer,
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
            cellRenderer,
          },
          {
            dataKey: 'amount',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'date',
            width: 250,
            headerRenderer,
            cellRenderer,
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
