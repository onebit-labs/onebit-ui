import type { FC } from 'react'
import { format } from 'date-fns'
import { safeGet } from 'app/utils/get'
import { Small } from 'components/Typography'
import type { BoxProps } from '@mui/material/Box'

const FORMAT_STRING = 'MM/dd/yyyy'
const displayDate = (date: number | Date) => {
  return safeGet(() => format(date, FORMAT_STRING)) || ''
}
type TimePeriodProps = {
  start: number | Date
  end: number | Date
} & BoxProps
const TimePeriod: FC<TimePeriodProps> = ({ start, end, ...props }) => {
  return (
    <Small {...props}>
      {displayDate(start)} - {displayDate(end)}
    </Small>
  )
}

export default TimePeriod
