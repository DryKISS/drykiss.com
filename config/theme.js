/**
 * DryKiss Theme
 *
 */

const fonts = {
  openSans: "'Open Sans'"
}

export const COLOUR = {
  drykiss_lightBlue: '#00D2D2',
  drykiss_darkPink: '#FF6E91',
  darkBlue: '#002B54',
  lightBlue: '#E8EDFC',
  darkGeryText: 'rgb(124, 124, 124)',

  active: '#000000',
  visited: '#00D2D2',

  white: '#ffffff',
  black: '#000000',

  dark: 'rgb(92, 111, 127)',
  light: 'rgb(236, 240, 243)',
  gray90: '#1A1A1A',

  primary: '#0F7CE3',
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
    fontFamily: fonts.openSans,
    fontSize: '3rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h2: {
    fontFamily: fonts.openSans,
    fontSize: '2.25rem',
    lineHeight: '1',
    textTransform: 'initial'
  },
  h3: {
    fontFamily: fonts.openSans,
    fontSize: '1.875rem',
    lineHeight: '1',
    textTransform: 'initial'
  },
  h4: {
    fontFamily: fonts.openSans,
    fontSize: '1.5rem',
    lineHeight: '1.75',
    textTransform: 'initial'
  },
  h5: {
    fontFamily: fonts.openSans,
    fontSize: '1.25rem',
    lineHeight: '1.5',
    textTransform: 'initial'
  },
  h6: {
    fontFamily: fonts.openSans,
    fontSize: '1.125rem',
    lineHeight: '1.5',
    textTransform: 'initial'
  }
}

const NAVBAR = {
  // Navbar
  background: COLOUR.primary,
  borderBottom: 'none',
  borderTopWidth: '0.125rem',
  borderTopColor: COLOUR.primary,

  // Overlay
  backgroundOverlay: COLOUR.gray90,

  // Toggler
  colourToggler: COLOUR.white,
  colourHoverToggler: COLOUR.white,

  // Link
  colourDefault: COLOUR.light,
  colourDefaultDesktop: COLOUR.light,

  // ListItem
  backgroundHoverListItem: COLOUR.dark
}

const PAGE = {
  marginTop: '-1rem',
  backGroundColour: COLOUR.white
}

const TYPOGRAPHY = {
  font: fonts.openSans,
  fontFamilies: fonts,
  fontColour: COLOUR.black,
  fontSizeBase: '1rem'
}

const FOOTER = {
  background: '#002B54',
  colour: '#B5DBFF'
}

const COPYRIGHT = {
  background: '#002B54',
  colour: '#B5DBFF'
}

export const Theme = {
  COLOUR,
  COPYRIGHT,
  FOOTER,
  HEADINGS,
  NAVBAR,
  PAGE,
  TYPOGRAPHY
}
