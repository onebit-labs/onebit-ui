import { Grid } from '@mui/material'
import type { FC } from 'react'

import StatsCard from './StatsCard'

const Stats: FC = () => {
  const cardList = [
    {
      price: 574,
      title: 'totalEquityValue',
    },
    {
      price: 521,
      title: 'totalPNL',
    },
    {
      price: 684,
      title: 'totalPortfolioDeposited',
    },
    {
      price: 321,
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
