import Grid from '@mui/material/Grid'
import type { FCC } from 'app/types'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'
import SearchHeader from 'components/tabs/SearchHeader'
import { withSearchHeaderProvider } from 'components/tabs/SearchHeader/hoc'
import { useSearchHeader } from 'components/tabs/SearchHeader/Provider'
import { usePortfolio } from 'domains/data'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

import Transactions from './Transactions'

const TransactionTabs: FC = () => {
  const { t } = useTranslation('transactionHistory')
  const searchHeader = useSearchHeader()
  const { portfolioUserData } = usePortfolio()

  const tabs = useMemo(() => {
    const reg = new RegExp(searchHeader.value)
    if (!portfolioUserData.transactions) return []
    const data = portfolioUserData.transactions.filter(
      (i) => !searchHeader.value || reg.test(i.portfolio.portfolioName)
    )

    const returnValue: TabsProps['tabs'] = [
      {
        title: 'all',
        children: {
          component: Transactions,
          props: {
            data,
          },
        },
      },
      {
        title: 'deposit',
        children: {
          component: Transactions,
          props: {
            data: data.filter((i) => i.type === 'deposit'),
          },
        },
      },
      {
        title: 'withdrawal',
        children: {
          component: Transactions,
          props: {
            data: data.filter((i) => i.type === 'withdrawal'),
          },
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = t(`tabs.${i.title}`)
      return i
    })
  }, [searchHeader.value, portfolioUserData.transactions, t])

  const Header: FCC = useCallback(
    ({ children }) => <SearchHeader placeholder="Search by portfolio">{children}</SearchHeader>,
    []
  )

  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs tabs={tabs} Header={Header} />
      </Grid>
    </Grid>
  )
}

export default withSearchHeaderProvider(TransactionTabs)
