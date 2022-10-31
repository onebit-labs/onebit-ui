import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import BasicTable from '../BasicTable'
import type { SearchTableProps } from './types'

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`

const PCTable: FC<SearchTableProps> = (props) => {
  const { table, title, search } = props

  return (
    <ROOT className="search-table" spacing={2}>
      <Header>
        <Typography variant="h5">{title}</Typography>
      </Header>
      {search.content}
      <BasicTable {...table} />
    </ROOT>
  )
}

export const ROOT = styled(Stack)``

export default PCTable
