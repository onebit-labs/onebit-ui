import { Stack } from '@mui/material'
import { H3, Tiny } from 'components/Typography'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

// root component interface
interface StatsCardProps {
  card: any
}

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, price, icon } = card
  const { t } = useTranslation('portfolioDetails')

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      {icon}
      <Stack>
        <H3>{price}</H3>
        <Tiny color="text.secondary">{t(`info.stats.${title}`)}</Tiny>
      </Stack>
    </Stack>
  )
}

export default StatsCard
