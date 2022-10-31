import RiseOrFall from 'components/math/RiseOrFall'
import type { FC } from 'react'

type PNLProps = {
  PNL: number
  previousPNL: number
}
const PNL: FC<PNLProps> = ({ PNL, previousPNL }) => {
  const value = PNL - previousPNL
  return <RiseOrFall value={value} percentValue={value / PNL} />
}
export default PNL
