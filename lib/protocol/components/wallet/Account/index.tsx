import type { FC } from 'react'
import { Fragment } from 'react'

import { textCenterEllipsis } from 'app/utils/string/text-center-ellipsis'
import { useWallet } from 'domains'
import Avatar from '@mui/material/Avatar'
import { getDefaultAvatar } from './avatar'

export const AccountAvatar: FC = () => {
  const { account } = useWallet()
  return (
    <Avatar
      alt={account}
      src={getDefaultAvatar(account)}
      sx={{
        width: 18,
        height: 18,
      }}
    />
  )
}

export const Account: FC = () => {
  const { account } = useWallet()

  return <Fragment>{textCenterEllipsis(account)}</Fragment>
}

export default Account
