import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { Stack, Card, styled, CardContent, Box } from '@mui/material'
import { H3, H5 } from 'components/Typography'
import type { Portfolio } from 'domains/data/portfolio'
import dynamic from 'next/dynamic'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import TimePeriod from 'components/date/TimePeriod'
import FlexBetween from 'components/flexbox/FlexBetween'
import ProjectStatus from 'components/project/status'
import FundraisingProgress from 'components/project/FundraisingProgress'

import Footer from './Footer'

const NetValue = dynamic(() => import('./NetValue'), { ssr: false })

const StyledCard = styled(Card)(({ theme }) => ({
  alignItems: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

type ProjectCardProps = Portfolio

const ProjectCard: FC<React.PropsWithChildren<ProjectCardProps>> = (props) => {
  const { status, portfolioName, symbol, purchaseBeginTimestamp, purchaseEndTimestamp, lockTime } = props
  const { t } = useTranslation('explorePortfolios')

  const isOpen = status === 'open'

  return (
    <StyledCard>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Stack spacing={1} direction="row">
              <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
              <H3>{portfolioName}</H3>
            </Stack>

            <FlexBetween>
              <Stack spacing={1}>
                <H5>{`${t('projectCard.lockUpPeriod')}: ${lockTime} ${t('projectCard.days')}`}</H5>
                <H5 color="text.secondary">
                  <TimePeriod start={purchaseBeginTimestamp} end={purchaseEndTimestamp} />
                </H5>
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
