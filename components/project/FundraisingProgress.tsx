import type { FC } from 'react'
import { LinearProgress, Stack } from '@mui/material'
import { H4 } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useMath } from 'domains/utils'

type FundraisingProgressProps = {
  purchaseUpperLimit: number
  totalSupply: number
  symbol: string
}

const FundraisingProgress: FC<FundraisingProgressProps> = ({ totalSupply, purchaseUpperLimit, symbol }) => {
  const { t } = useTranslation()
  const { NF } = useMath()
  const value = totalSupply / purchaseUpperLimit
  return (
    <Stack spacing={1}>
      <H4>{t('project.fundraisingProgress.title')}</H4>
      <LinearProgress variant="determinate" value={value * 100} />
      <H4 display="flex" justifyContent="space-between">
        <NumberDisplay value={value} options="percent" />
        <span>{`${t('project.fundraisingProgress.max')} ${NF.abbreviate(purchaseUpperLimit)} ${symbol}`}</span>
      </H4>
    </Stack>
  )
}

export default FundraisingProgress
