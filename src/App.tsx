import { Box, ThemeProvider } from '@mui/material'
import React, { useState, useEffect } from 'react'

import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'

import { Header, Footer, Wrapper } from './components'
// import useInterval from './hooks/useInterval'
import {
  HeroSection,
  IntegrationsSection,
  UpdatesSection,
  OverviewSection,
  ProfilesSection,
  JoinSection,
} from './sections'
import AtriumTheme from './themes/AtriumTheme'

const App: React.FC = () => {
  const [animClass, setAnimClass] = useState('')

  useEffect(() => {
    setAnimClass('bg-animation')
  }, [])

  return (
    <Box>
      <ThemeProvider theme={AtriumTheme}>
        <Box sx={{ background: AtriumTheme.palette.common.black }}>
          <Box
            className={`${animClass}`}
            sx={{
              '& > div:not(.header), .grid-bg': {
                '&::before': {
                  backgroundImage: `linear-gradient(to right, #A8A8A8 1px, transparent 1px)`,
                  backgroundRepeat: 'repeat-x, no-repeat',
                  backgroundSize: `${100 / 12}% 100%, cover`,
                  content: '""',
                  height: '100%',
                  left: `50%`,
                  position: 'absolute',
                  top: 0,
                  transition: 'width 1s, left 1s',
                  width: `0%`,
                },
                position: 'relative',
              },
              '&.bg-animation > div:not(.header), &.bg-animation .grid-bg': {
                '&::before': {
                  left: `0%`,
                  width: `100%`,
                },
                position: 'relative',
              },
            }}
          >
            <Wrapper className="header">
              <Box height="100%" display="flex" flexDirection="column">
                <Header />
                <HeroSection playAnimation={animClass === 'bg-animation'} />
              </Box>
            </Wrapper>
            <Wrapper
              sx={{ background: AtriumTheme.palette.background.default }}
            >
              <UpdatesSection />
            </Wrapper>
            <Wrapper>
              <OverviewSection />
            </Wrapper>
            <Wrapper
              sx={{ background: AtriumTheme.palette.background.default }}
            >
              <ProfilesSection />
            </Wrapper>
            <IntegrationsSection />
            <JoinSection />
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  )
}

export default App
