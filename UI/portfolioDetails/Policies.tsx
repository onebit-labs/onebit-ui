import type { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { H3, H4, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'
import TimePeriod from 'components/date/TimePeriod'

const data = {
  id: 'Onebit-USDT-1',
  portfolioName: 'Onebit主观1号',
  symbol: 'USDT',
  lockTime: 90,
  purchaseBeginTimestamp: 1666860043779,
  purchaseEndTimestamp: 1666946540015,
  status: 'open',
  purchaseUpperLimit: 500000,
  totalSupply: 12345,
  estimatedAPY: 0.1212,
  currentAPY: 0.1202,
  depositors: 15,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. elit, sed do eiusmod tempor ut labore et dolore, magna aliqua. sed do eiusmod tempor ut labore.',
  yourEquity: 35.12,
  PNL: 1.1233,
  previousPNL: 1.11,
}

const Policies: FC = () => {
  const { t } = useTranslation('portfolioDetails')
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <H3>{t('policies.title')}</H3>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('policies.openPeriod')}</Paragraph>
            <H4>7 Day</H4>
            <TimePeriod color="text.secondary" start={data.purchaseBeginTimestamp} end={data.purchaseEndTimestamp} />
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('policies.lockUpPeriod')}</Paragraph>
            <H4>90 Day</H4>
            <TimePeriod color="text.secondary" start={data.purchaseBeginTimestamp} end={data.purchaseEndTimestamp} />
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('fees.fundraisingCap')}</Paragraph>
            <H4>5M USDT</H4>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('fees.minimumDeposit')}</Paragraph>
            <H4>100 USDT</H4>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('fees.reInvestment')}</Paragraph>
            <H4>Auto</H4>
          </Stack>
          <Paragraph>{t('fees.description')}</Paragraph>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Policies
