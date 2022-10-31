import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const ChevronRight = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M9.85702 18C9.63769 18 9.41826 17.9163 9.25112 17.7489C8.91629 17.4141 8.91629 16.8716 9.25112 16.5368L13.7892 11.9999L9.25112 7.46319C8.91629 7.12836 8.91629 6.58594 9.25112 6.25112C9.58594 5.91629 10.1284 5.91629 10.4632 6.25112L15.6061 11.394C15.9409 11.7289 15.9409 12.2713 15.6061 12.6061L10.4632 17.749C10.2963 17.917 10.0767 18 9.85702 18Z" />
    </SvgIcon>
  )
}

export default ChevronRight
