import { Box, styled, ThemeProvider } from '@mui/material'
import React from 'react'

import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'

import { Header, Footer } from './components'
import {
  HeroSection,
  UpdatesSection,
  OverviewSection,
  ProfilesSection,
} from './sections'
import AtriumTheme from './themes/AtriumTheme'

const Wrapper = styled(Box)(() => ({
  // height: window.innerHeight || window.document.documentElement.clientHeight,
  height: '100vh',
  // width: '100%',
  padding: '20px',
}))
const App: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={AtriumTheme}>
        <Box sx={{ background: AtriumTheme.palette.common.black }}>
          <Header />
          <Wrapper pt="0px !important">
            <HeroSection />
          </Wrapper>
          <Wrapper sx={{ background: AtriumTheme.palette.background.default }}>
            <UpdatesSection />
          </Wrapper>
          <Wrapper>
            <OverviewSection />
          </Wrapper>
          <Wrapper sx={{ background: AtriumTheme.palette.background.default }}>
            <ProfilesSection />
          </Wrapper>
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  )
}

export default App
