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

import DiscordIcon from '../assets/images/discord-icon.png'
import CrossIcon from '../assets/images/logo-36.png'
import logoType from '../assets/images/logo-type.png'
import TwitterIcon from '../assets/images/twitter-icon.png'
import YoutubeIcon from '../assets/images/youtube-icon.png'
import { palette } from '../themes/AtriumTheme'

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

      position: 'absolute',

      top: 0,

      width: '100%',
    },
    background: 'transparent',
    display: { md: 'none', xs: 'block' },
    height: '100%',
    left: '0px !important',
    right: '0px !important',
    width: '100%',
  },
}

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl" /*sx={{ paddingRight: {xl: 30, xs: 6} }} */>
        <Toolbar disableGutters>
          <Logo
            sx={{
              display: { md: 'flex', xs: 'none' },
            }}
          />
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
                    {page}
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
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ height: 36, width: 36 }} onClick={handleOpenNavMenu}>
              <img src={CrossIcon} alt="" width="100%" height="100%" />
            </Box>
            <Box>
              <JoinButton />
            </Box>
          </Box>
          <Box
            width="100%"
            display={{ md: 'flex', xs: 'none' }}
            justifyContent="center"
          >
            <Box sx={{ height: 36, width: 36 }}>
              <a href="/#">
                <img src={CrossIcon} alt="" width="100%" height="100%" />
              </a>
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: 'flex', xs: 'none' },
              flexGrow: 1,
              justifyContent: 'space-between',
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
