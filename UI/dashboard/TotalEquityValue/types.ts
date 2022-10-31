import type { ChartProps } from 'react-chartjs-2'

export type TotalEquityValueChartProps = Omit<ChartProps<'line', any, any>, 'type'>
