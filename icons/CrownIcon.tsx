import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const CrownIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M22,18.5v1a.5.5,0,0,1-.5.5H2.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h19A.5.5,0,0,1,22,18.5Zm0-13v10a.5.5,0,0,1-.5.5H2.5a.5.5,0,0,1-.5-.5V5.5A.5.5,0,0,1,2.5,5h.38a1.5,1.5,0,0,1,1.06.44L7,8.5l4.28-4.28A.75.75,0,0,1,11.81,4h.38a.75.75,0,0,1,.53.22L17,8.5l3.06-3.06A1.5,1.5,0,0,1,21.12,5h.38A.5.5,0,0,1,22,5.5ZM20,8.33l-2,2a.49.49,0,0,1-.36.15H16.38a.49.49,0,0,1-.36-.15l-4-4-4,4a.49.49,0,0,1-.36.15H6.38A.49.49,0,0,1,6,10.35l-2-2V14H20Z" />
    </SvgIcon>
  )
}

export default CrownIcon
