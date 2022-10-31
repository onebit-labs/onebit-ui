import type { FC } from 'react'
import { Line } from 'react-chartjs-2'
import type { TotalEquityValueChartProps } from './types'

const Chart: FC<TotalEquityValueChartProps> = (props) => {
  if (__SERVER__) return null
  return <Line {...props} />
}

export default Chart
