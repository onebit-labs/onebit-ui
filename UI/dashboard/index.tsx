import dynamic from 'next/dynamic'
import type { FC } from 'react'
import Head from 'next/head'

import Stats from './Stats'
const TotalEquityValue = dynamic(() => import('./TotalEquityValue'), { ssr: false })
import Portfolios from './PortfolioTable'

const Dashboard: FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Onebit</title>
      </Head>
      <Stats />
      <TotalEquityValue />
      <Portfolios />
    </>
  )
}

export default Dashboard
