/**
 * DryKiss Theme
 *
 */
const TYPOGRAPHY = {
  font: '"JetBrains Mono"',
  fontSizeBase: '1rem;',
  fontWeight: 700
}

export const HEADINGS = {
  h1: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '2rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h2: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1.75rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h3: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1.5rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h4: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1.25rem',
    lineHeight: '1.25',
    textTransform: 'initial'
  },
  h5: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '1rem',
    letterSpacing: '2px',
    lineHeight: '1.5',
    textTransform: 'uppercase',
    fontWeight: 400
  },
  h6: {
    fontFamily: TYPOGRAPHY.font,
    fontSize: '0.875rem',
    letterSpacing: '2px',
    lineHeight: '1.5',
    textTransform: 'uppercase'
  }
}

export const Theme = {
  TYPOGRAPHY,
  HEADINGS
}
