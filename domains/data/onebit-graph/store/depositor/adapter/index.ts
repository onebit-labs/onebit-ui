type Props = {
  account: string
}
export const request = (props: Props): Promise<SliceState> => {
  return fetch('/onebit-thegraph', {
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
  depositors(
    first: 1000
    where: { account: ${JSON.stringify(props.account)} }
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    id
    account
    lendingPool
    balanceOf
    createTimestamp
    lastUpdateTimestamp
  }
}`,
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { depositors } }) => depositors)
}
export type SliceState = Array<{
  id: string
  account: string
  lendingPool: string
  balanceOf: BN
  createTimestamp: number
  lastUpdateTimestamp: number
}>
