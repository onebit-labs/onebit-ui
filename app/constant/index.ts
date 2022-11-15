import OneBit101301 from './images/OneBit-1013-01.svg'
import OneBit101302 from './images/OneBit-1013-02.svg'
import OneBit101303 from './images/OneBit-1013-03.svg'
import OneBit101304 from './images/OneBit-1013-04.svg'
import OneBit101305 from './images/OneBit-1013-05.svg'
import OneBit101306 from './images/OneBit-1013-06.svg'
import OneBit101307 from './images/OneBit-1013-07.svg'
import OneBit101308 from './images/OneBit-1013-08.svg'
import OneBit101309 from './images/OneBit-1013-09.svg'
import { toBN } from 'lib/math'

export const DEFAULT_AVATARS = [
  OneBit101301.src,
  OneBit101302.src,
  OneBit101303.src,
  OneBit101304.src,
  OneBit101305.src,
  OneBit101306.src,
  OneBit101307.src,
  OneBit101308.src,
  OneBit101309.src,
]

export const SECONDS_PER_YEAR = toBN('31536000')
export const USD_DECIMALS = 8
export const WEI_DECIMALS = 18
export const RAY_DECIMALS = 27
export const LTV_PRECISION = 4

export const getTimestamp = (time: number) => Math.floor(time / 1000)
export const getCurrentTimestamp = () => getTimestamp(Date.now())

export const HOVER = 1000 * 60 * 60
export const HalfDay = HOVER * 12
export const DAY = HalfDay * 2
export const getUTCTime = (date: any): number => {
  date = new Date(date)
  date.setUTCHours(12, 0, 0, 0)
  return date.getTime()
}
