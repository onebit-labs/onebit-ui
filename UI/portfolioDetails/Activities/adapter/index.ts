import { getNumber, getBigNumber, getAddress } from 'app/utils/get'
import type { TransactionType } from 'domains/data/onebit-graph/adapter/transaction'
import { getTransactionType } from 'domains/data/onebit-graph/adapter/transaction'

type Props = {
  skip: number
  first: number
  vault: string
}
export type SliceState = Array<{
  id: string
  type: number
  amount: BN
  from: string
  to: string
  createTimestamp: number
}>
export const request = (props: Props) => {
  return fetch('https://api.thegraph.com/subgraphs/name/rockgold0911/onebit', {
    headers: {
      accept: '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    body: JSON.stringify({
      query: `{
  transactions(
    first: ${props.first}
    skip: ${props.skip}
    where: { vault: ${JSON.stringify(props.vault)} }
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    id
    type
    amount
    from
    to
    createTimestamp
  }
}`,
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { transactions } }) => transactions as SliceState)
    .then((data) => getTransaction(data))
}

export type Transaction = {
  id: string
  createTimestamp: number
  amount: BN
  from: string
  to: string
  type: TransactionType
}
export const getTransaction = (transaction: SliceState) => {
  if (!transaction) return []
  const returnValue = transaction.map((t) => {
    const timestamps = getNumber(t, ['createTimestamp'])
    const returnValue: Transaction = {
      ...t,
      ...timestamps,
      ...getAddress(t, ['from', 'to']),
      ...getBigNumber(t, ['amount'], 18),
      type: getTransactionType(t.type),
    }
    return returnValue
  })

  return returnValue
}
