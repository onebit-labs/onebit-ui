import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import BasicTable from '../BasicTable'
import type { SearchTableProps } from './types'

const Header = styled(Stack)`
  padding: 24px;
`

const MobileTable: FC<SearchTableProps> = (props) => {
  const { table, title, search } = props

  return (
    <ROOT className="table search-table">
      <Header spacing={2}>
        <Typography variant="h5">{title}</Typography>
        {search.content}
      </Header>
      <BasicTable {...table} />
    </ROOT>
  )
}

export const ROOT = styled('div')``

export default MobileTable
