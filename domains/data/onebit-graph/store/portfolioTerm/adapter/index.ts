export const request = () => {
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
  portfolioTerms(
    first: 1000
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    id
    lendingPool
    previousNetValue
    previousAssetsUnderManagement
    previousScaledAssetsUnderManagement
    term
    createTimestamp
    redemptionBeginTimestamp
    purchaseBeginTimestamp
    purchaseEndTimestamp
    previousLiquidityIndex
    managementFeeRate
    performanceFeeRate
    previousDepositors
  }
}`,
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { portfolioTerms } }) => portfolioTerms)
}
export type SliceState = Array<{
  id: string
  lendingPool: string
  previousNetValue: BN
  previousAssetsUnderManagement: BN
  previousScaledAssetsUnderManagement: BN
  term: number
  createTimestamp: number
  redemptionBeginTimestamp: number
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  previousLiquidityIndex: BN
  managementFeeRate: number
  performanceFeeRate: number
  previousDepositors: number
}>
