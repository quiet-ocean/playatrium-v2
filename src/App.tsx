import { Box, ThemeProvider, CssBaseline, AppBar, Slide } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import React, { useState, useEffect, useCallback } from 'react'
import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'
import './fonts/fractul alt/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  Footer,
  GridBgContainer,
  ResponsiveAppBar,
  RootLayout,
} from './components'
import { Home, Policy } from './pages'
import AtriumTheme from './themes/AtriumTheme'

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
  const [open, setOpen] = useState(false)
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  useEffect(() => {
    setOpen(trigger)
  }, [trigger])
  return (
    <Slide appear={false} direction="down" in={!open}>
      {children}
    </Slide>
  )
}
const sticky = 500
const App: React.FC = () => {
  const [scrollUp, setScrollUp] = useState(false)
  const [y, setY] = useState(window.scrollY)

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
            className={`bg-animation ${
              scrollUp && y > sticky ? 'scroll-up' : ''
            }`}
          >
            <HideOnScroll>
              <AppBar
                sx={{ borderBottom: `1px solid rgba(168, 168, 168, 0.1)` }}
              >
                <ResponsiveAppBar />
              </AppBar>
            </HideOnScroll>
            <BrowserRouter>
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="policy" element={<Policy />} />
              </Routes>
              <Box
                className="footer"
                px={{ lg: 5, xl: 0 }}
                sx={{
                  '& .grid-bg': {
                    '&::before': {
                      left: `0%`,
                      width: `100%`,
                    },
                    // position: 'relative',
                  },
                  // minHeight: '1000px',
                }}
              >
                <GridBgContainer>
                  <Footer />
                </GridBgContainer>
              </Box>
            </BrowserRouter>
          </RootLayout>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
