import { Box, styled } from '@mui/material'

// declare module '@mui/material/Box' {
//   interface BoxPropsVariantOverrides {
//     dashed: true
//     dark: true
//     light: true
//   }
// }

export const SectionContainer = styled(Box)(({ theme }) => ({
  '&.header': {
    padding: '0px !important',
  },
  '&.light': {
    background: theme.palette.background.default,
  },
  // borderLeft: `1px solid #A8A8A8`,
  // borderRight: `1px solid #A8A8A8`,
  // height: window.innerHeight || window.document.documentElement.clientHeight,
  
  [theme.breakpoints.up('lg')]: {
    height: '100vh',
  },
  [theme.breakpoints.down('lg')]: {
    height: '100%',
  }
  // width: '100%',
  // margin: '0px 20px',
}))
