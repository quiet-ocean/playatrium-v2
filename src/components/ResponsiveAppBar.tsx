import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import CrossIcon from '../assets/images/cross-icon-36.svg'
import DiscordIcon from '../assets/images/discord-icon.svg'
import logoType from '../assets/images/logo-type-small.svg'
import TwitterIcon from '../assets/images/twitter-icon.svg'
import YoutubeIcon from '../assets/images/youtube-icon.svg'
import { palette } from '../themes/AtriumTheme'
const pages = ['updates', 'overview', 'integrations', 'profiles', 'team']

const Logo = ({ sx }: { sx?: object }) => {
  return (
    <Box py={2} width="100%" sx={sx}>
      <Link to="/">
        <img src={logoType} alt="" />
      </Link>
    </Box>
  )
}
const JoinButton = () => {
  return (
    <Button variant="primary" color="warning" sx={{ width: '124px' }}>
      join discord
    </Button>
  )
}
const menuStyle = {
  '& > .MuiPaper-root': {
    '& li': {
      borderTop: `1px solid rgba(242, 242, 242, 0.2)`,
      padding: 6,
    },
    '&::before': {
      /* Bg Blur Dark */
      backdropFilter: 'blur(20px)',

      background: 'rgba(26, 26, 26, 0.75)',

      content: '""',

      height: '100%',

      left: 0,
      opacity: 1,
      position: 'fixed',

      top: 0,

      width: '100%',
    },
    background: 'transparent',
    bottom: '0px !important',
    display: { md: 'none', xs: 'block' },
    height: '100%',
    left: '0px !important',
    maxHeight: '100%',
    maxWidth: '100%',
    right: '0px !important',
    top: '0px !important',
    width: '100%',
  },
}

export const ResponsiveAppBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleNavClick = (sectionId: string) => {
    // console.log(location)
    const isPolicy = location.pathname.indexOf('policy') > -1

    if (isPolicy) {
      navigate(`/#${sectionId}-section`)
    }
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl" /*sx={{ paddingRight: {xl: 30, xs: 6} }} */>
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Box
            width="100%"
            display={{ md: 'flex', xs: 'none' }}
            justifyContent="space-between"
          >
            <Logo
              sx={{
                display: { md: 'flex', xs: 'none' },
              }}
            />
            <Box sx={{ height: 36, width: 36 }}>
              <a href="/#">
                <img src={CrossIcon} alt="" width="100%" height="100%" />
              </a>
            </Box>
          </Box>

          <Box
            sx={{
              display: { md: 'none', xs: 'flex' },
              flexGrow: 1,
              width: '100%',
            }}
          >
            <Logo />
            {/* <NavMenu /> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
              keepMounted
              transformOrigin={{
                horizontal: 'left',
                vertical: 'top',
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
                  <Typography
                    variant="h4"
                    fontFamily={'Fractul Alt'}
                    textAlign="center"
                  >
                    <a
                      href={`/#${page}-section`}
                      style={{ color: palette.text.primary }}
                    >
                      {page}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
              <Box
                display="flex"
                justifyContent="center"
                pt={10}
                gap={12}
                borderTop={`1px solid rgba(242, 242, 242, 0.2)`}
              >
                <IconButton>
                  <a href="/#">
                    <img src={DiscordIcon} alt="" />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="/#">
                    <img src={TwitterIcon} alt="" />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="/#">
                    <img src={YoutubeIcon} alt="" />
                  </a>
                </IconButton>
              </Box>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { md: 'none', xs: 'flex' },
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box sx={{ height: 36, width: 36 }} onClick={handleOpenNavMenu}>
              <img src={CrossIcon} alt="" width="100%" height="100%" />
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: 'none', xs: 'flex' },
              justifyContent: 'end',
              width: '100%',
            }}
          >
            {/* <Box sx={{ height: 36, width: 36 }} onClick={handleOpenNavMenu}>
              <img src={CrossIcon} alt="" width="100%" height="100%" />
            </Box> */}
            <Box>
              <JoinButton />
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: 'flex', xs: 'none' },
              flexGrow: 1,
              justifyContent: 'end',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                py: 1,
              }}
            >
              {pages.map((item: string, key: number) => (
                <Box key={key}>
                  <Button
                    variant="primary"
                    id={`#${item}-section-nav`}
                    onClick={() => handleNavClick(item)}
                  >
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
