import type { FC } from 'react'
import { Line } from 'react-chartjs-2'
import type { TotalEquityValueChartProps } from './types'

const Chart: FC<TotalEquityValueChartProps> = (props) => {
  return <Line {...props} />
}

export default Chart
