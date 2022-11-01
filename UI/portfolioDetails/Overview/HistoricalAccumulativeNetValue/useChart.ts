import type { MouseEvent } from 'react'
import { useState, useMemo, useRef } from 'react'
import { useTheme, alpha } from '@mui/material/styles'
import { usePortfolioDetails } from 'domains/data'
import { format } from 'date-fns'

import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

import type { NetValueChartProps } from './types'
import { useMath } from 'domains/utils'

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
  const { portfolio } = usePortfolioDetails()

  const data = useMemo(() => {
    const returnValue = portfolio.seriesDaily || []
    const { length } = returnValue
    if (length < dayButton.value) return returnValue
    const startIndex = length - dayButton.value
    return returnValue.slice(startIndex, length)
  }, [dayButton.value, portfolio.seriesDaily])
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

  const lineColor = theme.palette.primary.main

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
                title: (context) => {
                  return `${context[0].label.split(',').slice(0, -1)}`
                },
                label: (context) => {
                  return NF.format(context.parsed.y, NF.options('number', { maximumFractionDigits: 7 }))
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
                callback: (value) => NF.format(value, NF.options('number', { maximumFractionDigits: 3 })),
              },
            },
          },
        },
      } as NetValueChartProps),
    [NF, data, lineColor, theme.palette.text.secondary]
  )

  return { props, dayButton, change24, currentNetValue }
}
