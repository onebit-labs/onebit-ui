import type { FC } from 'react'
import Dialog from '@mui/material/Dialog'

import { ROOT } from 'styles/dialog'
import { useWallet } from 'domains'

import SignatureDialogCloseIconButton from './SignatureDialogCloseIconButton'
import SignatureDialogTitle from './SignatureDialogTitle'
import SignatureDialogContent from './SignatureDialogContent'
import SignatureDialogActions from './SignatureDialogActions'

const SignatureDialog: FC = () => {
  const {
    signature: {
      dialog: { visible, close },
    },
  } = useWallet()

  return (
    <Dialog onClose={close} open={visible}>
      <ROOT>
        <SignatureDialogCloseIconButton />
        <SignatureDialogTitle />
        <SignatureDialogContent />
        <SignatureDialogActions />
      </ROOT>
    </Dialog>
  )
}

export default SignatureDialog
