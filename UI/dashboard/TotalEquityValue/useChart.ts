import type { MouseEvent } from 'react'
import { useState, useMemo, useRef } from 'react'
import { format } from 'date-fns'
import { useTheme, alpha } from '@mui/material/styles'

import { useMath } from 'domains/utils'
import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

import type { TotalEquityValueChartProps } from './types'

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
  const { NF } = useMath()
  const lineChart = useRef({ width: 0, height: 0, gradient: undefined })
  const theme = useTheme()
  // const { nft } = useContractNFT()
  // const { oracleRecords } = useThegraph()
  const dayButton = useDayButton()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data: any = [
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 7, y: 100000 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 6, y: 200000 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 5, y: 300000 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 4, y: 400000 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 3, y: 600000 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 2, y: 500000 },
    { x: 1666844009432 - 1000 * 60 * 60 * 24 * 1, y: 700000 },
    { x: 1666844009432, y: 800000 },
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

  const lineColor = theme.palette.primary.main

  const props = useMemo(
    () =>
      ({
        height: 60,
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
                  gradient.addColorStop(0, alpha(lineColor, 0))
                  gradient.addColorStop(1, alpha(lineColor, 0.12))
                  lineChart.current = {
                    width: chartWidth,
                    height: chartHeight,
                    gradient,
                  }
                }
                return gradient
              },
              fill: 'start',
              borderColor: lineColor,
              pointBackgroundColor: lineColor,
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
                  return NF.format(context.parsed.y, NF.options('USD'))
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
                callback: (value) => format(new Date(value), 'd MMM'),
              },
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
              },
              ticks: {
                color: theme.palette.text.secondary,
                callback: (value) => NF.abbreviate(value),
              },
            },
          },
        },
      } as TotalEquityValueChartProps),
    [NF, data, lineColor, theme.palette.text.secondary]
  )

  return { props, dayButton, change24, currentTotalEquity: 1234 }
}
