import type { FC } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'

import Button from '@mui/material/Button'
import ArrowBack from '@mui/icons-material/ArrowBack'

const BackButton: FC = () => {
  const router = useRouter()
  const theme = useTheme()
  return (
    <Button sx={{ backgroundColor: 'white', boxShadow: theme.shadows[1], padding: 1 }} startIcon={<ArrowBack />} onClick={() => router.back()}>
      Back
    </Button>
  )
}

export default BackButton
