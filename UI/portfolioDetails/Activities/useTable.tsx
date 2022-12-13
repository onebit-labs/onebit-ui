import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { symbolCellRenderer } from 'components/table/renderer/portfolio'
import { usePortfolioDetails } from 'domains/data'
import { dateCellRenderer, txIDCellRenderer } from 'UI/transactionHistory/TransactionTabs/Transactions/renderer'
import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'

import { request } from './adapter'
import { fromCellRenderer } from './renderer'

const pageSize = 10

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('portfolioDetails')
  const { portfolio } = usePortfolioDetails()
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [end, setEnd] = useState(false)
  const [data, setData] = useState([])

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'id',
            width: 450,
            headerRenderer,
            cellRenderer: txIDCellRenderer,
          },
          {
            dataKey: 'type',
            width: 450,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'from',
            width: 450,
            headerRenderer,
            cellRenderer: fromCellRenderer,
          },
          {
            dataKey: 'to',
            width: 450,
            headerRenderer,
            cellRenderer: fromCellRenderer,
          },
          {
            dataKey: 'amount',
            width: 450,
            headerRenderer,
            cellRenderer: symbolCellRenderer,
          },
          {
            dataKey: 'date',
            width: 450,
            headerRenderer,
            cellRenderer: dateCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('activities.' + column.dataKey)
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        const skip = pageIndex * pageSize
        const lendingPool = portfolio.address.Vault
        setPageIndex(pageIndex + 1)
        return dataFetcher
          .post({
            skip,
            first: pageSize,
            lendingPool,
          })
          .then((data) => {
            const { symbol } = portfolio
            const rowData = data.map((i) => ({
              ...i,
              symbol,
              lendingPool,
            }))

            if (rowData.length < pageSize) setEnd(true)
            setData((data) => data.concat(rowData))
          })
      },
    }
  }, [dataFetcher, end, pageIndex, portfolio])

  useMount(() => {
    loadMore.onLoadMore()
  })

  return {
    columns,
    data,
    loadMore,
  }
}
