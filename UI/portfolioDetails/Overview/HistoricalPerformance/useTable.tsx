import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { usePortfolioDetails } from 'domains/data'
import {
  symbolCellRenderer,
  lockUpPeriodCellRenderer,
  numberCellRenderer,
  APYCellRenderer,
} from 'components/table/renderer/portfolio'
import { returnCellRenderer } from './renderer'

export const useTable = (): BasicTableProps => {
  const { portfolio } = usePortfolioDetails()
  const { t } = useTranslation('portfolioDetails')
  const data = useMemo(() => {
    if (!portfolio.portfolioTerm) return []
    const { symbol } = portfolio
    return portfolio.portfolioTerm.map((portfolioTerm) => {
      const { netValueByCalculate: finalNetValue, assetsUnderManagement: AUM } = portfolioTerm
      return {
        ...portfolioTerm,
        AUM,
        symbol,
        finalNetValue,
        return: finalNetValue.minus(1),
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
            dataKey: 'totalFees',
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
            // tip: 'netValueTip',
            width: 150,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'return',
            width: 150,
            headerRenderer,
            cellRenderer: returnCellRenderer,
          },
          {
            dataKey: 'APY',
            width: 120,
            headerRenderer,
            cellRenderer: APYCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('overview.historicalPerformance.' + column.dataKey)
        if (column.tip) {
          column.tip = t('overview.historicalPerformance.' + column.tip)
        }
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
