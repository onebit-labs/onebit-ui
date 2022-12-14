import type { ButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'
import type { FCC } from 'app/types'
import { useMemo } from 'react'

const SubmitBotton: FCC<ButtonProps & { isSubmitting: boolean }> = ({ children, isSubmitting, ...btnProps }) => {
  const text = useMemo(() => (isSubmitting ? 'Submitting' : children), [isSubmitting, children])
  return (
    <Button {...btnProps} type="submit" disabled={isSubmitting}>
      {text}
    </Button>
  )
}

export default SubmitBotton
