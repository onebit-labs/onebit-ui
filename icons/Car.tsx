import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const Car = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M21,11.56a4.11,4.11,0,0,0-.15-1.1l-1.44-5A2,2,0,0,0,17.49,4h-11A2,2,0,0,0,4.59,5.45l-1.44,5A4.11,4.11,0,0,0,3,11.56V19a1,1,0,0,0,1,1H5a1,1,0,0,0,1-1V18H18v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1ZM6.27,5.93a.25.25,0,0,1,.24-.18h11a.25.25,0,0,1,.24.18L18.89,10H5.11ZM8,14a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H7a1,1,0,0,1,1,1Zm11,0a1,1,0,0,1-1,1H17a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1Z" />
    </SvgIcon>
  )
}

export default Car
