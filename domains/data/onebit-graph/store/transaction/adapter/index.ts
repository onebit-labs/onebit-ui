type Props = {
  account: string
}
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
    first: 1000
    where: { account: ${JSON.stringify(props.account)} }
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    id
    vault
    type
    account
    amount
    createTimestamp
  }
}`,
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { transactions } }) => transactions)
}
export type SliceState = Array<{
  id: string
  vault: string
  type: number
  account: string
  amount: BN
  createTimestamp: number
}>
