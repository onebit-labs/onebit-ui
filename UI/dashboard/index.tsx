import dynamic from 'next/dynamic'
import type { FC } from 'react'

import Stats from './Stats'
const TotalEquityValue = dynamic(() => import('./TotalEquityValue'), { ssr: false })
import Portfolios from './PortfolioTable'

const Dashboard: FC = () => {
  return (
    <>
      <Stats />
      <TotalEquityValue />
      <Portfolios />
    </>
  )
}

export default Dashboard
