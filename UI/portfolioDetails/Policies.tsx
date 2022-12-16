import type { FC } from 'react'
import { useMemo } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { H3, H4, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'
import TimePeriod from 'components/date/TimePeriod'
import { usePortfolioDetails } from 'domains/data'
import NumberDisplay from 'lib/math/components/NumberDisplay'

const Policies: FC = () => {
  const { t } = useTranslation('portfolioDetails')
  const { portfolio } = usePortfolioDetails()
  const data = useMemo(() => portfolio, [portfolio])
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <H3>{t('policies.title')}</H3>
          {/* <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('policies.openPeriod')}</Paragraph>
            <H4>7 Day</H4>
            <TimePeriod color="text.secondary" start={data.purchaseEndTimestamp} end={data.redemptionBeginTimestamp} />
          </Stack> */}
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('policies.lockUpPeriod')}</Paragraph>
            <H4>{portfolio.lockTime} Day</H4>
            <TimePeriod color="text.secondary" start={data.purchaseEndTimestamp} end={data.redemptionBeginTimestamp} />
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('policies.softUpperLimit')}</Paragraph>
            <H4>
              <NumberDisplay value={portfolio.softUpperLimit} abbreviate={{}} />
              <span> {portfolio.symbol}</span>
            </H4>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('policies.fundraisingCap')}</Paragraph>
            <H4>
              <NumberDisplay value={portfolio.purchaseUpperLimit} abbreviate={{}} />
              <span> {portfolio.symbol}</span>
            </H4>
          </Stack>
          {/* <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('policies.minimumDeposit')}</Paragraph>
            <H4>100 USDT</H4>
          </Stack> */}
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('policies.reInvestment')}</Paragraph>
            <H4>{t('policies.auto')}</H4>
            <Paragraph color="text.secondary">{t('policies.reInvestmentTip')}</Paragraph>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('policies.riskControlLine')}</Paragraph>
            <H4>{`${t('policies.netValue')} = ${portfolio.riskControlLine}`}</H4>
            <Paragraph color="text.secondary">{t('policies.riskControlLineTip')}</Paragraph>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.primary">{t('policies.redemption')}</Paragraph>
            <Paragraph color="text.secondary">{t('policies.redemptionTip')}</Paragraph>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Policies
