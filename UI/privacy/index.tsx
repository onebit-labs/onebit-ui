import type { FC } from 'react'
import { Stack, Card, CardContent } from '@mui/material'
import { H2, Paragraph } from 'components/Typography'

const Privacy: FC = () => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <H2>Onebit Privacy Policy </H2>
          <Paragraph>
            Onebit accessible at: https://onebit.com, one of its main priorities is the privacy of participants who are
            visitors of https://onebit.com (the “Interface”). Onebit does it best to collect as minimum Personal Data as
            possible. Still, it’s quite a task not to collect it at all. That is why this Privacy Policy document
            contains types of data that is collected, used, and recorded by Interface.{' '}
          </Paragraph>
          <Paragraph>
            Onebit Digital is the controller for your Personal Data within the scope of this Privacy Policy. The Onebit
            decides “why” and “how” your Personal Data is processed in connection with the Interface. If you have
            additional questions or require more information about this Privacy Policy, do not hesitate to contact
            info@onebit.com.{' '}
          </Paragraph>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Privacy
