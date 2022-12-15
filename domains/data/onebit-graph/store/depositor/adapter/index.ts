import { getItem, setItem } from 'app/utils/cache/localStorage'
const getWhere = (props: any) => {
  const returnValue = Object.keys(props)
    .reduce((array, key) => {
      const value = props[key]
      switch (typeof value) {
        case 'string':
        case 'number':
          array.push(`${key}: ${JSON.stringify(value)}`)
          break
      }
      return array
    }, [])
    .join(',')

  return `{${returnValue}}`
}

type Props = {
  subgraphName: string
  account: string
  vault?: string
}
export const request = (props: Props): Promise<SliceState> => {
  const { subgraphName, vault, account } = props
  delete props.subgraphName
  const key = vault ? `getDepositor_${account}_${vault || ''}` : ''
  const cacheValue = getItem(key)
  if (key && cacheValue) return Promise.resolve(cacheValue)
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
  depositors(
    first: 1000
    where: ${getWhere(props)}
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    id
    account
    vault
    createTimestamp
    lastUpdateTimestamp
    oTokenAddress
  }
}`,
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { depositors } }) => {
      if (key) setItem(key, depositors)
      return depositors
    })
}
export type SliceState = Array<{
  id: string
  account: string
  vault: string
  oTokenAddress: string
  createTimestamp: number
  lastUpdateTimestamp: number
}>
