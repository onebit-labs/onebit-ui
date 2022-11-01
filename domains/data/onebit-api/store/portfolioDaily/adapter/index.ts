export type Props = {
  start: number
  end: number
  portfolios: string[]
}
export const request = (props: Props) => {
  const { start, end, portfolios } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  portfolios.forEach((portfolio) => {
    promises.push(
      fetch(
        `/onebit-api/portfolio_daily?req_id=8b20dd8819bc7569f4994b1080646713&portfolio=${encodeURIComponent(
          portfolio
        )}&start=${start}&end=${end}`,
        {
          body: null,
          method: 'GET',
          mode: 'cors',
          credentials: 'omit',
        }
      )
        .then((data) => data.json())
        .then(({ data }) => {
          returnValue[portfolio] = data.map(({ ts, nav }: any) => ({ x: ts * 1000, y: nav }))
        })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
