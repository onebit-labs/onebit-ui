import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import RiseOrFall from 'lib/math/components/RiseOrFall'
import NumberDisplay from 'lib/math/components/NumberDisplay'

import Chart from './Chart'
import { useChart } from './useChart'
import { H5, H3 } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

const Left = styled(Stack)``
const Change24h = styled(Stack)``
const Right = styled(Stack)``

const TotalEquityValue: FC = () => {
  const { t } = useTranslation('dashboard')

  const chart = useChart()

  return (
    <Grid container spacing={4} pt={4}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <FlexBetween marginBottom={3} flexDirection={{ xs: 'column', sm: 'row' }}>
              <Left spacing={1}>
                <H3>{t('totalEquityValue.title')}</H3>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography variant="h5" fontWeight="600">
                    <NumberDisplay value={chart.currentTotalEquity} options="USD" />
                  </Typography>
                  <Change24h spacing={1} direction="row" alignItems="center">
                    <RiseOrFall variant="subtitle1" value={chart.change24} displayIcon>
                      <NumberDisplay
                        value={chart.change24}
                        options="percent"
                        numberFormatOptions={{ signDisplay: 'always' }}
                      />
                    </RiseOrFall>
                    <H5 color="text.secondary">{t('totalEquityValue.change24h')}</H5>
                  </Change24h>
                </Stack>
              </Left>
              <Right spacing={1}>
                <ToggleButtonGroup
                  color="primary"
                  value={chart.dayButton.value}
                  exclusive
                  onChange={chart.dayButton.onChange}
                >
                  {chart.dayButton.list.map((day) => (
                    <ToggleButton value={day} key={day}>
                      {day}D
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Right>
            </FlexBetween>
            <Chart {...chart.props} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TotalEquityValue
