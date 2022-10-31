import { Box, Drawer, styled } from '@mui/material'
import type { FC } from 'react'
import React from 'react'

// ------------------------------------------------------------------
type LayoutDrawerProps = {
  open: boolean
  onClose: () => void
  drawerWidth?: number
}
// ------------------------------------------------------------------

const Wrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  width: 'inherit',
  position: 'fixed',
  overflow: 'hidden',
  boxShadow: theme.shadows[1],
  zIndex: theme.zIndex.drawer + 3,
}))

const LayoutDrawer: FC<React.PropsWithChildren<LayoutDrawerProps>> = (props) => {
  const { children, open, onClose, drawerWidth = 280 } = props

  return (
    <Drawer anchor="left" open={open} onClose={onClose} PaperProps={{ sx: { width: drawerWidth } }}>
      <Wrapper>{children}</Wrapper>
    </Drawer>
  )
}

export default LayoutDrawer
