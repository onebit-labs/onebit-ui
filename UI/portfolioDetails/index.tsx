import type { FC } from 'react'
import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'
import BackButton from 'components/button/BackButton'
import Grid from '@mui/material/Grid'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'

import PortfolioInfo from './PortfolioInfo'
import Overview from './Overview'
import Fees from './Fees'
import Policies from './Policies'
import Depositors from './Depositors'
import Activities from './Activities'

const PortfolioDetails: FC = () => {
  const { t } = useTranslation('portfolioDetails')
  const theme = useTheme()
  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'overview',
        children: {
          component: Overview,
        },
      },
      {
        title: 'fees',
        children: {
          component: Fees,
        },
      },
      {
        title: 'policies',
        children: {
          component: Policies,
        },
      },
      {
        title: 'depositors',
        children: {
          component: Depositors,
        },
      },
      {
        title: 'activities',
        children: {
          component: Activities,
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = t(`tabs.${i.title}`)
      return i
    })
  }, [t])

  return (
    <>
      <BackButton />
      <Grid container pt={2}>
        <Grid item xs={12}>
          <Tabs
            tabs={tabs}
            Header={PortfolioInfo}
            sx={{
              [theme.breakpoints.up('sm')]: {
                flex: 1,
                '.MuiTabs-scroller': {
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                },
                '.MuiButtonBase-root': {
                  minWidth: 150,
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PortfolioDetails
