import { Box, Typography, styled } from '@mui/material'

export const ResponsiveMenuContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
      position: { lg: 'static', md: 'static', sm: 'fixed', xs: 'fixed' },
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      gap: 3,
      mt: { lg: '0px', md: '0px', sm: '77px', xs: '77px' },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(26, 26, 26, 0.75)',
        /* Bg Blur Dark */

        backdropFilter: 'blur(20px)',
      }
    }}>
      {children}
    </Box>
  )
}

export const MobileAppBar = () => {
  return (
    <Box>mobile header</Box>
  )
}