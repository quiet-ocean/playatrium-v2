import { createTheme } from '@mui/material'

const AtriumTheme = createTheme({
  palette: {
    background: {
      default: '#F2F2F2',
      paper: '#252525',
    },
    common: {
      black: '#1A1A1A',
      white: '#F2F2F2',
    },
    error: {
      main: '#D11F00',
    },
    grey: {
      100: '',
    },
    info: {
      main: '#0049D1',
    },
    mode: 'dark',
    primary: {
      dark: '',
      light: '',
      main: '',
      // contrastText: '',
    },
    secondary: {
      dark: '',
      light: '',
      main: '',
    },
    text: {
      disabled: '#4A4A4A',
      primary: '#F2F2F2',
      secondary: '#252525',
    },
    warning: {
      main: '#FFDC00',
    },
  },
  typography: {
    // subtitle1: {
    // },
    // subtitle2: {
    // },
    body1: {
      fontFamily: 'Andale Mono Regular',
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '-0.05em',
      lineHeight: '105%',
      textAlign: 'left',
    },

    body2: {
      fontFamily: 'Andale Mono Regular',
      fontSize: '28px',
      fontWeight: 400,
      letterSpacing: '-0.05em',
      lineHeight: '110%',
      textAlign: 'left',
    },

    // h1: {
    // },
    h2: {
      //styleName: Desktop/H2;
      fontFamily: 'Fractul',
      fontSize: '72px',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: '76px',
      textAlign: 'left',
    },

    h3: {
      fontFamily: 'Fractul',
      fontSize: '48px',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: '105%',
      textAlign: 'left',
    },

    h4: {
      fontFamily: 'Fractul Alt',
      fontSize: '36px',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: '105%',
      textAlign: 'left',
    },
    h5: {
      fontFamily: 'Fractul Alt',
      fontSize: '24px',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: '105%',
      textAlign: 'left',
    },
    // button: {

    // },
    // caption: {

    // },
    // overline: {

    // }
  },
})

export default AtriumTheme

export const palette = AtriumTheme.palette
