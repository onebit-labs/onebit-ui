import type { FC } from 'react'
import { Line } from 'react-chartjs-2'
import type { NetValueChartProps } from './types'

const Chart: FC<NetValueChartProps> = (props) => {
  return <Line {...props} />
}

export default Chart
