import { Grid } from '@mui/material'
import type { FC } from 'react'
import Image from 'next/image'
import NumberDisplay from 'lib/math/components/NumberDisplay'

import File from './icons/file.svg'
import Money from './icons/money.svg'
import Revenue from './icons/revenue.svg'
import User from './icons/user.svg'

import StatsCard from './StatsCard'

const Stats: FC = () => {
  const cardList = [
    {
      price: <NumberDisplay value={571234.3123} options="USD" abbreviate={{}} />,
      title: 'assetsUnderManagement',
      icon: (
        <div>
          <Image src={Revenue} alt="Revenue" />
        </div>
      ),
    },
    {
      price: <NumberDisplay value={12900.3123} options="USD" abbreviate={{}} />,
      title: 'totalProfitSinceInception',
      icon: (
        <div>
          <Image src={Money} alt="Money" />
        </div>
      ),
    },
    {
      price: <NumberDisplay value={6} options="number" />,
      title: 'portfolios',
      icon: (
        <div>
          <Image src={File} alt="File" />
        </div>
      ),
    },
    {
      price: <NumberDisplay value={321} options="number" />,
      title: 'depositors',
      icon: (
        <div>
          <Image src={User} alt="User" />
        </div>
      ),
    },
  ]

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      {cardList.map((card, index) => (
        <Grid item lg={3} xs={6} key={index}>
          <StatsCard card={card} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Stats
