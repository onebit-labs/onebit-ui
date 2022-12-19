import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useMemo } from 'react'
import Image from 'next/image'
import NumberDisplay from 'lib/math/components/NumberDisplay'

import File from './icons/file.svg'
import Money from './icons/money.svg'
import Revenue from './icons/revenue.svg'
import User from './icons/user.svg'

import StatsCard from './StatsCard'
import { usePortfolio } from 'domains/data'
import { toBN } from 'lib/math'

const Stats: FC = () => {
  const { portfolioData } = usePortfolio()

  const { depositors, portfolios, assetsUnderManagement, totalProfit } = useMemo(() => {
    const totalDepositors = new Set<string>()
    let assetsUnderManagement = toBN(0)
    let totalProfit = toBN(0)
    portfolioData.map(({ depositorList, totalSupplyByAPIInUSD, netValueByAPI }) => {
      if (depositorList) depositorList.forEach((depositor) => totalDepositors.add(depositor))
      const assets = totalSupplyByAPIInUSD
      assetsUnderManagement = assetsUnderManagement.plus(assets)
      totalProfit = totalProfit.plus(assets.multipliedBy(netValueByAPI.minus(1)))
    })

    const returnValue = {
      depositors: totalDepositors.size,
      portfolios: portfolioData.length,
      assetsUnderManagement,
      totalProfit,
    }

    return returnValue
  }, [portfolioData])

  const cardList = useMemo(
    () => [
      {
        price: <NumberDisplay value={assetsUnderManagement} options="USD" abbreviate={{}} />,
        title: 'assetsUnderManagement',
        icon: (
          <div>
            <Image src={Revenue} alt="Revenue" />
          </div>
        ),
      },
      {
        price: <NumberDisplay value={totalProfit} options="USD" abbreviate={{}} />,
        title: 'totalProfitSinceInception',
        icon: (
          <div>
            <Image src={Money} alt="Money" />
          </div>
        ),
      },
      {
        price: <NumberDisplay value={portfolios} options="number" />,
        title: 'portfolios',
        icon: (
          <div>
            <Image src={File} alt="File" />
          </div>
        ),
      },
      {
        price: <NumberDisplay value={depositors} options="number" />,
        title: 'depositors',
        icon: (
          <div>
            <Image src={User} alt="User" />
          </div>
        ),
      },
    ],
    [assetsUnderManagement, depositors, portfolios, totalProfit]
  )

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      {cardList.map((card, index) => (
        <Grid item lg={3} sm={6} xs={12} key={index}>
          <StatsCard card={card} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Stats
