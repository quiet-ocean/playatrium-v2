import { Box, styled } from '@mui/material'

export const StyledContainer = styled(Box)(({ theme }) => ({
  '& > div': {
    borderRight: `1px solid ${theme.palette.primary.light}`,
  },
  '&::before': {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light} 1px, transparent 1px)`,
    backgroundRepeat: 'repeat-x, no-repeat',
    // backgroundSize: {
    //   lg: `${100 / 10}% 100%, cover`,
    //   xl: `${100 / 12}% 100%, cover`,
    // },
    // borderRight: `1px solid ${theme.palette.primary.light}`,
    content: '""',
    height: '100%',
    left: `50%`,
    // [theme.breakpoints.up('xl')]: {
    //   padding: '0px',
    // },
    // [theme.breakpoints.down('xl')]: {
    //   // padding: '0px 20px',
    //   borderRight: `1px solid ${theme.palette.primary.light}`,
    // },
    position: 'absolute',
    top: 0,
    transition: 'width 1s, left 1s',
    width: `0%`,
  },
  height: '100%',
  position: 'relative',
}))

export const GridBgContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <StyledContainer
      className="grid-bg"
      sx={{
        '&::before': {
          backgroundSize: {
            lg: `${100 / 10}% 100%, cover`,
            md: `${100 / 10}% 100%, cover`,
            sm: `${100 / 5}% 100%, cover`,
            xl: `${100 / 12}% 100%, cover`,
            xs: `${100 / 5}% 100%, cover`,
          },
        },
      }}
    >
      {children}
    </StyledContainer>
  )
}
