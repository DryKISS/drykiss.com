/**
 * DryKiss Theme
 *
 */

// COLOURS
import { tint } from 'polished'

export const COLOUR = {
  drykiss_lightBlue: '#00D2D2',
  drykiss_darkPink: '#FF6E91',

  active: '#000000',
  visited: '#00D2D2',

  white: '#ffffff',
  black: '#000000',

  dark: 'rgb(92, 111, 127)',
  light: 'rgb(236, 240, 243)',

  primary: '#00D2D2',
  secondary: '#FF6E91',
  success: 'rgb(54, 197, 58)',
  info: 'rgb(148, 148, 126)',
  warning: 'rgb(222, 127, 40)',
  danger: 'rgb(212, 81, 81)',

  help: 'rgb(255, 203, 68)',

  male: 'rgb(142, 206, 253)',
  female: 'rgb(248, 139, 157)',

  transparent: 'transparent'
}

export const HEADINGS = {
  h1: {
    fontFamily: 'JetBrains Mono Bold',
    fontSize: '2rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h2: {
    fontFamily: 'JetBrains Mono Bold',
    fontSize: '1.75rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h3: {
    fontFamily: 'JetBrains Mono Bold',
    fontSize: '1.5rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h4: {
    fontFamily: 'JetBrains Mono Bold',
    fontSize: '1.25rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h5: {
    fontFamily: 'JetBrains Mono',
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  },
  h6: {
    fontFamily: 'JetBrains Mono',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  }
}

const NAVBAR = {
  // Navbar
  background: '#242424',
  borderTopWidth: '0.125rem',
  borderTopColor: COLOUR.primary,
  padding: '1rem 1rem 0 1rem',
  paddingTablet: '1rem 1rem 0 1.5rem',
  paddingDesktop: '1rem 1rem 0 3rem',

  // Overlay
  backgroundOverlay: '#242424',
  widthOverlay: '180px',

  // Toggler
  colourToggler: COLOUR.white,
  fontSizeToggler: '0.875',
  paddingToggler: '0.25rem 0',
  colourHoverToggler: COLOUR.success,

  // Collapse
  positionCollapse: 'fixed',

  // Link
  paddingLink: '0 1rem',
  colourDefault: COLOUR.white,
  colourHover: COLOUR.primary,
  colourDefaultDesktop: COLOUR.white,
  colourHoverDesktop: COLOUR.primary,

  // List
  fontSizeList: '12px',

  // ListItem
  borderTopListItem: 'none',
  backgroundListItem: COLOUR.transparent,
  justifyContentDesktopListItem: 'flex-start',
  marginBottomDesktopListItem: 'none',
  backgroundHoverListItem: COLOUR.transparent,
  borderBottomHoverListItem: 'none'
}

const PAGE = {
  marginTop: '-1rem',
  backGroundColour: COLOUR.white
}

const TYPOGRAPHY = {
  font: "'OpenSans'",
  fontColour: COLOUR.black,
  fontSizeBase: '1rem'
}

export const Theme = {
  COLOUR,
  HEADINGS,
  NAVBAR,
  PAGE,
  TYPOGRAPHY
}
