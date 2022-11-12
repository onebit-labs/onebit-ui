import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'

import { H2 } from 'components/Typography'
import LogoImage from 'public/logo.svg'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'next-i18next'

const ROOT = styled('div')`
  ${({ theme }) => ({
    margin: `${theme.spacing(2)} 0`,
  })}
`

const ChainDialogTitle: FC = () => {
  const { t } = useTranslation('common')
  return (
    <DialogTitle>
      <ROOT>
        <Stack alignItems="center">
          <Image src={LogoImage.src} alt="Onebit logo" width={100} height={50} />
          <H2>{t('wallet.signature.title')} Onebit!</H2>
        </Stack>
      </ROOT>
    </DialogTitle>
  )
}

export default ChainDialogTitle
