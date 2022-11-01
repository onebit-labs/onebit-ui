import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { usePortfolioDetails } from 'domains/data'
import { depositorsCellRenderer } from './renderer'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('portfolioDetails')
  const { portfolio } = usePortfolioDetails()
  const data = useMemo(() => {
    return portfolio.depositorList.map((account) => ({
      depositors: account,
    }))
  }, [portfolio.depositorList])

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'depositors',
            width: 450,
            headerRenderer,
            cellRenderer: depositorsCellRenderer,
          },
          {
            dataKey: 'since',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'equity',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'percentage',
            width: 450,
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
    data,
  }
}
