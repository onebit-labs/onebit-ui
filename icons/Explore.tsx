import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

const Explore = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0_786_8595)">
        <path d="M7.99999 15.4667C3.87627 15.4667 0.533325 12.1237 0.533325 7.99999C0.533325 3.87627 3.87627 0.533325 7.99999 0.533325C12.1237 0.533325 15.4667 3.87627 15.4667 7.99999C15.4667 12.1237 12.1237 15.4667 7.99999 15.4667ZM7.99999 14.1091C11.374 14.1091 14.1091 11.374 14.1091 7.99999C14.1091 4.62603 11.374 1.8909 7.99999 1.8909C4.62603 1.8909 1.8909 4.62603 1.8909 7.99999C1.8909 11.374 4.62603 14.1091 7.99999 14.1091Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7151 4.60605L9.20106 8.85255L5.28479 11.3939L6.79883 7.14743L10.7151 4.60605Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_786_8595">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}

export default Explore
