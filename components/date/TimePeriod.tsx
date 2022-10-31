import type { FC } from 'react'
import { format } from 'date-fns'
import { safeGet } from 'app/utils/get'
import { Span } from 'components/Typography'
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
    <Span {...props}>
      {displayDate(start)} - {displayDate(end)}
    </Span>
  )
}

export default TimePeriod
