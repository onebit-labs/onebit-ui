import Grid from '@mui/material/Grid'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

import Transactions from './Transactions'

const TransactionTabs: FC = () => {
  const { t } = useTranslation('transactionHistory')
  const [value, setValue] = useState('')

  const tabs = useMemo(() => {
    const reg = new RegExp(value)
    const data = [].filter((i) => !value || reg.test(i.portfolioName))

    const returnValue: TabsProps['tabs'] = [
      {
        title: {
          label: 'all',
        },
        children: {
          component: Transactions,
          props: {
            data,
          },
        },
      },
      {
        title: {
          label: 'deposit',
        },
        children: {
          component: Transactions,
          props: {
            data: data.filter((i) => i.type === 'deposit'),
          },
        },
      },
      {
        title: {
          label: 'withdrawal',
        },
        children: {
          component: Transactions,
          props: {
            data: data.filter((i) => i.type === 'withdrawal'),
          },
        },
      },
    ]
    return returnValue.map((i) => {
      i.title.label = t(`tabs.${i.title.label}`)
      return i
    })
  }, [t, value])

  return (
    <Grid container pt={4}>
      <Grid item xs={12}>
        <Tabs tabs={tabs} />
      </Grid>
    </Grid>
  )
}

export default TransactionTabs
