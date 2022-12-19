import type { FCC } from 'app/types'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

import TimePeriod from 'components/date/TimePeriod'
import ProjectStatus from 'components/project/status'
import { H2, H5, Span, Paragraph } from 'components/Typography'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import FundraisingProgress from 'components/project/FundraisingProgress'
import PNL from 'components/project/PNL'

import Stats from './Stats'
import FlexBetween from 'components/flexbox/FlexBetween'

import Card from '@mui/material/Card'
import { usePortfolioDetails } from 'domains/data'
import { useMemo } from 'react'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useDialogs } from 'UI/dialogs'
import { useWallet } from 'domains'
import LinkToAddress from 'components/button/LinkToAddress'
import Head from 'next/head'

const StyledCard = styled(Card)(() => ({
  position: 'relative',
}))

const PortfolioInfo: FCC = ({ children }) => {
  const { deposit, withdraw } = useDialogs()
  const { portfolio } = usePortfolioDetails()
  const data = useMemo(() => portfolio, [portfolio])
  const { id, status, portfolioName, symbol, purchaseEndTimestamp, redemptionBeginTimestamp, lockTime, yourEquity } =
    data
  const { t } = useTranslation('portfolioDetails')
  const { networkAccount } = useWallet()
  const title = `${portfolioName} | Onebit`

  return (
    <StyledCard>
      <Head>
        <title>{title}</title>
      </Head>
      <CardContent>
        <Stack spacing={3}>
          <Stack spacing={2}>
            <FlexBetween flexDirection={{ xs: 'column', sm: 'row' }}>
              <Stack spacing={1} direction="row" alignItems="center">
                <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
                <H2>{portfolioName}</H2>
              </Stack>
              <Stack spacing={2} direction="row" margin={{ xs: 2, sm: 0 }}>
                <Button
                  variant="contained"
                  disabled={status === 'lockedUp' || status === 'close'}
                  startIcon={<FileDownloadOutlinedIcon />}
                  onClick={() => {
                    deposit.open(id)
                  }}
                >
                  {t('common:wallet.btn.deposit')}
                </Button>
                <Button
                  variant="contained"
                  disabled={status === 'lockedUp'}
                  startIcon={<FileUploadOutlinedIcon />}
                  onClick={() => {
                    withdraw.open(id)
                  }}
                >
                  {t('common:wallet.btn.withdraw')}
                </Button>
              </Stack>
            </FlexBetween>

            <Stack
              spacing={{ xs: 2, sm: 6 }}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'start', sm: 'center' }}
            >
              <Span color="text.secondary">
                <span>{t('info.status')}: </span>
                <ProjectStatus status={status} />
              </Span>
              <Span color="text.secondary">
                <span>{t('info.term')}: </span>
                <TimePeriod start={purchaseEndTimestamp} end={redemptionBeginTimestamp} />
              </Span>
              <Span color="text.secondary">{`${t('info.lockUpPeriod')}: ${lockTime} ${t('info.days')}`}</Span>
              <Span color="text.secondary">
                {t('info.standard')}: {symbol}
              </Span>
              {portfolio && portfolio.address && (
                <Span color="text.secondary">
                  {t('info.contract')}: {<LinkToAddress address={portfolio.address.Vault} />}
                </Span>
              )}
            </Stack>
            {networkAccount && yourEquity && yourEquity.gt(0) && (
              <Stack
                spacing={2}
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'start', sm: 'center' }}
                bgcolor="grey.100"
                padding={2}
              >
                <H5 color="text.secondary">
                  <Stack spacing={1} direction="row" alignItems="center">
                    <span>{t('info.yourEquity')}: </span>
                    <Span color="text.primary" fontSize={16}>
                      <NumberDisplay value={yourEquity} symbol={symbol} />
                    </Span>
                  </Stack>
                </H5>
                <H5 color="text.secondary">
                  <Stack spacing={1} direction="row" alignItems="center">
                    <span>{t('info.PNL')}:</span>
                    <PNL {...data} />
                    {/* display="flex" justifyContent="center" alignItems="center" */}
                  </Stack>
                </H5>
              </Stack>
            )}
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('info.description.' + id + '.main')}</Paragraph>
            <Paragraph color="text.secondary">{t('info.description.investmentRationale')}</Paragraph>
            <Paragraph color="text.secondary">{t('info.description.' + id + '.investmentRationale.0')}</Paragraph>
            <Paragraph color="text.secondary">{t('info.description.' + id + '.investmentRationale.1')}</Paragraph>
          </Stack>
          {status === 'open' && <FundraisingProgress {...data} />}
          <Stats {...data} />
        </Stack>
      </CardContent>
      {children}
    </StyledCard>
  )
}

export default PortfolioInfo
