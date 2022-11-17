export type Props = {
  start: number
  end: number
  series: string[]
}
export const request = (props: Props) => {
  const { start, end, series } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, Array<Record<string, string>>> = {}

  series.forEach((item) => {
    promises.push(
      fetch(
        `/onebit-api/series_daily?req_id=8b20dd8819bc7569f4994b1080646713&series=${encodeURIComponent(
          item
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
          returnValue[item] = data.map(({ ts, nav }: any) => ({ x: ts * 1000, y: nav }))
        })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
