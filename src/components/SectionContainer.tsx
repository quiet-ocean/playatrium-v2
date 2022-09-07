import { Box, styled } from '@mui/material'

export const SectionContainer = styled(Box)(({ theme }) => ({
  '&.light': {
    background: theme.palette.background.default,
  },

  [theme.breakpoints.up('lg')]: {
    height: '100vh',
  },
  [theme.breakpoints.down('lg')]: {
    height: '100%',
  },
}))
