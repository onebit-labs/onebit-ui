import { alpha } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteColor {
    100: string
    200: string
    300: string
    400: string
    red?: string
    purple?: string
    yellow?: string
  }
}

const primaryMain = '#002FA7'
const darkPrimaryMain = '#2499EF'
export const primary = {
  light: '#E5F3FD',
  main: primaryMain,
  100: alpha(primaryMain, 0.08),
  200: alpha(primaryMain, 0.2),
  300: alpha(primaryMain, 0.3),
  400: alpha(primaryMain, 0.4),
  red: '#FF6B93',
  purple: '#A798FF',
  yellow: '#FF9777',
}

export const darkPrimary = {
  ...primary,
  light: '#E5F3FD',
  main: darkPrimaryMain,
  100: alpha(darkPrimaryMain, 0.08),
  200: alpha(darkPrimaryMain, 0.2),
  300: alpha(darkPrimaryMain, 0.3),
  400: alpha(darkPrimaryMain, 0.4),
}

const secondaryMain = '#2499EF'

export const secondary = {
  main: secondaryMain,
  100: alpha(secondaryMain, 0.08),
  200: alpha(secondaryMain, 0.2),
  300: alpha(secondaryMain, 0.3),
  400: alpha(secondaryMain, 0.4),
}

export const info = {
  main: '#2499EF',
}

export const success = {
  main: '#27CE88',
}

export const warning = {
  main: '#FFC675',
}

export const error = {
  main: '#FF316F',
}

// For light theme
export const greyLight = {
  50: '#f9f9f9',
  100: '#eff3f5',
  200: '#D3E6F3',
  300: '#B1C9DC',
  400: '#8CA3BA',
  500: '#5F748D',
  600: '#455A79',
  700: '#2F4365',
  800: '#1E2E51',
  900: '#121F43',
}

// For dark theme
export const greyDark = {
  900: '#E9F3F9',
  800: '#D3E6F3',
  700: '#B1C9DC',
  600: '#8CA3BA',
  500: '#5F748D',
  400: '#455A79',
  300: '#2F4365',
  200: '#1E2E51',
  100: '#121F43',
  50: '#111111',
}

// For Light theme
export const textLight = {
  primary: greyLight[900],
  secondary: greyLight[500],
  disabled: greyLight[400],
}

// For Dark theme
export const textDark = {
  primary: '#ffffff',
  secondary: greyDark[600],
  disabled: greyDark[500],
}

// For Light theme
export const actionLight = {
  activatedOpacity: 0.12,
  active: alpha(greyLight[900], 0.54),
  disabled: greyLight[300],
  disabledBackground: alpha(greyLight[900], 0.12),
  disabledOpacity: 0.38,
  focus: alpha(greyLight[900], 0.12),
  focusOpacity: 0.12,
  hover: alpha(greyLight[900], 0.04),
  hoverOpacity: 0.04,
  selected: greyLight[100],
  selectedOpacity: 0.08,
}

// For Dark theme
export const actionDark = {
  activatedOpacity: 0.12,
  active: alpha(greyDark[900], 0.54),
  disabled: greyDark[300],
  disabledBackground: alpha(greyDark[900], 0.12),
  disabledOpacity: 0.38,
  focus: alpha(greyDark[900], 0.12),
  focusOpacity: 0.12,
  hover: alpha(greyDark[900], 0.04),
  hoverOpacity: 0.04,
  selected: greyDark[100],
  selectedOpacity: 0.08,
}

// Common colors
const palette = {
  info,
  error,
  primary,
  success,
  warning,
  secondary,
}

export const lightPalette = {
  ...palette,
  mode: 'light',
  grey: greyLight,
  text: textLight,
  action: actionLight,
  divider: greyLight[200],
  background: { default: '#f3f4f9', paper: '#ffffff' },
}

export const darkPalette = {
  ...palette,
  primary: darkPrimary,
  mode: 'dark',
  grey: greyDark,
  text: textDark,
  action: actionDark,
  divider: greyDark[400],
  background: { default: '#171c24', paper: '#222b36' },
}
