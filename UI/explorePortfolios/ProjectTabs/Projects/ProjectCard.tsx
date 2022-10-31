import { useTranslation } from 'next-i18next'
import { Stack, Card, styled, CardContent, Grid } from '@mui/material'
import { H3, H5 } from 'components/Typography'
import type { FC } from 'react'
import dynamic from 'next/dynamic'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import TimePeriod from 'components/date/TimePeriod'

import FundraisingProgress from './FundraisingProgress'
import Footer from './Footer'
import ProjectStatus from 'components/project/status'

const NetValue = dynamic(() => import('./NetValue'), { ssr: false })

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

type ProjectCardProps = {
  portfolioName: string
  symbol: string
  lockTime: number
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  status: string
  progress: number
  purchaseUpperLimit: number
  totalSupply: number
  estimatedAPY: number
  currentAPY: number
  deposits: number
}

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

            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <H5>{`${t('projectCard.lockUpPeriod')}: ${lockTime} ${t('projectCard.days')}`}</H5>
                <H5 color="text.secondary">
                  <TimePeriod start={purchaseBeginTimestamp} end={purchaseEndTimestamp} />
                </H5>
              </Grid>
              <Grid item lg={6} xs={12}>
                <ProjectStatus status={status} />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
        {isOpen ? <FundraisingProgress {...props} /> : <NetValue />}
        <Footer {...props} isOpen={isOpen} />
      </CardContent>
    </StyledCard>
  )
}

export default ProjectCard
