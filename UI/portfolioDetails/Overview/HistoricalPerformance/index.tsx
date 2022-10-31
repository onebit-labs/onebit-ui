import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

import BasicTable from 'components/table/BasicTable'
import { H3 } from 'components/Typography'

import { useTable } from './useTable'

const PortfolioTable: FC = () => {
  const { t } = useTranslation('portfolioDetails')
  const table = useTable()

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <H3>{t('overview.historicalPerformance.title')}</H3>
          <BasicTable {...table} />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PortfolioTable
