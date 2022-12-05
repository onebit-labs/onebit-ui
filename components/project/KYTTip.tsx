import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Alert from '@mui/material/Alert'
import type { Portfolio } from 'domains/data/portfolio'
import { useWallet } from 'domains'

type KYTTipProps = {
  portfolio: Portfolio
}
const KYTTip: FC<KYTTipProps> = ({ portfolio: { useWhitelist, userInWhitelist } }) => {
  const { networkAccount } = useWallet()
  const { t } = useTranslation('common', { keyPrefix: 'wallet.KYT' })
  if (!networkAccount || !useWhitelist || userInWhitelist) return null

  return <Alert severity="info">{t('tip')}</Alert>
}

export default KYTTip
