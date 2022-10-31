import { styled } from '@mui/material'
import { Small } from 'components/Typography'

export const StyledSmall = styled(Small)(({ theme }) => ({
  display: 'block',
  cursor: 'pointer',
  padding: '5px 1rem',
  '&:hover': { backgroundColor: theme.palette.action.hover },
}))
