import Grid from '@mui/material/Grid'
import type { FCC } from 'app/types'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'
import SearchHeader from 'components/tabs/SearchHeader'
import { withSearchHeaderProvider } from 'components/tabs/SearchHeader/hoc'
import { useSearchHeader } from 'components/tabs/SearchHeader/Provider'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

import Transactions from './Transactions'

const TransactionTabs: FC = () => {
  const { t } = useTranslation('transactionHistory')
  const searchHeader = useSearchHeader()

  const tabs = useMemo(() => {
    const reg = new RegExp(searchHeader.value)
    const data = [
      {
        txId: '0xec5d20887706f3db4efa86949000a53f96f6c3b1',
        type: 'deposit',
        portfolio: '1234',
        amount: 1234531,
        date: 'May 10, 2022 12:00:12',
      },
      {
        txId: '0xe30F0A4d3346abCa7B61df08d6275e5F79C027a6',
        type: 'withdrawal',
        portfolio: '321',
        amount: 32145,
        date: 'May 10, 2022 12:00:12',
      },
      {
        txId: '0xe30F0A4d3346abCa7B61df08d6275e5F79C027a6',
        type: 'deposit',
        portfolio: '666',
        amount: 32145,
        date: 'May 10, 2022 12:00:12',
      },
    ].filter((i) => !searchHeader.value || reg.test(i.portfolio))

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
  }, [t, searchHeader.value])

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
