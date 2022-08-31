import { Box, styled } from '@mui/material'

import { palette } from '../themes/AtriumTheme'

export const RootLayout = styled(Box)(({ theme }) => ({
  '& .MuiAppBar-root': {
    background: palette.common.black,
    backgroundImage: 'none',
    boxShadow: 'none',
  },
  '& > div > div:not(.header, .grid-bg), footer': {
    [theme.breakpoints.up('xl')]: {
      padding: '0px',
    },
    [theme.breakpoints.down('xl')]: {
      padding: '0px 20px',
    },
  },
  '&.scroll-up .MuiAppBar-root': {
    backdropFilter: 'blur(15px)',
    background: 'rgba(26, 26, 26, 0.3)',
    // background: 'red',
  },
  scrollSnapType: 'y mandatory',
}))
