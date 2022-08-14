import { createTheme } from "@mui/material";

const AtriumTheme = createTheme({
  palette: {
    background: {
      default: '#F2F2F2',
      paper: '#252525',
    },
    common: {
      white: '#F2F2F2',
      black: '#1A1A1A',
    },
    grey: {
      100: '',
    },
    mode: 'dark',
    primary: {
      main: '',
      light: '',
      dark: '',
      // contrastText: '',
    },
    secondary: {
      main: '',
      light: '',
      dark: ''
    },
    text: {
      primary: '#F2F2F2',
      secondary: '#252525',
      disabled: '#4A4A4A',
    },
    error: {
      main: '#D11F00',
    },
    info: {
      main: '#0049D1',
    },
    warning: {
      main: '#FFDC00',
    }
  },
  typography: {
    // h1: {

    // },
    h2: {
      //styleName: Desktop/H2;
      fontFamily: 'Fractul',
      fontSize: '72px',
      fontWeight: 600,
      lineHeight: '76px',
      letterSpacing: '-0.03em',
      textAlign: 'left',
    },
    h3: {
      fontFamily: 'Fractul',
      fontSize: '48px',
      fontWeight: 600,
      lineHeight: '105%',
      letterSpacing: '-0.03em',
      textAlign: 'left',
    },
    h4: {
      fontFamily: 'Fractul Alt',
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: '105%',
      letterSpacing: '-0.03em',
      textAlign: 'left',
    },
    h5: {
      fontFamily: 'Fractul Alt',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '105%',
      letterSpacing: '-0.03em',
      textAlign: 'left',
    },
    // subtitle1: {

    // },
    // subtitle2: {

    // },
    body1: {
      fontFamily: 'Andale Mono Regular',
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '105%',
      letterSpacing: '-0.05em',
      textAlign: 'left',
    },
    body2: {
      fontFamily: 'Andale Mono Regular',
      fontSize: '28px',
      fontWeight: 400,
      lineHeight: '110%',
      letterSpacing: '-0.05em',
      textAlign: 'left',
    },
    // button: {

    // },
    // caption: {

    // },
    // overline: {

    // }
  }

})

export default AtriumTheme

export const palette = AtriumTheme.palette