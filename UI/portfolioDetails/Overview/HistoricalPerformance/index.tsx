import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'

import BasicTable from 'components/table/BasicTable'
import { H3 } from 'components/Typography'

import { useTable } from './useTable'

const PortfolioTable: FC = () => {
  const { t } = useTranslation('portfolioDetails')
  const table = useTable()

  return (
    <Stack spacing={2}>
      <H3>{t('overview.historicalPerformance.title')}</H3>
      <BasicTable {...table} />
    </Stack>
  )
}

export default PortfolioTable
