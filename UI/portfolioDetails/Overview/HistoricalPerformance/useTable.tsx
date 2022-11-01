import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { usePortfolioDetails } from 'domains/data'
import { symbolCellRenderer, lockUpPeriodCellRenderer, numberCellRenderer } from 'components/table/renderer/portfolio'
import { getBigNumber } from 'app/utils/get'

export const useTable = (): BasicTableProps => {
  const { portfolio } = usePortfolioDetails()
  const { t } = useTranslation('portfolioDetails')
  const data = useMemo(() => {
    if (!portfolio.portfolioTerm) return []
    const { symbol } = portfolio
    return portfolio.portfolioTerm.map((portfolioTerm) => {
      const { liquidityIndex } = portfolioTerm
      const { value: AUM } = getBigNumber(portfolioTerm, ['value'], 18)
      return {
        ...portfolioTerm,
        AUM,
        symbol,
        finalNetValue: liquidityIndex,
      }
    })
  }, [portfolio])

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
            cellRenderer: lockUpPeriodCellRenderer,
          },
          {
            dataKey: 'AUM',
            width: 150,
            headerRenderer,
            cellRenderer: symbolCellRenderer,
          },
          {
            dataKey: 'depositors',
            width: 150,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'finalNetValue',
            width: 150,
            headerRenderer,
            cellRenderer: numberCellRenderer,
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
    data,
  }
}
