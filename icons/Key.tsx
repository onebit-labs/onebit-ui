import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const Key = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20,3H18.59a1,1,0,0,0-.7.29l-7.18,7.18A5.4,5.4,0,0,0,8.5,10,5.5,5.5,0,1,0,14,15.5a5.55,5.55,0,0,0-.46-2.2l.88-.88a1,1,0,0,0,.29-.7V11a.75.75,0,0,1,.22-.53l.26-.26a.75.75,0,0,1,.53-.22H17.5a.5.5,0,0,0,.5-.5V7.73a.75.75,0,0,1,.22-.53l.05,0A.49.49,0,0,1,18.63,7H20.5a.5.5,0,0,0,.5-.5V4A1,1,0,0,0,20,3ZM7.44,18.56a2,2,0,1,1,2-2A2,2,0,0,1,7.44,18.56Z" />
    </SvgIcon>
  )
}

export default Key
