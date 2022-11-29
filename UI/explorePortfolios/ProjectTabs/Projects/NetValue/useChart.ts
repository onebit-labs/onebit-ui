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
    if (portfolio.seriesDaily.length <= 7) return portfolio.seriesDaily
    return portfolio.seriesDaily.slice(portfolio.seriesDaily.length - 7, portfolio.seriesDaily.length)
  }, [portfolio.seriesDaily])

  const currentNetValue = useMemo(() => safeGet(() => data[data.length - 1].y) || 0, [data])

  const currentPeriodNetValueFluctuation = useMemo(() => {
    return safeGet(() => toBN(data[data.length - 1].y).minus(1)) || 0
  }, [data])

  const lineColor = useMemo(() => {
    if (currentPeriodNetValueFluctuation == 0) {
      return theme.palette.grey[500]
    } else if (currentPeriodNetValueFluctuation.gt(0)) {
      return theme.palette.success.main
    } else {
      return theme.palette.error.main
    }
  }, [currentPeriodNetValueFluctuation, theme.palette.error.main, theme.palette.success.main, theme.palette.grey])

  const props = useMemo(
    () =>
      ({
        height: 86,
        data: {
          datasets: [
            {
              label: 'Net Value',
              data,
              cubicInterpolationMode: 'monotone',
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

  return { props, dayButton, currentPeriodNetValueFluctuation, currentNetValue }
}
