import type { FC } from 'react'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import { H3, H5 } from 'components/Typography'

const ChainDialogContent: FC = () => {
  return (
    <DialogContent>
      <Stack spacing={2} padding={2}>
        <H3>1234</H3>
        <H5>6666</H5>
      </Stack>
    </DialogContent>
  )
}

export default ChainDialogContent
