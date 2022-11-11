import type { FC } from 'react'

import { DialogCloseIconButton } from 'components/btn/IconButton'

import { useWallet } from 'domains'

const ChainDialogCloseIconButton: FC = () => {
  const {
    signature: {
      dialog: { close },
    },
  } = useWallet()

  return <DialogCloseIconButton onClick={close} />
}

export default ChainDialogCloseIconButton
