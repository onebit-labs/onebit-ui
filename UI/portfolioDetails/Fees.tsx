import type { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { H3, H4, H5, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import Stack from '@mui/material/Stack'

const Fees: FC = () => {
  const { t } = useTranslation('portfolioDetails')
  return (
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <H3>{t('fees.title')}</H3>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Paragraph color="text.secondary">{t('fees.management.title')}</Paragraph>
              <H4>1%</H4>
              <Paragraph color="text.secondary">{t('fees.management.tip')}</Paragraph>
            </Stack>

            <Paragraph color="text.secondary">{t('fees.management.description')}</Paragraph>
          </Stack>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Paragraph color="text.secondary">{t('fees.perfomance.title')}</Paragraph>
              <H4>15%</H4>
            </Stack>

            <Paragraph color="text.secondary">{t('fees.perfomance.description')}</Paragraph>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('fees.entrance.title')}</Paragraph>
            <H4>None</H4>
          </Stack>
          <Stack spacing={1}>
            <Paragraph color="text.secondary">{t('fees.exit.title')}</Paragraph>
            <H4>None</H4>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Fees
