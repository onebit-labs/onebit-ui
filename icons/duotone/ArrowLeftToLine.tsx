import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const ArrowLeftToLine = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="-2 0 19 16" {...props}>
      <path
        d="M1 1.75C0.447187 1.75 0 2.19719 0 2.75V12.75C0 13.3028 0.447187 13.75 1 13.75C1.55281 13.75 2 13.3028 2 12.75V2.75C2 2.19719 1.55281 1.75 1 1.75Z"
        className="secondary"
      />
      <path d="M8.37634 3.20966C8.76697 2.81903 9.39978 2.81903 9.79041 3.20966C10.181 3.60028 10.181 4.23153 9.78978 4.62278L7.49666 6.91591H13.0842C13.637 6.91591 14.0842 7.36309 14.0842 7.91591C14.0842 8.46872 13.637 8.91591 13.0842 8.91591H7.49978L9.79119 11.209C9.9865 11.404 10.0842 11.6597 10.0842 11.9159C10.0842 12.1722 9.98728 12.4284 9.79041 12.6237C9.39978 13.0143 8.76697 13.0143 8.37634 12.6237L4.37634 8.62372C3.98572 8.23309 3.98572 7.60028 4.37634 7.20966L8.37634 3.20966Z" />
    </SvgIcon>
  )
}

export default ArrowLeftToLine
