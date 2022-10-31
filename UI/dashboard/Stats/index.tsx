import { Grid } from '@mui/material'
import NumberDisplay from 'lib/math/components/NumberDisplay'
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
        <NumberDisplay
          value={98762.123}
          options="USD"
          abbreviate={{}}
          numberFormatOptions={{ signDisplay: 'always' }}
        />
      ),
      title: 'totalPNL',
    },
    {
      price: <NumberDisplay value={0.3123} options="number" />,
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
