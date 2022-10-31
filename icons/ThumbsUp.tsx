import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const ThumbsUp = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M5,19.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-9a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5ZM20,10H15l1.55-3.11a4.15,4.15,0,0,0,.45-2V4.5A1.5,1.5,0,0,0,15.5,3h-.14a.5.5,0,0,0-.47.34l-.6,1.78a2,2,0,0,1-1.15,1.22l-.43.17a4.06,4.06,0,0,0-1.9,1.6l-1.22,2a2,2,0,0,1-1.7.94H7v8h.59A3.41,3.41,0,0,1,10,20h0a3.41,3.41,0,0,0,2.41,1h6.24a2,2,0,0,0,1.85-1.26l1.07-2.67A6.06,6.06,0,0,0,22,14.84V12A2,2,0,0,0,20,10Z" />
    </SvgIcon>
  )
}

export default ThumbsUp
