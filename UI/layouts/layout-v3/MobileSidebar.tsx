import { Box, styled } from '@mui/material'
import FlexBox from 'components/flexbox/FlexBox'
import Scrollbar from 'components/ScrollBar'
import LayoutDrawer from '../layout-parts/LayoutDrawer'
import Image from 'next/image'
import LogoImage from 'public/logo.svg'
import type { FC } from 'react'
import MultiLevelMenu from './MultiLevelMenu'

const TOP_HEADER_AREA = 70

const NavWrapper = styled(Box)(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  height: '100%',
}))

interface MobileSidebarProps {
  sidebarCompact: boolean
  showMobileSideBar: boolean
  setShowMobileSideBar: () => void
}

const MobileSidebar: FC<React.PropsWithChildren<MobileSidebarProps>> = (props) => {
  const { showMobileSideBar, setShowMobileSideBar } = props

  return (
    <LayoutDrawer open={showMobileSideBar} onClose={setShowMobileSideBar}>
      <Box p={2} maxHeight={TOP_HEADER_AREA}>
        <FlexBox ml={1.5}>
          <Image src={LogoImage} alt="logo" width={100} />
        </FlexBox>
      </Box>

      <Scrollbar
        autoHide
        clickOnTrack={false}
        sx={{
          overflowX: 'hidden',
          maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
        }}
      >
        <NavWrapper>
          <MultiLevelMenu sidebarCompact={false} />
        </NavWrapper>
      </Scrollbar>
    </LayoutDrawer>
  )
}

export default MobileSidebar
