import Stack from '@mui/material/Stack'
import dynamic from 'next/dynamic'
import type { FC } from 'react'

import HistoricalPerformance from './HistoricalPerformance'
const NetValue = dynamic(() => import('./NetValue'), { ssr: false })
const HistoricalAccumulativeNetValue = dynamic(() => import('./HistoricalAccumulativeNetValue'), { ssr: false })

const Overview: FC = () => {
  return (
    <Stack spacing={2}>
      <NetValue />
      <HistoricalAccumulativeNetValue />
      <HistoricalPerformance />
    </Stack>
  )
}

export default Overview
