import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import ProjectCard from './ProjectCard'

type ProjectsProps = {
  data: any[]
}
const Projects: FC<ProjectsProps> = ({ data }) => {
  const router = useRouter()
  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {data.map((item, index) => (
        <Grid item lg={4} xs={12} key={index} onClick={() => router.push(`/portfolio/${encodeURIComponent(item.id)}`)}>
          <ProjectCard {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects
