import type { InputBaseProps } from '@mui/material'
import { InputBase, styled } from '@mui/material'
import type { CSSProperties } from '@mui/styled-engine'
import SearchIcon from '@mui/icons-material/Search'
import type { FC } from 'react'

// styled component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: 45,
  fontSize: 12,
  width: '100%',
  maxWidth: 350,
  fontWeight: 600,
  padding: '0 1rem',
  borderRadius: '8px',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.action.disabled}`,
  [theme.breakpoints.down(500)]: { maxWidth: '100%' },
  '::placeholder': { color: theme.palette.text.disabled },
}))
const StyledNoBorderInputBase = styled(StyledInputBase)(() => ({
  border: 'none',
}))

// ------------------------------------------------------------
type SearchInputProps = {
  icon_style?: CSSProperties
  disable_border?: boolean
}
// ------------------------------------------------------------

const SearchInput: FC<React.PropsWithChildren<SearchInputProps & InputBaseProps>> = ({
  icon_style = {},
  disable_border,
  ...props
}) => {
  const startAdornment = (
    <SearchIcon
      sx={{
        fontSize: 18,
        marginRight: 1,
        color: 'text.disabled',
        ...icon_style,
      }}
    />
  )

  const Input = disable_border ? StyledNoBorderInputBase : StyledInputBase
  return <Input startAdornment={startAdornment} {...props} />
}

export default SearchInput
