type Props = {
  subgraphName: string
}

export const request = ({ subgraphName }: Props) => {
  return fetch(`https://api.thegraph.com/subgraphs/name/${subgraphName}`, {
    headers: {
      accept: '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    body: '{"query":"{vaults(first: 1000) {id term depositors lastUpdateTimestamp}}","variables":null}',
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { vaults } }) => vaults)
}
export type SliceState = Array<{
  id: string
  term: number
  depositors: string[]
  lastUpdateTimestamp: number
}>
