import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'
import CardContent from '@mui/material/CardContent'

import TimePeriod from 'components/date/TimePeriod'
import ProjectStatus from 'components/project/status'
import { H3, H5, Span, Paragraph } from 'components/Typography'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import FundraisingProgress from 'components/project/FundraisingProgress'
import PNL from 'components/project/PNL'

import Stats from './Stats'
import FlexBetween from 'components/flexbox/FlexBetween'
import Button from '@mui/material/Button'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

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

const PortfolioInfo: FC = () => {
  const {
    status,
    portfolioName,
    symbol,
    purchaseBeginTimestamp,
    purchaseEndTimestamp,
    lockTime,
    description,
    yourEquity,
  } = data
  const { t } = useTranslation('portfolioDetails')

  return (
    <CardContent>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <FlexBetween>
            <Stack spacing={1} direction="row">
              <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
              <H3>{portfolioName}</H3>
            </Stack>
            <Stack spacing={2} direction="row">
              <Button variant="contained" startIcon={<FileDownloadOutlinedIcon />}>
                {t('actions.deposit')}
              </Button>
              <Button variant="contained" startIcon={<FileUploadOutlinedIcon />}>
                {t('actions.withdraw')}
              </Button>
            </Stack>
          </FlexBetween>

          <Stack spacing={2} direction="row" alignItems="center">
            <H5 color="text.secondary">
              <span>{t('info.status')}: </span>
              <ProjectStatus status={status} />
            </H5>
            <H5 color="text.secondary">
              <span>{t('info.term')}: </span>
              <TimePeriod start={purchaseBeginTimestamp} end={purchaseEndTimestamp} />
            </H5>
            <H5 color="text.secondary">{`${t('info.lockUpPeriod')}: ${lockTime} ${t('info.days')}`}</H5>
            <H5 color="text.secondary">
              {t('info.standard')}: {symbol}
            </H5>
          </Stack>
          <Stack spacing={2} direction="row" alignItems="center">
            <H5 color="text.secondary">
              <span>{t('info.yourEquity')}: </span>
              <Span color="text.primary">
                {yourEquity} {symbol}
              </Span>
            </H5>
            <H5 color="text.secondary">
              <Stack spacing={1} direction="row" alignItems="center">
                <span>{t('info.PNL')}:</span>
                <PNL {...data} />
                {/* display="flex" justifyContent="center" alignItems="center" */}
              </Stack>
            </H5>
          </Stack>
        </Stack>
        {description && <Paragraph color="text.secondary">{description}</Paragraph>}
        <FundraisingProgress {...data} />
        <Stats {...data} />
      </Stack>
    </CardContent>
  )
}

export default PortfolioInfo
