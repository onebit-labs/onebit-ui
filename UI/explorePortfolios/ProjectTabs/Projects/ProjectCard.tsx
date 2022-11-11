import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { Stack, Card, styled, CardContent, Box } from '@mui/material'
import { H3, Small } from 'components/Typography'
import type { Portfolio } from 'domains/data/portfolio'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import TimePeriod from 'components/date/TimePeriod'
import FlexBetween from 'components/flexbox/FlexBetween'
import ProjectStatus from 'components/project/status'
import FundraisingProgress from 'components/project/FundraisingProgress'

import NetValue from './NetValue'
import Footer from './Footer'

const StyledCard = styled(Card)(({ theme }) => ({
  alignItems: 'center',
  height: '100%',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

type ProjectCardProps = Portfolio

const ProjectCard: FC<React.PropsWithChildren<ProjectCardProps>> = (props) => {
  const { status, portfolioName, symbol, purchaseEndTimestamp, redemptionBeginTimestamp, lockTime } = props
  const { t } = useTranslation('explorePortfolios')

  const isOpen = status === 'open'

  return (
    <StyledCard>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Stack spacing={1} direction="row" alignItems="center">
              <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
              <H3 ellipsis>{portfolioName}</H3>
            </Stack>

            <FlexBetween alignItems="start">
              <Stack spacing={1}>
                <Small>{`${t('projectCard.lockUpPeriod')}: ${lockTime} ${t('projectCard.days')}`}</Small>
                <TimePeriod start={purchaseEndTimestamp} end={redemptionBeginTimestamp} color="text.secondary" />
              </Stack>
              <ProjectStatus status={status} />
            </FlexBetween>
          </Stack>
          {isOpen ? (
            <Box sx={{ padding: '40px 0' }}>
              <FundraisingProgress {...props} />{' '}
            </Box>
          ) : (
            <NetValue {...props} />
          )}
          <Footer {...props} isOpen={isOpen} />
        </Stack>
      </CardContent>
    </StyledCard>
  )
}

export default ProjectCard
