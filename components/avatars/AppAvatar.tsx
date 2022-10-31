import type { AvatarProps } from '@mui/material'
import { Avatar, styled } from '@mui/material'
import type { FC } from 'react'

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderColor: theme.palette.common.white,
  borderWidth: 1,
}))

const AppAvatar: FC<React.PropsWithChildren<AvatarProps>> = (props) => {
  return <StyledAvatar {...props} />
}

export default AppAvatar
