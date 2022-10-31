import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import BasicTable from 'components/table/BasicTable'
import { useTable } from './useTable'

const ROOT = styled(Paper)``

const HistoricalPerformance: FC = () => {
  const table = useTable()

  return (
    <Grid container spacing={4} pt={4}>
      <Grid item xs={12}>
        <ROOT>
          <BasicTable {...table} />
        </ROOT>
      </Grid>
    </Grid>
  )
}

export default HistoricalPerformance
