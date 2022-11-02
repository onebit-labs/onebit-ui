export const request = () => {
  return fetch('/onebit-thegraph', {
    headers: {
      accept: '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    body: '{"query":"{lendingPools(first: 1000) {id term depositors lastUpdateTimestamp}}","variables":null}',
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { lendingPools } }) => lendingPools)
}
export type SliceState = Array<{
  id: string
  term: number
  depositors: string[]
  lastUpdateTimestamp: number
}>
