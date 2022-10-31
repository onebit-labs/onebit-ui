import type { FC } from 'react'
import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import SearchInput from 'components/input-fields/SearchInput'

import type { SearchProps } from './types'

const Search: FC<SearchProps> = ({ search: { search, setSearch }, table }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const content = useMemo(
    () =>
      Object.keys(search).map((key) => {
        const column = table.columns.find((column) => column.dataKey === key) || ({} as undefined)
        const Input = (
          <SearchInput
            key={key}
            disable_border={true}
            placeholder={column.label as any}
            onChange={(e) =>
              setSearch((values: any) => ({
                ...values,
                [key]: e.target.value,
              }))
            }
          />
        )
        if (column.isSelect) {
          if (!column.selectOptions) return null
          return (
            <Select key={key} input={Input} value={search[key]}>
              {Object.entries(column.selectOptions).map(([k, value]) => {
                return (
                  <MenuItem value={k} key={k}>
                    {value}
                  </MenuItem>
                )
              })}
            </Select>
          )
        }
        return Input
      }),
    [search, setSearch, table.columns]
  )

  return matches ? (
    <Stack spacing={2} direction="row">
      {content}
    </Stack>
  ) : (
    <Stack spacing={2}>{content}</Stack>
  )
}

export default Search
