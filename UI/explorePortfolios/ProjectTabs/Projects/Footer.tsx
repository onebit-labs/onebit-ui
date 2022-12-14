import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { H5, Tiny } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { Box } from '@mui/material'
import type { Portfolio } from 'domains/data/portfolio'

type FooterProps = Portfolio & {
  isOpen: boolean
}

const Footer: FC<FooterProps> = ({
  totalSupplyByCalculate,
  symbol,
  estimatedAPY,
  depositors,
  currentAPYByCalculate,
  isOpen,
}) => {
  const { t } = useTranslation('explorePortfolios')
  return (
    <Box>
      <Grid container>
        <Grid item lg={4} xs={12}>
          <Tiny>{t('projectCard.AUM')}</Tiny>
          <H5>
            <NumberDisplay value={totalSupplyByCalculate} abbreviate={{}} symbol={symbol} />
          </H5>
        </Grid>
        {isOpen ? (
          <Grid item lg={4} xs={12}>
            <Tiny>{t('projectCard.estimatedAPY')}</Tiny>
            <H5>{estimatedAPY}</H5>
          </Grid>
        ) : (
          <Grid item lg={4} xs={12}>
            <Tiny>{t('projectCard.estimatedAPY')}</Tiny>
            <H5>
              <NumberDisplay value={currentAPYByCalculate} min={0} options="percent" />
            </H5>
          </Grid>
        )}
        <Grid item lg={4} xs={12}>
          <Tiny>{t('projectCard.depositors')}</Tiny>
          <H5>
            <NumberDisplay value={depositors} options="number" />
          </H5>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
