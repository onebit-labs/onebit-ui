import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { cellRenderer, headerRenderer } from 'components/table/renderer'
import type { TableColumnsProps, BasicTableProps } from 'components/table/BasicTable/types'
import { usePortfolioDetails } from 'domains/data'
import {
  symbolCellRenderer,
  lockUpPeriodCellRenderer,
  numberCellRenderer,
  APYCellRenderer,
} from 'components/table/renderer/portfolio'
import { returnCellRenderer } from './renderer'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'

export const useTable = (): BasicTableProps => {
  const { portfolio } = usePortfolioDetails()
  const { t } = useTranslation('portfolioDetails')
  const data = useMemo(() => {
    if (!portfolio.portfolioTerm) return []
    const { symbol } = portfolio
    return portfolio.portfolioTerm.map((portfolioTerm) => {
      const { netValue: finalNetValue, assetsUnderManagement: AUM } = portfolioTerm
      return {
        ...portfolioTerm,
        AUM,
        symbol,
        finalNetValue,
        return: finalNetValue.minus(1),
      }
    })
  }, [portfolio])

  const columns = useMemo(
    () =>
      (
        [
          {
            dataKey: 'term',
            width: 210,
            headerRenderer,
            cellRenderer,
          },
          {
            dataKey: 'lockUpPeriod',
            width: 150,
            headerRenderer,
            cellRenderer: lockUpPeriodCellRenderer,
          },
          {
            dataKey: 'AUM',
            width: 150,
            headerRenderer,
            cellRenderer: symbolCellRenderer,
          },
          {
            dataKey: 'depositors',
            width: 150,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'finalNetValue',
            width: 150,
            headerRenderer,
            cellRenderer: numberCellRenderer,
          },
          {
            dataKey: 'return',
            width: 150,
            headerRenderer,
            cellRenderer: returnCellRenderer,
          },
          {
            dataKey: 'APY',
            width: 120,
            headerRenderer,
            cellRenderer: APYCellRenderer,
          },
        ] as TableColumnsProps[]
      ).map((column) => {
        column.label = t('overview.historicalPerformance.' + column.dataKey)
        if (column.dataKey === 'finalNetValue') {
          column.label = (
            <Tooltip title={t('overview.historicalPerformance.netValueTip')}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <span>{t('overview.historicalPerformance.' + column.dataKey)}</span>
                <HelpOutlinedIcon fontSize="inherit" />
              </Stack>
            </Tooltip>
          )
        }
        return column
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  )

  return {
    columns,
    data,
  }
}
