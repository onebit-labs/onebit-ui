import Stack from '@mui/material/Stack'
import type { FC } from 'react'

import HistoricalPerformance from './HistoricalPerformance'
import NetValue from './NetValue'
import HistoricalAccumulativeNetValue from './HistoricalAccumulativeNetValue'

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
