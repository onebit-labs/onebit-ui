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
import { H3, H5, Span, Paragraph } from 'components/Typography'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import FundraisingProgress from 'components/project/FundraisingProgress'
import PNL from 'components/project/PNL'

import Stats from './Stats'
import FlexBetween from 'components/flexbox/FlexBetween'

import Card from '@mui/material/Card'
import { usePortfolioDetails } from 'domains/data'
import { useMemo } from 'react'
import NumberDisplay from 'lib/math/components/NumberDisplay'

const StyledCard = styled(Card)(() => ({
  position: 'relative',
}))

const PortfolioInfo: FCC = ({ children }) => {
  const { portfolio } = usePortfolioDetails()
  const data = useMemo(() => portfolio, [portfolio])
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
  const isOpen = status === 'open'

  return (
    <StyledCard>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <FlexBetween>
              <Stack spacing={1} direction="row">
                <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
                <H3>{portfolioName}</H3>
              </Stack>
              <Stack spacing={2} direction="row">
                <Button variant="contained" disabled={!isOpen} startIcon={<FileDownloadOutlinedIcon />}>
                  {t('common:wallet.btn.deposit')}
                </Button>
                <Button variant="contained" disabled={!isOpen} startIcon={<FileUploadOutlinedIcon />}>
                  {t('common:wallet.btn.withdraw')}
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
                  <NumberDisplay value={yourEquity} options="number" /> {symbol}
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
      {children}
    </StyledCard>
  )
}

export default PortfolioInfo
