import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const ShoppingCart = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20,20a2,2,0,1,1-2-2A2,2,0,0,1,20,20ZM8,18a2,2,0,1,0,2,2A2,2,0,0,0,8,18ZM21.5,4H5.72L5.16,3A2,2,0,0,0,3.42,2H2.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h.92L7.7,11.49a2.19,2.19,0,0,0,.27.35l-1.86,3.7a.77.77,0,0,0,0,.71l.22.38A.76.76,0,0,0,7,17H19.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H8.62l1-2.09a2.74,2.74,0,0,0,.64.09h6.23A2.94,2.94,0,0,0,19,11.49l2.35-4.13A4.76,4.76,0,0,0,22,5V4.5A.5.5,0,0,0,21.5,4Z" />
    </SvgIcon>
  )
}

export default ShoppingCart
