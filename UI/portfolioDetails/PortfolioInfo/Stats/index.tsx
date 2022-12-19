import { Grid } from '@mui/material'
import type { FC } from 'react'
import Image from 'next/image'

import Money from './icons/money.svg'
import Revenue from './icons/revenue.svg'
import User from './icons/user.svg'
import Deposit from './icons/deposit.svg'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import type { Portfolio } from 'domains/data/portfolio'

type StatsProps = Portfolio

const Stats: FC<StatsProps> = ({
  symbol,
  status,
  totalSupplyByCalculate,
  estimatedAPY,
  currentAPYByCalculate,
  depositors,
  initialDeposit,
}) => {
  const isOpen = status === 'open'

  const cardList = [
    {
      price: (
        <div>
          <NumberDisplay value={totalSupplyByCalculate} abbreviate={{}} symbol={symbol} />
        </div>
      ),
      title: 'assetsUnderManagement',
      icon: <Image src={Money} alt="Money" width={40} height={40} />,
    },
    isOpen
      ? {
          price: estimatedAPY,
          title: 'estimatedAPY',
          icon: <Image src={Revenue} alt="Revenue" width={40} height={40} />,
        }
      : {
          price: <NumberDisplay value={currentAPYByCalculate} options="percent" min={0} />,
          title: 'estimatedAPY',
          icon: <Image src={Revenue} alt="Revenue" width={40} height={40} />,
        },
    {
      price: <NumberDisplay value={depositors} options="number" />,
      title: 'depositors',
      icon: <Image src={User} alt="User" width={40} height={40} />,
    },
    {
      price: (
        <div>
          <NumberDisplay value={initialDeposit} abbreviate={{}} symbol={symbol} />
        </div>
      ),
      title: 'initDeposit',
      icon: <Image src={Deposit} alt="User" width={40} height={40} />,
    },
  ]

  return (
    <div>
      <Grid container spacing={2}>
        {cardList.map((card, index) => (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <StatsCard card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Stats
