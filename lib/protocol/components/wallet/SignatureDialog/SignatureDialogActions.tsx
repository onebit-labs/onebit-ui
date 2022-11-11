import type { FC } from 'react'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { useWallet } from 'domains'

const ChainDialogActions: FC = () => {
  const {
    signature: { dialog, userAgreement },
  } = useWallet()
  return (
    <DialogActions sx={{ padding: 2, justifyContent: 'center' }}>
      <Button variant="GreyOutlined" size="large" onClick={() => dialog.close()}>Cancel</Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          userAgreement().then(() => dialog.close('success'))
        }}
      >
        Accept
      </Button>
    </DialogActions>
  )
}

export default ChainDialogActions
