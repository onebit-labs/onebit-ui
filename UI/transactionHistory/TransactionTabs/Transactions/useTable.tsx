import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { symbolCellRenderer } from 'components/table/renderer/portfolio'
import type { Transaction } from 'domains/data/onebit-graph/adapter/transaction'

import { dateCellRenderer, txIDCellRenderer } from './renderer'
import { usePortfolio } from 'domains/data'

export const useTable = (dataSource: Transaction[]): BasicTableProps => {
  const { t } = useTranslation('transactionHistory')
  const { portfolioData } = usePortfolio()
  const data = useMemo(() => {
    return dataSource.map((i) => {
      const portfolio = portfolioData.find((portfolio) => portfolio.address.LendingPool === i.lendingPool)
      if (!portfolio) return i
      const { portfolioName, symbol } = portfolio

      return {
        ...i,
        portfolio: portfolioName,
        symbol,
      }
    })
  }, [dataSource, portfolioData])

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
            cellRenderer,
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
