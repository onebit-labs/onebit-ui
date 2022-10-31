import dynamic from 'next/dynamic'
import type { FC } from 'react'

import Stats from './Stats'
const TotalEquityValue = dynamic(() => import('./TotalEquityValue'), { ssr: false })
import PortfolioTable from './PortfolioTable'

const Dashboard: FC = () => {
  return (
    <>
      <Stats />
      <TotalEquityValue />
      <PortfolioTable />
    </>
  )
}

export default Dashboard
