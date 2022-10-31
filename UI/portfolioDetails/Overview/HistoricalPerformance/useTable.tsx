import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('portfolioDetails')

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'term',
            width: 210,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'lockUpPeriod',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'AUM',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'depositors',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'finalNetValue',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'return',
            width: 150,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'APY',
            width: 120,
            headerRenderer,
            cellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('overview.historicalPerformance.' + column.dataKey)
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
