import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const Labels = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M19,11.07V3.12a1.05,1.05,0,0,0-.29-.71l-.12-.12A1.05,1.05,0,0,0,17.88,2H9.93a2,2,0,0,0-1.42.59L1.29,9.81a1,1,0,0,0,0,1.41l8.49,8.49a1,1,0,0,0,1.41,0l7.22-7.22A2,2,0,0,0,19,11.07ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Zm8.71-2.59-.12-.12A1.05,1.05,0,0,0,21.88,6H21v5.9a2,2,0,0,1-.59,1.42l-7.58,7.57.89.89a.75.75,0,0,0,1.06,0l7-7A4,4,0,0,0,23,11.9V7.12A1.05,1.05,0,0,0,22.71,6.41Z" />
    </SvgIcon>
  )
}

export default Labels
