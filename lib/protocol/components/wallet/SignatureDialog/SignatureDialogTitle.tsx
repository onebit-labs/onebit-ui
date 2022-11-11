import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'

import { H3 } from 'components/Typography'

const ROOT = styled('div')`
  ${({ theme }) => ({
    margin: `${theme.spacing(2)} 0`,
  })}
`

const ChainDialogTitle: FC = () => {
  return (
    <DialogTitle>
      <ROOT>
        <H3 textAlign="center">title</H3>
      </ROOT>
    </DialogTitle>
  )
}

export default ChainDialogTitle
