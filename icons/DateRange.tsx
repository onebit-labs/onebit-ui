import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const DateRange = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M21,6a2,2,0,0,0-2-2H18V2.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V4H8V2.5A.5.5,0,0,0,7.5,2h-1a.5.5,0,0,0-.5.5V4H5A2,2,0,0,0,3,6V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2ZM19,19H5V8H19Zm-7.5-9a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5Zm-4,2h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,7.5,12Zm5,4a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5Zm2.5-.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5Z" />
    </SvgIcon>
  )
}

export default DateRange
