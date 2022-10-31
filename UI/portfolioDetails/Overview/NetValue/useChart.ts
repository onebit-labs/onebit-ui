import type { MouseEvent } from 'react'
import { useState, useMemo, useRef } from 'react'
import { useTheme } from '@mui/material/styles'

import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

import type { NetValueChartProps } from './types'

const DayButtonList = [7, 14, 30, 90]
const useDayButton = () => {
  const [value, setValue] = useState(7)
  return {
    value,
    onChange: (event: MouseEvent<HTMLElement>, newValue: number) => {
      if (!newValue) return
      setValue(newValue)
    },
    list: DayButtonList,
  }
}

export const useChart = () => {
  const lineChart = useRef({ width: 0, height: 0, gradient: undefined })
  const theme = useTheme()
  // const { nft } = useContractNFT()
  // const { oracleRecords } = useThegraph()
  const dayButton = useDayButton()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data: any = [
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 7, y: 1 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 6, y: 2 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 5, y: 3 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 4, y: 4 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 3, y: 5 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 2, y: 6 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 1, y: 7 },
    { x: 1666844009432, y: 8 },
  ]

  const change24 = useMemo(() => {
    return (
      safeGet(() =>
        toBN(data[data.length - 1].y)
          .div(data[data.length - 2].y)
          .minus(1)
      ) || 0
    )
  }, [data])

  const props = useMemo(
    () =>
      ({
        height: 86,
        data: {
          datasets: [
            {
              label: 'test',
              data,
              backgroundColor: (context) => {
                const chart = context.chart
                const { ctx, chartArea } = chart
                if (!chartArea) return null
                const chartWidth = chartArea.right - chartArea.left
                const chartHeight = chartArea.bottom - chartArea.top
                if (!chartWidth) return null
                const { width, height } = lineChart.current
                let { gradient } = lineChart.current
                if (width !== chartWidth || height !== chartHeight) {
                  gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                  gradient.addColorStop(0, 'rgb(249, 68, 50, 0)')
                  gradient.addColorStop(0.5, 'rgba(249, 68, 50, 0.5)')
                  gradient.addColorStop(1, 'rgba(249, 68, 50, 1)')
                  lineChart.current = {
                    width: chartWidth,
                    height: chartHeight,
                    gradient,
                  }
                }
                return gradient
              },
              fill: 'start',
              borderColor: theme.palette.primary.main,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  return ` ${context.parsed.y} ETH`
                },
                title: (context) => {
                  return `${context[0].label.split(',').slice(0, -1)}`
                },
              },
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              ticks: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
            y: {
              position: 'right',
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          },
        },
      } as NetValueChartProps),
    [data, theme.palette.primary.main]
  )

  return { props, dayButton, change24, currentFloorPrice: 1234 }
}
