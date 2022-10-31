import type { ChartProps } from 'react-chartjs-2'

export type NetValueChartProps = Omit<ChartProps<'line', any, any>, 'type'>
