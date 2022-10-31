import type { MouseEvent } from 'react'
import { useState, useMemo, useRef } from 'react'
import { useTheme, alpha } from '@mui/material/styles'

import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

import type { NetValueChartProps } from './types'
import type { Portfolio } from 'domains/data/portfolio'

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

type ChartProps = Portfolio
export const useChart = (portfolio: ChartProps) => {
  const lineChart = useRef({ width: 0, height: 0, gradient: undefined })
  const theme = useTheme()
  const dayButton = useDayButton()

  const data = useMemo(() => {
    if (portfolio.portfolioDaily.length <= 7) return portfolio.portfolioDaily
    return portfolio.portfolioDaily.slice(portfolio.portfolioDaily.length - 7, portfolio.portfolioDaily.length)
  }, [portfolio.portfolioDaily])

  const currentNetValue = useMemo(() => safeGet(() => data[data.length - 1].y) || 0, [data])

  const change24 = useMemo(() => {
    return (
      safeGet(() =>
        toBN(data[data.length - 1].y)
          .div(data[data.length - 2].y)
          .minus(1)
      ) || 0
    )
  }, [data])

  const change7d = useMemo(() => {
    return (
      safeGet(() =>
        toBN(data[data.length - 1].y)
          .div(data[0].y)
          .minus(1)
      ) || 0
    )
  }, [data])

  const lineColor = useMemo(() => { 
    if (change7d == 0) {
      return theme.palette.grey[500]
    }
    else if (change7d.gt(0)) {
      return theme.palette.success.main
    }
    else {
      return theme.palette.error.main
    }
  }, [change7d, theme.palette.error.main, theme.palette.success.main, theme.palette.grey])

  const props = useMemo(
    () =>
    ({
      height: 86,
      data: {
        datasets: [
          {
            label: 'Net Value',
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
                gradient.addColorStop(0.5, alpha(lineColor, 0.5))
                gradient.addColorStop(1, alpha(lineColor, 1))
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
            borderWidth: 2,
            pointBorderWidth: 0,
            pointBackgroundColor: 'transparent',
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
            display: false,
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
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
    [data, lineColor]
  )

  return { props, dayButton, change24, change7d, currentNetValue }
}
