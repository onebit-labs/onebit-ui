import type { FC } from 'react'
import { Fragment, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import RiseOrFall from 'components/math/RiseOrFall'
import NumberDisplay from 'components/math/NumberDisplay'

import Chart from './Chart'
import { useChart } from './useChart'

const Title = styled('div')``
const SubTitle = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: 'center';
`
const Left = styled(Stack)`
  align-items: flex-end;
`
const Change24h = styled(Stack)`
  align-items: flex-end;
`
const Right = styled('div')``

const TotalEquityValue: FC = () => {
  const { t } = useTranslation('dashboard')

  const chart = useChart()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const left = useMemo(
    () => (
      <Left spacing={2} direction="row">
        <Typography variant="h5">
          <NumberDisplay value={chart.currentFloorPrice} options="USD" />
        </Typography>
        <Change24h spacing={1} direction="row">
          <RiseOrFall variant="subtitle1" value={chart.change24} displayIcon />
          <Typography variant="subtitle1" color="text.secondary">
            <span>{t('totalEquityValue.change24h')}</span>
          </Typography>
        </Change24h>
      </Left>
    ),
    [chart.change24, chart.currentFloorPrice, t]
  )

  const right = useMemo(
    () => (
      <Right>
        <ToggleButtonGroup color="primary" value={chart.dayButton.value} exclusive onChange={chart.dayButton.onChange}>
          {chart.dayButton.list.map((day) => (
            <ToggleButton value={day} key={day} size="small">
              {day}D
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Right>
    ),
    [chart.dayButton.list, chart.dayButton.onChange, chart.dayButton.value]
  )

  return (
    <Grid container spacing={4} pt={4}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h5">
                <Title>{t('totalEquityValue.title')}</Title>
              </Typography>
              {matches ? (
                <SubTitle>
                  {left}
                  {right}
                </SubTitle>
              ) : (
                <Fragment>
                  {left}
                  {right}
                </Fragment>
              )}
              <Chart {...chart.props} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TotalEquityValue
