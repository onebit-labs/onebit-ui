import { Stack, Card, styled, CardContent } from '@mui/material'
import { H2, H5 } from 'components/Typography'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import Tooltip from '@mui/material/Tooltip'

// root component interface
interface StatsCardProps {
  card: any
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, price, tip } = card
  const { t } = useTranslation('dashboard')

  return (
    <StyledCard>
      <CardContent sx={{ width: 1 }}>
        <Stack spacing={1}>
          {!tip ? <H5 color="text.secondary">{t(`stats.${title}`)}</H5>
            : <Tooltip title={t('stats.tip')} placement='top'>
              <Stack direction="row" alignItems="center" spacing={1} color="text.secondary">
                <H5 color="text.secondary">{t(`stats.${title}`)}</H5>
                <HelpOutlinedIcon fontSize="inherit" />
              </Stack>
            </Tooltip>}
          <H2>{price}</H2>
        </Stack>
      </CardContent>
    </StyledCard>
  )
}

export default StatsCard
