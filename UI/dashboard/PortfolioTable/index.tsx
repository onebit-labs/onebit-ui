import type { FC } from 'react'
import Grid from '@mui/material/Grid'

import BasicTable from 'components/table/BasicTable'
import { useTable } from './useTable'

const UserPortfolios: FC = () => {
  const table = useTable()

  return (
    <Grid container spacing={4} pt={2}>
      <Grid item xs={12}>
        <BasicTable {...table} />
      </Grid>
    </Grid>
  )
}

export default UserPortfolios
