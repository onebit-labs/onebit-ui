import { Chip } from '@mui/material'
import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

type ProjectStatusProps = {
  status: string
}

const ProjectStatus: FC<ProjectStatusProps> = ({ status }) => {
  const { t } = useTranslation('common')
  const color = useMemo(() => {
    switch (status) {
      case 'open':
        return 'success'
      default:
        return 'error'
    }
  }, [status])
  return (
    <Chip
      color={color}
      label={t(`project.status.${status}`)}
      sx={{ height: 24, color: 'white', fontWeight: 600, fontSize: 12 }}
    />
  )
}

export default ProjectStatus
