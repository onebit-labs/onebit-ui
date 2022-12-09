import type { FC } from 'react'
import Head from 'next/head'

import TransactionTabs from './TransactionTabs'

const TransactionHistory: FC = () => {
  return (
    <>
      <Head>
        <title>Transaction History | Onebit</title>
      </Head>
      <TransactionTabs />
    </>
  )
}

export default TransactionHistory
