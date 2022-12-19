import type { MouseEvent } from 'react'
import { useState, useMemo, useRef } from 'react'
import { format } from 'date-fns'
import { useTheme, alpha } from '@mui/material/styles'

import { usePortfolio } from 'domains/data'
import { useMath } from 'domains/utils'
import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

import type { TotalEquityValueChartProps } from './types'
const DayButtonList = [7, 30, 90, 365]
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
  const {
    portfolioUserData: {
      dashboard: { portfolioUserData, totalEquityValue },
    },
  } = usePortfolio()
  const dayButton = useDayButton()

  const dataSource = useMemo(() => {
    if (!portfolioUserData) return []
    const map = {} as Record<number, BN>
    portfolioUserData.forEach(({ netValues, scaledBalanceOf, oracle }) => {
      const scaledBalanceOfInUSD = scaledBalanceOf.multipliedBy(oracle)
      netValues.forEach(({ createTimestamp, reserveNormalizedIncome }) => {
        const value = scaledBalanceOfInUSD.multipliedBy(reserveNormalizedIncome)
        if (!map[createTimestamp]) map[createTimestamp] = toBN(0)
        map[createTimestamp] = map[createTimestamp].plus(value)
      })
    })
    const returnValue = Object.entries(map)
      .map(([x, y]) => ({ x: parseInt(x), y: y.toNumber() }))
      .sort((a, b) => a.x - b.x)
    return returnValue
  }, [portfolioUserData])

  const data = useMemo(() => {
    const returnValue = dataSource || []
    const { length } = returnValue
    if (length < dayButton.value) return returnValue
    const startIndex = length - dayButton.value
    return returnValue.slice(startIndex, length)
  }, [dataSource, dayButton.value])

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

  return { props, dayButton, change24, currentTotalEquity: totalEquityValue }
}
