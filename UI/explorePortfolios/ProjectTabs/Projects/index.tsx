import { Grid } from '@mui/material'
import type { FC } from 'react'

import ProjectCard from './ProjectCard'

type ProjectsProps = {
  data: any[]
}
const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {data.map((item, index) => (
        <Grid item lg={4} xs={12} key={index}>
          <ProjectCard {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects
