import type { FC } from 'react'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { useWallet } from 'domains'
import { useTranslation } from 'next-i18next'

const ChainDialogActions: FC = () => {
  const {
    signature: { dialog, userAgreement },
  } = useWallet()
  const { t } = useTranslation('common')

  return (
    <DialogActions sx={{ padding: 2, justifyContent: 'center' }}>
      <Button variant="GreyOutlined" size="large" onClick={() => dialog.close()}>
        {t('wallet.signature.decline')}
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          userAgreement().then(() => dialog.close('success'))
        }}
      >
        {t('wallet.signature.accept')}
      </Button>
    </DialogActions>
  )
}

export default ChainDialogActions
