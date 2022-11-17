import { Grid } from '@mui/material'
import { usePortfolio } from 'domains/data'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import type { FC } from 'react'
import { useMemo } from 'react'

import StatsCard from './StatsCard'

const Stats: FC = () => {
  const {
    portfolioUserData: {
      dashboard: { totalEquityValue, totalPNL, totalPortfolioDeposited, APY },
    },
  } = usePortfolio()
  const cardList = useMemo(
    () => [
      {
        price: <NumberDisplay value={totalEquityValue} options="USD" abbreviate={{}} />,
        title: 'totalEquityValue',
      },
      {
        price: (
          <RiseOrFall value={totalPNL} sx={{ fontSize: 24, fontWeight: 600 }}>
            <NumberDisplay
              value={totalPNL}
              options="USD"
              abbreviate={{}}
              numberFormatOptions={{ signDisplay: 'always' }}
            />
          </RiseOrFall>
        ),
        title: 'totalPNL',
      },
      {
        price: <NumberDisplay value={totalPortfolioDeposited} options="number" />,
        title: 'totalPortfolioDeposited',
      },
      {
        price: <NumberDisplay value={APY} options="percent" min={0} />,
        title: 'APY',
      },
    ],
    [APY, totalEquityValue, totalPNL, totalPortfolioDeposited]
  )

  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {cardList.map((card, index) => (
        <Grid item lg={3} sm={6} xs={12} key={index}>
          <StatsCard card={card} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Stats
