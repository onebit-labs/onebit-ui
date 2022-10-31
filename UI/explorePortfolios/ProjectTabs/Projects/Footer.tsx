import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import NumberDisplay from 'components/math/NumberDisplay'
import { H5, Small } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'

type FooterProps = {
  totalSupply: number
  estimatedAPY: number
  currentAPY: number
  depositors: number
  symbol: string
  isOpen: boolean
}

const Footer: FC<FooterProps> = ({ totalSupply, symbol, estimatedAPY, depositors, currentAPY, isOpen }) => {
  const { t } = useTranslation('explorePortfolios')
  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      <Grid item lg={4} xs={12}>
        <Small>{t('projectCard.AUM')}</Small>
        <H5>
          <Stack spacing={1} direction="row">
            <NumberDisplay value={totalSupply} options="number" />
            {symbol}
          </Stack>
        </H5>
      </Grid>
      {isOpen ? (
        <Grid item lg={4} xs={12}>
          <Small>{t('projectCard.estimatedAPY')}</Small>
          <H5>
            <NumberDisplay value={estimatedAPY} options="percent" />
          </H5>
        </Grid>
      ) : (
        <Grid item lg={4} xs={12}>
          <Small>{t('projectCard.currentAPY')}</Small>
          <H5>
            <NumberDisplay value={currentAPY} options="percent" />
          </H5>
        </Grid>
      )}
      <Grid item lg={4} xs={12}>
        <Small>{t('projectCard.depositors')}</Small>
        <H5>
          <NumberDisplay value={depositors} options="number" />
        </H5>
      </Grid>
    </Grid>
  )
}

export default Footer