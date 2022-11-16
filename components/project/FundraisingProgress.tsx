import type { FC } from 'react'
import { LinearProgress, Stack } from '@mui/material'
import { H5 } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useMath } from 'domains/utils'
import type { Portfolio } from 'domains/data/portfolio'
import { safeGet } from 'app/utils/get'
import { toBN } from 'lib/math'

type FundraisingProgressProps = Pick<Portfolio, 'softUpperLimit' | 'totalSupply' | 'symbol'>

const FundraisingProgress: FC<FundraisingProgressProps> = ({ totalSupply, softUpperLimit, symbol }) => {
  const { t } = useTranslation()
  const { NF } = useMath()
  const value = safeGet(() => totalSupply.div(softUpperLimit)) || toBN(0)
  return (
    <Stack spacing={1}>
      <H5>{t('project.fundraisingProgress.title')}</H5>
      <LinearProgress
        variant="determinate"
        value={Math.min(value.multipliedBy(100).toNumber(), 100)}
        sx={{ height: 5 }}
      />
      <H5 display="flex" justifyContent="space-between">
        <NumberDisplay value={value} options="percent" />
        <span>{`${t('project.fundraisingProgress.max')} ${NF.abbreviate(softUpperLimit)} ${symbol}`}</span>
      </H5>
    </Stack>
  )
}

export default FundraisingProgress
