import type { FC } from 'react'
import { useRouter } from 'next/router'

import Button from '@mui/material/Button'
import ChevronLeft from 'icons/ChevronLeft'

const BackButton: FC = () => {
  const router = useRouter()
  return (
    <Button sx={{ borderRadius: 0 }} startIcon={<ChevronLeft />} onClick={() => router.back()}>
      Back
    </Button>
  )
}

export default BackButton
