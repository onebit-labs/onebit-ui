import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const Edit = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M16.81,10a.5.5,0,0,1,0,.7L8.75,18.79a2,2,0,0,1-.68.45L3.73,21a.5.5,0,0,1-.54-.11l0,0A.5.5,0,0,1,3,20.27l1.72-4.34a2,2,0,0,1,.45-.68l8.07-8.07a.5.5,0,0,1,.71,0ZM20.56,4.1l-.66-.66A1.5,1.5,0,0,0,18.84,3h-.76A1.5,1.5,0,0,0,17,3.44L15.19,5.27a.5.5,0,0,0,0,.7L18,8.82a.5.5,0,0,0,.71,0L20.56,7A1.5,1.5,0,0,0,21,5.92V5.16A1.5,1.5,0,0,0,20.56,4.1Z" />
    </SvgIcon>
  )
}

export default Edit
