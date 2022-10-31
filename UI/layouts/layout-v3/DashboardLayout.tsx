import type { CSSProperties } from '@mui/styled-engine'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
import GlobalStyles from '@mui/material/GlobalStyles'
import Box from '@mui/material/Box'
import NProgress from 'lib/nprogress/components/NProgress'

import LayoutBodyWrapper from '../layout-parts/LayoutBodyWrapper'
import DashboardHeader from '../layout-parts/DashboardHeader'
import DashboardSidebar from './DashboardSidebar'
import { useTheme } from '@mui/material/styles'

const DashboardLayout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [sidebarCompact, setSidebarCompact] = useState(false)
  const [showMobileSideBar, setShowMobileSideBar] = useState(false)

  const handleCompactToggle = () => setSidebarCompact(!sidebarCompact)
  const handleMobileDrawerToggle = () => setShowMobileSideBar((state) => !state)

  // dashboard body wrapper custom style
  const customStyle: CSSProperties = {
    width: `calc(100% - ${sidebarCompact ? '86px' : '280px'})`,
    marginLeft: sidebarCompact ? '86px' : '280px',
  }
  const theme = useTheme()

  return (
    <Fragment>
      <GlobalStyles styles={{ body: { background: theme.palette.background.default } }} />
      <NProgress />
      <DashboardSidebar
        sidebarCompact={sidebarCompact}
        showMobileSideBar={showMobileSideBar}
        setSidebarCompact={handleCompactToggle}
        setShowMobileSideBar={handleMobileDrawerToggle}
      />

      <LayoutBodyWrapper sx={customStyle}>
        <DashboardHeader setShowSideBar={handleCompactToggle} setShowMobileSideBar={handleMobileDrawerToggle} />

        <Box pt={2} pb={4} position="relative">
          {children}
        </Box>
      </LayoutBodyWrapper>
    </Fragment>
  )
}

export default DashboardLayout
