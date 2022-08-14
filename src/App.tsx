import { Box, styled, ThemeProvider } from '@mui/material'
import React, { useEffect } from 'react'

import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'

import { Header, Footer } from './components'
import { HeroSection } from './sections'
import AtriumTheme from './themes/AtriumTheme'

const Wrapper = styled(Box)(() => ({
  height:
    window.outerHeight ||
    window.innerHeight ||
    window.document.documentElement.clientHeight,
  // width: '100%',
  padding: '20px',
}))
const App: React.FC = () => {
  useEffect(() => {
    console.log(AtriumTheme.spacing(1))
  }, [])
  return (
    <Box>
      <ThemeProvider theme={AtriumTheme}>
        <Box sx={{ background: AtriumTheme.palette.common.black }}>
          <Header />
          <Wrapper pt="0px !important">
            <HeroSection />
          </Wrapper>
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  )
}

export default App
