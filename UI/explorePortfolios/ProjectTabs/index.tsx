import Grid from '@mui/material/Grid'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'
import { usePortfolio } from 'domains/data'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

import Projects from './Projects'

const ProjectTabs: FC = () => {
  const { portfolioData } = usePortfolio()
  const { t } = useTranslation('explorePortfolios')
  const [value, setValue] = useState('')

  const tabs = useMemo(() => {
    const reg = new RegExp(value)
    const data = portfolioData.filter((i) => !value || reg.test(i.portfolioName))

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
  }, [portfolioData, t, value])

  return (
    <Grid container pt={4}>
      <Grid item xs={12}>
        <Tabs tabs={tabs} />
      </Grid>
    </Grid>
  )
}

export default ProjectTabs
