import { Grid } from '@mui/material'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import type { FC } from 'react'

import StatsCard from './StatsCard'

const Stats: FC = () => {
  const cardList = [
    {
      price: <NumberDisplay value={571234.3123} options="USD" abbreviate={{}} />,
      title: 'totalEquityValue',
    },
    {
      price: (
        <RiseOrFall value={98762.123} sx={{ fontSize: 24, fontWeight: 600 }}>
          <NumberDisplay
            value={98762.123}
            options="USD"
            abbreviate={{}}
            numberFormatOptions={{ signDisplay: 'always' }}
          />
        </RiseOrFall>
      ),
      title: 'totalPNL',
    },
    {
      price: <NumberDisplay value={4} options="number" />,
      title: 'totalPortfolioDeposited',
    },
    {
      price: <NumberDisplay value={0.3123} options="percent" />,
      title: 'APY',
    },
  ]

  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {cardList.map((card, index) => (
        <Grid item lg={3} xs={6} key={index}>
          <StatsCard card={card} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Stats
