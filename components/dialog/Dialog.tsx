import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import MaterialDialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import type { IconButtonProps } from '@mui/material/IconButton'

import type { FCC } from 'app/types'
import type { DialogValues } from 'app/hooks/useDialog'
import { CloseIconButton } from 'components/btn/IconButton'

const DialogCloseIconButton: FC<IconButtonProps> = styled(CloseIconButton)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.text.disabled,
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 1,
}))

const Dialog: FCC<DialogValues & { title: string }> = ({ visible, close, title, children }) => {
  return (
    <MaterialDialog open={visible} onClose={close} maxWidth={false}>
      <DialogCloseIconButton onClick={close} />
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </MaterialDialog>
  )
}

export default Dialog
