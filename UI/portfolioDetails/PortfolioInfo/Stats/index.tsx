import { Grid } from '@mui/material'
import type { FC } from 'react'
import Image from 'next/image'

import Money from './icons/money.svg'
import Revenue from './icons/revenue.svg'
import User from './icons/user.svg'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'

type StatsProps = {
  symbol: string
  status: string
  totalSupply: number
  currentAPY: number
  estimatedAPY: number
  depositors: number
}

const Stats: FC<StatsProps> = ({ symbol, status, totalSupply, estimatedAPY, currentAPY, depositors }) => {
  const isOpen = status === 'open'

  const cardList = [
    {
      price: (
        <div>
          <NumberDisplay value={totalSupply} options="number" /> {symbol}
        </div>
      ),
      title: 'assetsUnderManagement',
      icon: (
        <div>
          <Image src={Money} alt="Money" width={40} height={40} />
        </div>
      ),
    },
    isOpen
      ? {
          price: <NumberDisplay value={estimatedAPY} options="percent" />,
          title: 'estimatedAPY',
          icon: (
            <div>
              <Image src={Revenue} alt="Revenue" width={40} height={40} />
            </div>
          ),
        }
      : {
          price: <NumberDisplay value={currentAPY} options="percent" />,
          title: 'currentAPY',
          icon: (
            <div>
              <Image src={Revenue} alt="Revenue" width={40} height={40} />
            </div>
          ),
        },
    {
      price: <NumberDisplay value={depositors} options="number" />,
      title: 'depositors',
      icon: (
        <div>
          <Image src={User} alt="User" width={40} height={40} />
        </div>
      ),
    },
  ]

  return (
    <div>
      <Grid container spacing={2}>
        {cardList.map((card, index) => (
          <Grid item lg={4} xs={6} key={index}>
            <StatsCard card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Stats
