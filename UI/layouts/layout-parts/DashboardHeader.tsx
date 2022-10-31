import type { Theme } from '@mui/material'
import { AppBar, Box, styled, Toolbar, useMediaQuery } from '@mui/material'
import type { FC } from 'react'

import LanguageMenu from 'app/i18n/components/LanguageMenu'

// ------------------------------------------------
type DashboardHeaderProps = {
  setShowSideBar: () => void
  setShowMobileSideBar: () => void
}
// ------------------------------------------------

// custom styled components
const DashboardHeaderRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  boxShadow: 'none',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backdropFilter: 'blur(6px)',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
}))

const StyledToolBar = styled(Toolbar)(() => ({
  '@media (min-width: 0px)': {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto',
  },
}))

const ToggleIcon = styled(Box)<{ width?: number }>(({ theme, width }) => ({
  height: 3,
  margin: '5px',
  marginLeft: 0,
  width: width || 25,
  borderRadius: '10px',
  transition: 'width 0.3s',
  backgroundColor: theme.palette.primary.main,
}))

const DashboardHeader: FC<React.PropsWithChildren<DashboardHeaderProps>> = (props) => {
  const { setShowMobileSideBar } = props
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down(1200))

  return (
    <DashboardHeaderRoot position="sticky">
      <StyledToolBar>
        {downMd && (
          <Box sx={{ cursor: 'pointer' }} onClick={setShowMobileSideBar}>
            <ToggleIcon />
            <ToggleIcon width={18} />
            <ToggleIcon width={9} />
          </Box>
        )}

        <Box flexGrow={1} ml={1} />
        <LanguageMenu />
      </StyledToolBar>
    </DashboardHeaderRoot>
  )
}

export default DashboardHeader
