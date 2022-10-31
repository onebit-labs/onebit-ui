import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const Call = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M17,21a10.07,10.07,0,0,1-4.74-1.19l-.45-.25a18,18,0,0,1-7.33-7.33l-.25-.45A10.07,10.07,0,0,1,3,7V6.33a2,2,0,0,1,.59-1.42L5.28,3.22a.75.75,0,0,1,1.18.15L8.71,7.23a1,1,0,0,1-.16,1.21L6.66,10.33a.5.5,0,0,0-.09.59l.35.66a13.53,13.53,0,0,0,5.5,5.49l.66.36a.5.5,0,0,0,.59-.09l1.89-1.89a1,1,0,0,1,1.21-.16l3.86,2.25a.75.75,0,0,1,.15,1.18l-1.69,1.69a2,2,0,0,1-1.42.59Z" />
    </SvgIcon>
  )
}

export default Call
