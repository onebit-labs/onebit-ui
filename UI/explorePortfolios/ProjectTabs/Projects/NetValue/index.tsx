import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import RiseOrFall from 'components/math/RiseOrFall'
import NumberDisplay from 'components/math/NumberDisplay'

import Chart from './Chart'
import { useChart } from './useChart'
import { H5 } from 'components/Typography'
import Grid from '@mui/material/Grid'

const Left = styled(Stack)``
const Change24h = styled(Stack)``
const Right = styled(Stack)``

const NetValue = () => {
  const { t } = useTranslation('explorePortfolios')

  const chart = useChart()

  return (
    <>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid item xs={6}>
          <Left spacing={1}>
            <Typography variant="h5">
              <NumberDisplay value={chart.currentFloorPrice} options="USD" />
            </Typography>
            <H5 color="text.secondary">{t('projectCard.netValue')}</H5>
          </Left>
        </Grid>
        <Grid item xs={6}>
          <Right spacing={1}>
            <Change24h spacing={1} direction="row">
              <RiseOrFall variant="subtitle1" value={chart.change24} displayIcon />
            </Change24h>
            <H5 color="text.secondary">{t('projectCard.past7D')}</H5>
          </Right>
        </Grid>
      </Grid>
      <Chart {...chart.props} />
    </>
  )
}

export default NetValue
