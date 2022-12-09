import type { FC } from 'react'
import { Stack, Card, CardContent } from '@mui/material'
import { H2, Paragraph } from 'components/Typography'
import Head from 'next/head'

const Terms: FC = () => {
  return (
    <Card>
      <Head>
        <title>Terms of Use | Onebit</title>
      </Head>
      <CardContent>
        <Stack spacing={2}>
          <H2>Onebit Terms of Use</H2>
          <Paragraph>
            Welcome to Onebit https://onebit.com, a website-hosted user interface (the “Interface”) provided by Onebit
            Digital ("we", "our", or "us"). The interface provides access to a decentralized protocol for decentralized
            on-chain asset management.
          </Paragraph>
          <Paragraph>
            These Terms of Use and any terms and conditions incorporated herein by reference (collectively, the “Terms”)
            govern your access to and use of the Interface. You must read the Terms carefully.
          </Paragraph>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Terms
