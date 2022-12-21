import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { symbolCellRenderer } from 'components/table/renderer/portfolio'
import { useNetwork, usePortfolioDetails } from 'domains/data'
import { dateCellRenderer, txIDCellRenderer } from 'UI/transactionHistory/TransactionTabs/Transactions/renderer'
import { usePost } from 'app/hooks/request'
import { useMount } from 'app/hooks/useMount'

import { request } from './adapter'
import { fromCellRenderer } from './renderer'

const pageSize = 5

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('portfolioDetails')
  const { portfolio } = usePortfolioDetails()
  const [pageIndex, setPageIndex] = useState(0)
  const dataFetcher = usePost(request)
  const [noMoreSourceData, setNoMoreSourceData] = useState(false)
  const [sourceData, setSourceData] = useState([])
  const {
    subgraph: { name: subgraphName },
  } = useNetwork()

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
  const skip = useMemo(() => pageIndex * pageSize, [pageIndex])
  const data = useMemo(() => {
    const returnValue = [...sourceData]
    return returnValue.sort((a, b) => b.createTimestamp - a.createTimestamp).slice(0, skip)
  }, [skip, sourceData])
  const end = useMemo(() => {
    if (!noMoreSourceData) return false
    return skip > data.length
  }, [data.length, noMoreSourceData, skip])

  const loadMore = useMemo(() => {
    return {
      end,
      disabled: dataFetcher.loading,
      onLoadMore: () => {
        const vault = portfolio.address.Vault
        setPageIndex(pageIndex + 1)
        if (noMoreSourceData) return Promise.resolve()
        return dataFetcher
          .post({
            skip,
            first: pageSize,
            vault,
            subgraphName,
          })
          .then((data) => {
            const { symbol } = portfolio
            const rowData = data.map((i) => ({
              ...i,
              symbol,
              vault,
            }))

            if (!rowData.length) setNoMoreSourceData(true)
            setSourceData((data) => data.concat(rowData))
          })
      },
    }
  }, [dataFetcher, end, noMoreSourceData, pageIndex, portfolio, skip, subgraphName])

  useMount(() => {
    loadMore.onLoadMore()
  })

  return {
    columns,
    data,
    loadMore,
  }
}
