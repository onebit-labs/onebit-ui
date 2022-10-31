import type { FC } from 'react'
import { format } from 'date-fns'
import { safeGet } from 'app/utils/get'

const FORMAT_STRING = 'MM/dd/yyyy'
const displayDate = (date: number | Date) => {
  return safeGet(() => format(date, FORMAT_STRING)) || ''
}
type TimePeriodProps = {
  start: number | Date
  end: number | Date
}
const TimePeriod: FC<TimePeriodProps> = ({ start, end }) => {
  return (
    <span>
      {displayDate(start)} - {displayDate(end)}
    </span>
  )
}

export default TimePeriod
