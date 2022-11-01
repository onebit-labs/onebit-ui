import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import RiseOrFall from 'lib/math/components/RiseOrFall'
import NumberDisplay from 'lib/math/components/NumberDisplay'

import Chart from './Chart'
import { useChart } from './useChart'
import { Tiny } from 'components/Typography'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import type { Portfolio } from 'domains/data/portfolio'
import type { FC } from 'react'

const Left = styled(Stack)``
const Change7d = styled(Stack)`
  display: flex;
  justify-content: end;
`
const Right = styled(Stack)`
  text-align: right;
`

type NetValueProps = Portfolio
const NetValue: FC<NetValueProps> = (props) => {
  const { t } = useTranslation('explorePortfolios')

  const chart = useChart(props)

  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="end">
        <Grid item xs={6}>
          <Left spacing={1}>
            <Typography variant="h5" fontWeight="600">
              <NumberDisplay
                value={chart.currentNetValue}
                options="number"
                numberFormatOptions={{
                  maximumFractionDigits: 4,
                }}
              />
            </Typography>
            <Tiny color="text.secondary">{t('projectCard.netValue')}</Tiny>
          </Left>
        </Grid>
        <Grid item xs={6}>
          <Right spacing={1}>
            <Change7d spacing={1} direction="row">
              <RiseOrFall variant="body2" value={chart.change24} displayIcon>
                <NumberDisplay
                  value={chart.change7d}
                  options="percent"
                  numberFormatOptions={{ signDisplay: 'always' }}
                />
              </RiseOrFall>
            </Change7d>
            <Tiny color="text.secondary">{t('projectCard.past7D')}</Tiny>
          </Right>
        </Grid>
      </Grid>
      <Chart {...chart.props} />
    </Box>
  )
}

export default NetValue
