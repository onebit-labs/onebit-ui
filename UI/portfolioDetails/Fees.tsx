import type { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { H3, H4, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'
import { usePortfolioDetails } from 'domains/data'
import NumberDisplay from 'lib/math/components/NumberDisplay'

const Fees: FC = () => {
  const { t } = useTranslation('portfolioDetails')
  const { portfolio } = usePortfolioDetails()
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <H3>{t('fees.title')}</H3>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Paragraph color="text.primary">{t('fees.management.title')}</Paragraph>
              <H4>
                <NumberDisplay
                  value={portfolio.managementFeeRate}
                  options="percent"
                  numberFormatOptions={{ minimumFractionDigits: 0 }}
                />
              </H4>
              <Paragraph color="text.secondary">{t('fees.management.description')}</Paragraph>
              {/* <Paragraph color="text.secondary">{t('fees.management.tip')}</Paragraph> */}
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Paragraph color="text.primary">{t('fees.performance.title')}</Paragraph>
              <H4>
                <NumberDisplay
                  value={portfolio.performanceFeeRate}
                  options="percent"
                  numberFormatOptions={{ minimumFractionDigits: 0 }}
                />
              </H4>
              <Paragraph color="text.secondary">{t('fees.performance.description')}</Paragraph>
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('fees.entrance.title')}</Paragraph>
            <H4>None</H4>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('fees.exit.title')}</Paragraph>
            <H4>None</H4>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Fees
