import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'

import { H2 } from 'components/Typography'
import LogoImage from 'public/logo.svg'
import Image from 'next/image'
import Stack from '@mui/material/Stack'

const ROOT = styled('div')`
  ${({ theme }) => ({
    margin: `${theme.spacing(2)} 0`,
  })}
`

const ChainDialogTitle: FC = () => {
  return (
    <DialogTitle>
      <ROOT>
        <Stack alignItems="center">
          <Image src={LogoImage.src} alt="Onebit logo" width={100} height={50} />
          <H2>Welcome to Onebit!</H2>
        </Stack>
      </ROOT>
    </DialogTitle>
  )
}

export default ChainDialogTitle
