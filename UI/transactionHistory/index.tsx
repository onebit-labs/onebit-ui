import type { FC } from 'react'
import Head from 'next/head'

import NeedAccount from 'components/auth/NeedAccount'
import TransactionTabs from './TransactionTabs'

const TransactionHistory: FC = () => {
  return (
    <>
      <Head>
        <title>Transaction History | Onebit</title>
      </Head>
      <NeedAccount>
        <TransactionTabs />
      </NeedAccount>
    </>
  )
}

export default TransactionHistory
