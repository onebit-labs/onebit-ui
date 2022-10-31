import Grid from '@mui/material/Grid'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

import Projects from './Projects'

const ProjectTabs: FC = () => {
  const { t } = useTranslation('explorePortfolios')
  const [value, setValue] = useState('')

  const tabs = useMemo(() => {
    const reg = new RegExp(value)
    const data = [
      {
        id: 'Onebit-USDT-1',
        portfolioName: 'Onebit主观1号',
        symbol: 'USDT',
        lockTime: 90,
        purchaseBeginTimestamp: 1666860043779,
        purchaseEndTimestamp: 1666946540015,
        status: 'open',
        purchaseUpperLimit: 500000,
        totalSupply: 12345,
        estimatedAPY: 0.1212,
        depositors: 15,
      },
      {
        id: 'Onebit-USDT-2',
        portfolioName: 'Onebit跟单1号',
        symbol: 'USDT',
        lockTime: 90,
        purchaseBeginTimestamp: 1666860043779,
        purchaseEndTimestamp: 1666773643779,
        status: 'lockedUp',
        purchaseUpperLimit: 100000,
        totalSupply: 12345,
        currentAPY: 0.1512,
        depositors: 15,
      },
    ].filter((i) => !value || reg.test(i.portfolioName))

    const returnValue: TabsProps['tabs'] = [
      {
        title: 'all',
        children: {
          component: Projects,
          props: {
            data,
          },
        },
      },
      {
        title: 'open',
        children: {
          component: Projects,
          props: {
            data: data.filter((i) => i.status === 'open'),
          },
        },
      },
      {
        title: 'lockedUp',
        children: {
          component: Projects,
          props: {
            data: data.filter((i) => i.status === 'lockedUp'),
          },
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = t(`tabs.${i.title}`)
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

export default ProjectTabs
