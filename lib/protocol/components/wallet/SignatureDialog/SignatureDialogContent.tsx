import type { FC } from 'react'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import { H4, Paragraph } from 'components/Typography'
import Link from '@mui/material/Link'
import { useTranslation } from 'next-i18next'

const ChainDialogContent: FC = () => {
  const { t } = useTranslation('common')
  return (
    <DialogContent>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <H4>{t('dialog.signature.thingsToKnowTitle')}</H4>
          <Paragraph color="text.secondary">{t('dialog.signature.thingsToKnowContent')}</Paragraph>
        </Stack>
        <Stack spacing={1}>
          <Paragraph color="text.secondary">
            {t('dialog.signature.tip')}
            <Link href="/terms" target="_blank">{t('pages.terms')}</Link>
            {t('dialog.signature.and')}
            <Link href="/privacy" target="_blank">{t('pages.privacy')}</Link>{'.'}
          </Paragraph>
        </Stack>
      </Stack>

    </DialogContent>
  )
}

export default ChainDialogContent
