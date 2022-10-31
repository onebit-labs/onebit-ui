import { Chip } from '@mui/material'
import type { FC } from 'react'
import { useMemo } from 'react'

type ProjectStatusProps = {
  status: string
}

const ProjectStatus: FC<ProjectStatusProps> = ({ status }) => {
  const color = useMemo(() => {
    switch (status) {
      case 'open':
        return 'success'
      default:
        return 'error'
    }
  }, [status])
  return <Chip color={color} label={status} />
}

export default ProjectStatus
