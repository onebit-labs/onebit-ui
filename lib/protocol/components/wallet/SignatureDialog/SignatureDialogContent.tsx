import type { FC } from 'react'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import { H4, Paragraph } from 'components/Typography'
import Link from '@mui/material/Link'

const ChainDialogContent: FC = () => {
  return (
    <DialogContent>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <H4>Things you should know</H4>
          <Paragraph>You are not guaranteed to make money by following any portfolios offered on Onebit. Past performance is not an indication of future results. You alone are responsible for the safety of your funds. Your capital is at risk.</Paragraph>
        </Stack>
        <Stack spacing={1}>
          <Paragraph>
            {'By clicking "Accept" below, I acknowledge the above, the '}
            <Link href="/terms" target="_blank">Terms of Service</Link>
            {', and '}
            <Link href="/privacy" target="_blank">Privacy Policy</Link>{'.'}
          </Paragraph>
        </Stack>
      </Stack>

    </DialogContent>
  )
}

export default ChainDialogContent
