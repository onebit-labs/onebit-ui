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
            dataKey: 'title',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'depositors',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'since',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'equity',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'percentage',
            width: 250,
            headerRenderer,
            cellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('depositors.' + column.dataKey)
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
