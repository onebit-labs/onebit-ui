import type { FCC } from 'app/types'
import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import type { IconButtonProps } from '@mui/material/IconButton'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export const CloseIconButton: FCC<IconButtonProps> = (props) => {
  return (
    <IconButton
      {...{
        ...props,
        className: clsx(props.className, 'close-icon-btn'),
      }}
    >
      <CloseIcon />
    </IconButton>
  )
}

export const DialogCloseIconButton: FCC<IconButtonProps> = styled(CloseIconButton)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.text.disabled,
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 1,
}))

export const ToastifyCloseIconButton: FCC<IconButtonProps> = styled(CloseIconButton)(({ theme }) => ({
  color: theme.palette.text.disabled,
}))
