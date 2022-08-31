import { Box, ThemeProvider, CssBaseline, Slide, AppBar } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import React, { useState, useEffect, useCallback } from 'react'

import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'
import './fonts/fractul alt/stylesheet.css'
import {
  ResponsiveAppBar,
  Footer,
  SectionContainer,
  GridBgContainer,
  RootLayout,
} from './components'
// import useInterval from './hooks/useInterval'
import {
  HeroSection,
  IntegrationsSection,
  UpdatesSection,
  OverviewSection,
  ProfilesSection,
  BuildersSection,
  JoinSection,
} from './sections'
import AtriumTheme from './themes/AtriumTheme'

// app bar style when scroll up
// background: rgba(26, 26, 26, 0.8);
// backdrop-filter: blur(15px);

const sticky = 500

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}
function HideOnScroll(props: Props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const App: React.FC = () => {
  //
  const [animClass, setAnimClass] = useState('')
  const [scrollUp, setScrollUp] = useState(false)
  const [y, setY] = useState(window.scrollY)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // document.body.style.paddingRight = '10px'
    setAnimClass('bg-animation')

    setTimeout(() => {
      document.body.style.overflow = 'visible'
      // document.body.style.paddingRight = '0px'
      // setEnable(true)
    }, 4200)

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleNavigation = useCallback(() => {
    // const window = e.currentTarget
    if (y > window.scrollY) {
      // console.log("scrolling up");
      setScrollUp(true)
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
      setScrollUp(false)
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={AtriumTheme}>
        <Box sx={{ background: AtriumTheme.palette.common.black }}>
          <RootLayout
            className={`${animClass} ${
              scrollUp && y > sticky ? 'scroll-up' : ''
            }`}
          >
            <SectionContainer className="header" height="100vh !important">
              <Box height="100%" display="flex" flexDirection="column">
                <HideOnScroll>
                  <AppBar
                    sx={{ borderBottom: `1px solid rgba(168, 168, 168, 0.1)` }}
                  >
                    <ResponsiveAppBar />
                  </AppBar>
                </HideOnScroll>
                <Box sx={{ height: '100%', width: '100%' }}>
                  <GridBgContainer top>
                    <HeroSection playAnimation={animClass === 'bg-animation'} />
                  </GridBgContainer>
                </Box>
              </Box>
            </SectionContainer>
            <SectionContainer className="update light">
              <UpdatesSection />
            </SectionContainer>
            <SectionContainer
              sx={{
                scrollSnapAlign: 'center',
              }}
            >
              <GridBgContainer>
                <OverviewSection />
              </GridBgContainer>
            </SectionContainer>
            <SectionContainer className="light">
              <GridBgContainer>
                <ProfilesSection />
              </GridBgContainer>
            </SectionContainer>
            <Box px={{ lg: 5, xl: 0 }}>
              <GridBgContainer>
                <IntegrationsSection />
              </GridBgContainer>
            </Box>
            <SectionContainer
              minHeight="100vh !important"
              height="100% !important"
            >
              <GridBgContainer
                sx={{
                  height: '100% !important',
                  minHeight: '100vh !important',
                }}
              >
                <BuildersSection />
              </GridBgContainer>
            </SectionContainer>
            <Box
              px={{ lg: 5, xl: 0 }}
              sx={{
                background: AtriumTheme.palette.info.main,
              }}
            >
              <GridBgContainer>
                <JoinSection />
              </GridBgContainer>
            </Box>
            <Box px={{ lg: 5, xl: 0 }}>
              <GridBgContainer>
                <Footer />
              </GridBgContainer>
            </Box>
          </RootLayout>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
