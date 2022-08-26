import { createTheme } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
    primary: true
    rounded: true
  }
}

const AtriumTheme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 425,
  //     md: 768,
  //     lg: 1440,
  //     xl: 1690,
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        // root: sx({
        //   border: `1px solid #00ff00`,
        // })
        root: ({ theme }) => ({
          '& a': {
            '&:hover': {
              color: '#FFF',
            },
            color: theme.palette.text.primary,
            textDecoration: 'none',
          },
          // borderRadius: 0,
          // textTransform: 'capitalize',
          lineHeight: '105%',
        }),
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: ({ theme }) => ({
            '&.medium': {
              fontSize: '18px',
              padding: '16px',
            },
            background: theme.palette.background.paper,
            borderRadius: 0,
            color: theme.palette.text.primary,
            fontFamily: 'Fractul Alt',
            fontSize: '16px',
            fontWeight: 600,
            padding: '6px 8px',
            textTransform: 'capitalize',
          }),
          // style: {
          //   color: '#ff0000',
          //   border: `1px solid #0000ff`,
          // }
        },
        {
          props: { variant: 'rounded' },
          style: () => ({
            '&.x-small': {
              fontSize: '12px',
              lineHeight: '100%',
              padding: '4px 10px',
            },
            borderRadius: '16px',
            fontFamily: 'Andale Mono Regular',
            fontSize: '18px',
            fontWeight: 400,
            letterSpacing: '0em',
            lineHeight: '22px',
            padding: '6px 16px',
            textAlign: 'center',
            textTransform: 'uppercase',
          }),
        },
        {
          props: { color: 'info' },
          style: ({ theme }) => ({
            // '&:hover, &.active': {
            '&.active': {
              background: theme.palette.info.main,
              border: `1px solid ${theme.palette.info.main} !important`,
              color: theme.palette.text.primary,
            },
            background: theme.palette.text.primary,
            border: `1px solid ${theme.palette.info.main}`,
            color: theme.palette.info.main,
          }),
        },
        {
          props: { color: 'warning' },
          style: ({ theme }) => ({
            '&:hover, &.active': {
              background: theme.palette.text.secondary,
              border: `1px solid ${theme.palette.warning.main} !important`,
              color: theme.palette.warning.main,
            },
            background: theme.palette.warning.main,
            border: `1px solid transparent`,
            color: theme.palette.text.secondary,
          }),
        },
      ],
    },
  },
  palette: {
    background: {
      default: '#F2F2F2',
      paper: '#252525',
    },
    common: {
      black: '#1A1A1A',
      white: '#FFF',
    },
    error: {
      main: '#D11F00',
    },
    // grey: {
    //   100: '',
    // },
    info: {
      main: '#0049D1',
    },
    mode: 'dark',
    primary: {
      // dark: '',
      light: '#A8A8A8',
      main: '#80868B',
      // contrastText: '',
    },
    // secondary: {
    //   dark: '',
    //   light: '',
    //   main: '',
    // },
    text: {
      disabled: '#4A4A4A',
      primary: '#F2F2F2',
      secondary: '#252525',
    },
    warning: {
      main: '#FFDC00',
    },
  },
  spacing: 4,
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
      fontSize: '18px',
      fontWeight: 400,
      letterSpacing: '-0.05em',
      lineHeight: '110%',
      textAlign: 'left',
    },
    caption: {
      fontFamily: 'Andale Mono Regular',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '-0.05em',
      lineHeight: '14.7px',
      textAlign: 'left',
    },
    // h1: {
    // },
    h2: {
      //styleName: Desktop/H2;
      fontFamily: 'Fractul Alt',
      fontSize: '72px',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: '76px',
      textAlign: 'left',
    },

    h3: {
      fontFamily: 'Fractul Alt',
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
