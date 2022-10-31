import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const Pin = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20.34,9.14l-1.44.51a2,2,0,0,0-1,.78l-2.13,3.2a3,3,0,0,0-.52,1.69v1.49a1,1,0,0,1-.29.71l-.42.41a1,1,0,0,1-1.41,0L6.07,10.86a1,1,0,0,1,0-1.41L6.48,9a1,1,0,0,1,.71-.29H8.68a3,3,0,0,0,1.69-.52l3.2-2.13a2,2,0,0,0,.78-1l.51-1.44a1,1,0,0,1,1.65-.37l4.2,4.2A1,1,0,0,1,20.34,9.14ZM4.43,17.44a3,3,0,0,0-.67,1L3,20.27a.5.5,0,0,0,.11.54l0,0a.5.5,0,0,0,.54.11l1.81-.72a3,3,0,0,0,1-.67l2.91-2.91L7.35,14.52Z" />
    </SvgIcon>
  )
}

export default Pin
