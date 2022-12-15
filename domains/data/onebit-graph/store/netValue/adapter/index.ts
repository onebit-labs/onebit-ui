type Props = {
  subgraphName: string
  startTimestamp: number
  endTimestamp: number
}

export const request = ({ startTimestamp, endTimestamp, subgraphName }: Props): Promise<SliceState> => {
  if (!subgraphName) return Promise.reject({ message: 'network error' })
  return fetch(`https://api.thegraph.com/subgraphs/name/${subgraphName}`, {
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
  netValues(
    first: 1000
    where: {
      createTimestamp_gte: ${startTimestamp}
      createTimestamp_lte: ${endTimestamp}
    }
    orderBy: createTimestamp
    orderDirection: asc
  ) {
    id
    vault
    reserveNormalizedIncome
    previousNetValue
    newNetValue
    previousLiquidityIndex
    newLiquidityIndex
    currentLiquidityRate
    createTimestamp
  }
}`,
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { netValues } }) => {
      return netValues
    })
}
export type SliceState = Array<{
  id: string
  vault: string
  reserveNormalizedIncome: string
  previousNetValue: string
  newNetValue: string
  previousLiquidityIndex: string
  newLiquidityIndex: string
  currentLiquidityRate: string
  createTimestamp: number
}>
