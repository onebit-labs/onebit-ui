import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { percentCellRenderer, symbolCellRenderer } from 'components/table/renderer/portfolio'
import { usePortfolioDetails } from 'domains/data'
import { request } from 'domains/data/onebit-graph/store/depositor/adapter'
import { normalize, toBN } from 'lib/math'

import { depositorsCellRenderer, sinceCellRenderer } from './renderer'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('portfolioDetails')
  const { portfolio } = usePortfolioDetails()
  const dataFetcher = useCallback(
    ({ depositors: account, totalSupply, symbol }: any) =>
      request({ account }).then((data) => {
        if (!data[0]) return { depositors: account }
        const { createTimestamp, balanceOf } = data[0]
        const equity = normalize(balanceOf, 18)
        const returnValue = {
          depositors: account,
          since: toBN(createTimestamp).multipliedBy(Math.pow(10, 3)).toNumber(),
          equity: equity,
          percentage: equity.div(totalSupply),
          symbol,
        }
        return returnValue
      }),
    []
  )
  const data = useMemo(() => {
    if (!portfolio.depositorList) return []
    const { totalSupply, symbol } = portfolio
    return portfolio.depositorList.map((account) => ({
      depositors: account,
      totalSupply,
      symbol,
    }))
  }, [portfolio])

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
            cellRenderer: sinceCellRenderer,
          },
          {
            dataKey: 'equity',
            width: 450,
            headerRenderer,
            cellRenderer: symbolCellRenderer,
          },
          {
            dataKey: 'percentage',
            width: 450,
            headerRenderer,
            cellRenderer: percentCellRenderer,
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
    dataFetcher,
  }
}
