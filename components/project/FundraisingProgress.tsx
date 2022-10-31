import type { FC } from 'react'
import { LinearProgress, Stack } from '@mui/material'
import { H4 } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useMath } from 'domains/utils'
import type { Portfolio } from 'domains/data/portfolio'
import { safeGet } from 'app/utils/get'
import { toBN } from 'lib/math'

type FundraisingProgressProps = Pick<Portfolio, 'purchaseUpperLimit' | 'totalSupply' | 'symbol'>

const FundraisingProgress: FC<FundraisingProgressProps> = ({ totalSupply, purchaseUpperLimit, symbol }) => {
  const { t } = useTranslation()
  const { NF } = useMath()
  const value = safeGet(() => totalSupply.div(purchaseUpperLimit)) || toBN(0)
  return (
    <Stack spacing={1}>
      <H4>{t('project.fundraisingProgress.title')}</H4>
      <LinearProgress variant="determinate" value={value.multipliedBy(100).toNumber()} />
      <H4 display="flex" justifyContent="space-between">
        <NumberDisplay value={value} options="percent" />
        <span>{`${t('project.fundraisingProgress.max')} ${NF.abbreviate(purchaseUpperLimit)} ${symbol}`}</span>
      </H4>
    </Stack>
  )
}

export default FundraisingProgress
