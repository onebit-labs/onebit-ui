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

import Projects from './Projects'

const ProjectTabs: FC = () => {
  const { portfolioData } = usePortfolio()
  const { t } = useTranslation('explorePortfolios')
  const { value } = useSearchHeader()

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
      {
        title: 'close',
        children: {
          component: Projects,
          props: {
            data: data.filter((i) => i.status === 'close'),
          },
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = t(`tabs.${i.title}`)
      return i
    })
  }, [portfolioData, t, value])

  const Header: FCC = useCallback(
    ({ children }) => <SearchHeader placeholder="Find Products">{children}</SearchHeader>,
    []
  )

  return (
    <Grid container pt={4}>
      <Grid item xs={12}>
        <Tabs tabs={tabs} Header={Header} />
      </Grid>
    </Grid>
  )
}

export default withSearchHeaderProvider(ProjectTabs)
