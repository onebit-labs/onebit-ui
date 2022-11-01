
export const request = () => {
  return fetch("https://api.thegraph.com/subgraphs/name/rockgold0911/onebit", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/json",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "body": "{\"query\":\"{portfolioTerms(first: 1000) {id lendingPool value term createTimestamp purchaseBeginTimestamp purchaseEndTimestamp previousLiquidityIndex managementFeeRate performanceFeeRate}}\",\"variables\":null}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(data => data.json()).then(({ data: { portfolioTerms } }) => portfolioTerms)
}
export type SliceState = Array<{
  id: string
  lendingPool: string
  value: BN
  term: number
  createTimestamp: number
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  previousLiquidityIndex: BN
  managementFeeRate: number
  performanceFeeRate: number
}>
