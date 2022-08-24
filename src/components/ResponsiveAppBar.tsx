import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoType from '../assets/images/logo-type.png'
import { palette } from '../themes/AtriumTheme'
import CrossIcon from '../assets/images/logo-36.png'

const pages = ['updates', 'overview', 'integrations', 'profiles', 'team']

const Logo = ({ sx }: { sx?: object }) => {
  return (
    <Box py={2} width="100%" sx={sx}>
      <a href="/#">
        <img src={logoType} alt="" />
      </a>
    </Box>
  )
}
const JoinButton = () => {
  return (
    <Button
      variant="primary"
      sx={{
        background: palette.warning.main,
        color: palette.text.secondary,
        width: '124px',
      }}
    >
      join discord
    </Button>
  )
}
const menuStyle = {
  '& > .MuiPaper-root': {
    display: { xs: 'block', md: 'none' },
    width: '100%',
    height: '100%',
    background: 'transparent',
    left: '0px !important',
    right: '0px !important',
    '& li': {
      padding: 6,
      borderTop: `1px solid ${palette.background.default}`,
    },
    '&::before': {
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
  },
}

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" /*sx={{ paddingRight: {xl: 30, xs: 6} }} */ >
        <Toolbar disableGutters>
          <Logo sx={{
            display: { xs: 'none', md: 'flex' },
          }} />
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            width: '100%',
          }}>
            <Logo />
            {/* <NavMenu /> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={menuStyle}
            >
              <Box display="flex" justifyContent="center" pt={2} pb={10}>
                <img src={CrossIcon} alt="" width={36} height={36} />
              </Box>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant="h4" fontFamily={'Fractul Alt'} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box
              sx={{ width: 36, height: 36 }}
              onClick={handleOpenNavMenu}
            >
              <img src={CrossIcon} alt="" width="100%" height="100%"/>
            </Box>
            <Box>
              <JoinButton />
            </Box>
          </Box>
          <Box width="100%" display={{ xs: 'none', md: 'flex' }} justifyContent="center">
            <Box
              sx={{ width: 36, height: 36 }}
            >
              <img src={CrossIcon} alt="" width="100%" height="100%"/>
            </Box>
          </Box>
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            justifyContent: 'space-between',
            width: '100%',
          }}>
            
            <Box sx={{
              display: 'flex',
              gap: 3,
              py: 1,
            }}>
              {pages.map((item: string, key: number) => (
                <Box key={key}>
                  <Button variant="primary">
                    <a href={`#${item}-section`}>{item}</a>
                  </Button>
                </Box>
              ))}
              <Box>
                <JoinButton />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
