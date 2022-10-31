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

export const ToastifyCloseIconButton: FCC<IconButtonProps> = styled(CloseIconButton)(({ theme }) => ({
  color: theme.palette.text.disabled,
}))
