import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { percentCellRenderer, symbolCellRenderer } from 'components/table/renderer/portfolio'
import { useNetwork, usePortfolioDetails } from 'domains/data'
import { request as depositorRequest } from 'domains/data/onebit-graph/store/depositor/adapter'
import { request as erc20BalanceOfRequest } from 'domains/data/erc20/store/balanceOf/adapter'
import { toBN } from 'lib/math'

import { depositorsCellRenderer, sinceCellRenderer } from './renderer'
import { createPromise } from 'app/utils/promise'

export const useTable = (): BasicTableProps => {
  const { t } = useTranslation('portfolioDetails')
  const { portfolio } = usePortfolioDetails()
  const {
    contracts: { erc20Service },
  } = useNetwork()
  const dataFetcher = useCallback(
    ({ depositors: account, totalSupply, symbol, lendingPool }: any) => {
      const returnValue = {
        depositors: account,
        since: 0,
        equity: toBN(0),
        percentage: toBN(0),
        symbol,
      }
      const { promise, reslove } = createPromise<typeof returnValue>()
      depositorRequest({ account, lendingPool })
        .then((data) => {
          if (!data[0]) return {} as undefined
          const { createTimestamp } = data[0]
          returnValue.since = toBN(createTimestamp).multipliedBy(Math.pow(10, 3)).toNumber()
          return data[0]
        })
        .then(({ oTokenAddress }) =>
          erc20BalanceOfRequest({
            erc20Service,
            user: account,
            tokens: [oTokenAddress],
          }).then((data) => {
            if (!data[oTokenAddress]) return
            returnValue.equity = toBN(data[oTokenAddress])
            returnValue.percentage = returnValue.equity.div(totalSupply)
          })
        )
        .finally(() => reslove(returnValue))
      return promise
    },
    [erc20Service]
  )
  const data = useMemo(() => {
    if (!portfolio.depositorList) return []
    const {
      totalSupply,
      symbol,
      address: { LendingPool },
    } = portfolio
    return portfolio.depositorList.map((account) => ({
      depositors: account,
      totalSupply,
      symbol,
      lendingPool: LendingPool,
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
