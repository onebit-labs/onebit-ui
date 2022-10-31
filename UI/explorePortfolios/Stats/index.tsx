import { Grid } from '@mui/material'
import type { FC } from 'react'
import Image from 'next/image'

import File from './icons/file.svg'
import Money from './icons/money.svg'
import Revenue from './icons/revenue.svg'
import User from './icons/user.svg'

import StatsCard from './StatsCard'

const Stats: FC = () => {
  const cardList = [
    {
      price: 574,
      title: 'assetsUnderManagement',
      icon: (
        <div>
          <Image src={Revenue} alt="Revenue" />
        </div>
      ),
    },
    {
      price: 521,
      title: 'totalProfitSinceInception',
      icon: (
        <div>
          <Image src={Money} alt="Money" />
        </div>
      ),
    },
    {
      price: 684,
      title: 'portfolios',
      icon: (
        <div>
          <Image src={File} alt="File" />
        </div>
      ),
    },
    {
      price: 321,
      title: 'deposits',
      icon: (
        <div>
          <Image src={User} alt="User" />
        </div>
      ),
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
