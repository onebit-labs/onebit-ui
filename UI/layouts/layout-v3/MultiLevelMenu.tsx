import { alpha, Box, ButtonBase, styled } from '@mui/material'
import { Paragraph, Span } from 'components/Typography'
import type { FC } from 'react'
import { useRouter } from 'next/router'
import { navigations } from '../layout-parts/navigation'
import SidebarAccordion from './SidebarAccordion'
import { useTranslation } from 'next-i18next'

const NavItemButton = styled(ButtonBase)<{ active: any }>(({ theme, active }) => ({
  height: 44,
  width: '100%',
  borderRadius: 8,
  marginBottom: 4,
  padding: '0 18px',
  justifyContent: 'flex-start',
  transition: 'all 0.15s ease',
  ...(active && {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.06),
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

const ListLabel = styled(Paragraph)<{ compact: any }>(({ theme, compact }) => ({
  fontWeight: 700,
  fontSize: '12px',
  marginTop: '20px',
  marginLeft: '15px',
  marginBottom: '10px',
  textTransform: 'uppercase',
  transition: 'all 0.15s ease',
  color: theme.palette.text.secondary,
  ...(compact && { opacity: 0, height: '18px' }),
}))

const ExternalLink = styled('a')(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'pre',
  marginBottom: '8px',
  textDecoration: 'none',
  color: theme.palette.text.primary,
}))

const StyledText = styled(Span)<{ compact: any; active: any }>(({ theme, compact, active }) => ({
  whiteSpace: 'nowrap',
  paddingLeft: '0.8rem',
  transition: 'all 0.15s ease',
  fontSize: '13px',
  fontWeight: 500,
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  ...(compact && { opacity: 0, width: 0 }),
}))

const BulletIcon = styled('div')<{ active: any }>(({ theme, active }) => ({
  width: 4,
  height: 4,
  marginLeft: '10px',
  marginRight: '8px',
  overflow: 'hidden',
  borderRadius: '50%',
  background: active ? theme.palette.primary.main : theme.palette.text.disabled,
  boxShadow: active ? `0px 0px 0px 3px ${theme.palette.primary[200]}` : 'none',
}))

const BadgeValue = styled(Box)<{ compact: any }>(({ compact, theme }) => ({
  color: 'white',
  fontSize: '12px',
  fontWeight: 500,
  padding: '1px 6px',
  overflow: 'hidden',
  borderRadius: '300px',
  backgroundColor: theme.palette.primary.main,
  display: compact ? 'none' : 'unset',
}))

// Common icon style
const iconStyle = (active: any) => ({
  fontSize: 18,
  marginRight: '4px',
  color: active ? 'primary.main' : 'text.secondary',
  '.secondary': {
    color: active ? 'primary.400' : 'text.disabled',
  },
})

interface MultiLevelMenuProps {
  sidebarCompact: any
}

const MultiLevelMenu: FC<React.PropsWithChildren<MultiLevelMenuProps>> = (props) => {
  const { sidebarCompact } = props

  const router = useRouter()
  const { t } = useTranslation('router')
  const { pathname } = router

  // handle active current page
  const activeRoute = (path: string) => (pathname === path ? 1 : 0)
  // handle navigate to another route or page
  const handleNavigation = (path: string) => router.push(path)

  //   RECURSIVE FUNCTION TO RENDER MULTI LEVEL MENU
  const renderLevels = (data: any) => {
    return data.map((item: any, index: any) => {
      const name = t(item.name)
      if (item.type === 'label')
        return (
          <ListLabel key={index} compact={sidebarCompact ? 1 : 0}>
            {t(item.label)}
          </ListLabel>
        )

      if (item.children) {
        return (
          <SidebarAccordion key={index} item={item} sidebarCompact={sidebarCompact}>
            {renderLevels(item.children)}
          </SidebarAccordion>
        )
      } else if (item.type === 'extLink') {
        return (
          <ExternalLink key={index} href={item.path} rel="noopener noreferrer" target="_blank">
            <NavItemButton key={name} name="child" active={0}>
              {(() => {
                if (item.icon) {
                  return <item.icon sx={iconStyle(0)} />
                } else {
                  return <span className="item-icon icon-text">{item.iconText}</span>
                }
              })()}

              <StyledText compact={sidebarCompact ? 1 : 0} active={activeRoute(item.path)}>
                {name}
              </StyledText>

              <Box mx="auto" />

              {item.badge && <BadgeValue compact={sidebarCompact ? 1 : 0}>{item.badge.value}</BadgeValue>}
            </NavItemButton>
          </ExternalLink>
        )
      } else {
        return (
          <Box key={index}>
            <NavItemButton
              key={name}
              className="navItem"
              active={activeRoute(item.path)}
              onClick={() => handleNavigation(item.path)}
            >
              {item?.icon ? (
                <item.icon sx={iconStyle(activeRoute(item.path))} />
              ) : (
                <BulletIcon active={activeRoute(item.path)} />
              )}

              <StyledText compact={sidebarCompact ? 1 : 0} active={activeRoute(item.path)}>
                {name}
              </StyledText>

              <Box mx="auto" />

              {item.badge && <BadgeValue compact={sidebarCompact ? 1 : 0}>{item.badge.value}</BadgeValue>}
            </NavItemButton>
          </Box>
        )
      }
    })
  }

  return <>{renderLevels(navigations)}</>
}

export default MultiLevelMenu
