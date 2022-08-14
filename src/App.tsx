import { Box, styled, ThemeProvider } from '@mui/material'
import React from 'react'

import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'

import { Header, Footer } from './components'
import { HeroSection } from './sections'
import AtriumTheme from './themes/AtriumTheme'

const Wrapper = styled(Box)(() => ({
  width: '100%',
}))
const App: React.FC = () => {

  return (
    <Box>
      <ThemeProvider theme={AtriumTheme}>
        <Header />
        <Wrapper>
          <HeroSection />
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </Box>
  )
}

export default App
