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
import { useLocation, useNavigate } from 'react-router-dom'

import CrossIcon from '../assets/images/cross-icon-36.svg'
import DiscordIcon from '../assets/images/discord-icon.svg'
import logoType from '../assets/images/logo-type-small.svg'
import TwitterIcon from '../assets/images/twitter-icon.svg'
import YoutubeIcon from '../assets/images/youtube-icon.svg'
import { palette } from '../themes/AtriumTheme'
const pages = ['updates', 'overview', 'integrations', 'profiles', 'team']

function scrollToTop() {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}
const Logo = ({ sx }: { sx?: object }) => {
  return (
    <Box py={2} width="100%" sx={sx}>
      <Box
        sx={{
          cursor: 'pointer',
        }}
        onClick={scrollToTop}
      >
        <img src={logoType} alt="" />
      </Box>
    </Box>
  )
}
const JoinButton = () => {
  return (
    <Button variant="primary" color="warning" sx={{ width: '124px' }}>
      <a href="https://discord.gg/4K2G8TxCKU" target="_blank">
        join discord
      </a>
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

const MenuToggleButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: AnyFunction
}) => (
  <Button
    variant="primary"
    color="inherit"
    sx={{
      border: `1px solid ${palette.common.white}`,
      px: 7,
    }}
    onClick={onClick}
  >
    {children}
  </Button>
)
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
    handleCloseNavMenu()
    const isPolicy = location.pathname.indexOf('policy') > -1

    if (isPolicy) {
      navigate(`/#${sectionId}-section`)
    }
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
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
              <Box onClick={scrollToTop}>
                <img src={CrossIcon} alt="" width="100%" height="100%" />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: { md: 'none', xs: 'flex' },
              flexGrow: 1,
              width: '100%',
            }}
          >
            {/* <Logo /> */}
            <MenuToggleButton onClick={handleOpenNavMenu}>
              Menu
            </MenuToggleButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                horizontal: 'center',
                vertical: 'bottom',
              }}
              keepMounted
              transformOrigin={{
                horizontal: 'center',
                vertical: 'top',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={menuStyle}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                py={10}
                px={6}
                onClick={scrollToTop}
              >
                <Box>
                  <img src={CrossIcon} alt="" width={36} height={36} />
                </Box>
                <Box>
                  <MenuToggleButton onClick={handleCloseNavMenu}>
                    Close
                  </MenuToggleButton>
                </Box>
              </Box>
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavClick(page)}>
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
            <Box sx={{ height: 36, width: 36 }} onClick={scrollToTop}>
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
