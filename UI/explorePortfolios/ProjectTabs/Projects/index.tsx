import { Grid } from '@mui/material'
import { useLoading } from 'domains'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import ProjectCard from './ProjectCard'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

type ProjectsProps = {
  data: any[]
}
const Projects: FC<ProjectsProps> = ({ data }) => {
  const router = useRouter()
  const {
    portfolio: { init },
  } = useLoading()

  if (!init)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={400}>
        <CircularProgress />
      </Box>
    )

  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {data.map((item, index) => (
        <Grid
          item
          lg={4}
          sm={6}
          xs={12}
          key={index}
          onClick={() => router.push(`/portfolio/${encodeURIComponent(item.id)}`)}
        >
          <ProjectCard {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects
