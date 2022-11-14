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
  account: string
  lendingPool?: string
}
export const request = (props: Props): Promise<SliceState> => {
  const key = props.lendingPool ? `getDepositor_${props.account}_${props.lendingPool || ''}` : ''
  const cacheValue = getItem(key)
  if (key && cacheValue) return Promise.resolve(cacheValue)
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
  depositors(
    first: 1000
    where: ${getWhere(props)}
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    id
    account
    lendingPool
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
  lendingPool: string
  oTokenAddress: string
  createTimestamp: number
  lastUpdateTimestamp: number
}>
