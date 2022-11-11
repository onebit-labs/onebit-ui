import type { FC } from 'react'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { useWallet } from 'domains'

const ChainDialogActions: FC = () => {
  const {
    signature: { dialog, userAgreement },
  } = useWallet()
  return (
    <DialogActions>
      <Button onClick={() => dialog.close()}>Cancel</Button>
      <Button
        onClick={() => {
          userAgreement().then(() => dialog.close('success'))
        }}
      >
        Subscribe
      </Button>
    </DialogActions>
  )
}

export default ChainDialogActions
