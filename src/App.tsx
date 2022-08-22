import { Box, ThemeProvider, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'

import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'
import { Header, Footer, SectionContainer, GridBgContainer } from './components'
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

const Root = styled(Box)(({ theme }) => ({
  '& > div:not(.header)': {
    [theme.breakpoints.up('xl')]: {
      padding: '0px',
    },
    [theme.breakpoints.down('xl')]: {
      padding: '0px 20px',
    },
  },
  '&.bg-animation .grid-bg': {
    '&::before': {
      left: `0%`,
      width: `100%`,
    },
    position: 'relative',
  },
}))
const App: React.FC = () => {
  const [animClass, setAnimClass] = useState('')

  useEffect(() => {
    setAnimClass('bg-animation')
  }, [])

  return (
    <Box>
      <ThemeProvider theme={AtriumTheme}>
        <Box sx={{ background: AtriumTheme.palette.common.black }}>
          {/* <Box
            className={`${animClass}`}
            sx={{
              //   '& > div:not(.header, .update), .grid-bg': {
              //     '&::before': {
              //       backgroundImage: `linear-gradient(to right, #A8A8A8 1px, transparent 1px)`,
              //       backgroundRepeat: 'repeat-x, no-repeat',
              //       backgroundSize: `${100 / 10}% 100%, cover`,
              //       content: '""',
              //       height: '100%',
              //       left: `50%`,
              //       position: 'absolute',
              //       top: 0,
              //       transition: 'width 1s, left 1s',
              //       width: `0%`,
              //     },
              //     position: 'relative',
              //   },
              '&.bg-animation .grid-bg': {
                '&::before': {
                  left: `0%`,
                  width: `100%`,
                },
                position: 'relative',
              },
              '& > div:not(.header)': {
                [theme.breakpoints.up('xl')]: {
                  padding: '0px',
                },
                [theme.breakpoints.down('xl')]: {
                  padding: '0px 20px',
                }
              }
            }}
          > */}
          <Root className={`${animClass}`}>
            <SectionContainer className="header" height="100vh !important">
              <Box height="100%" display="flex" flexDirection="column">
                <Header />
                <GridBgContainer>
                  <HeroSection playAnimation={animClass === 'bg-animation'} />
                </GridBgContainer>
              </Box>
            </SectionContainer>
            <SectionContainer className="update light">
              <UpdatesSection />
            </SectionContainer>
            <SectionContainer>
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
          </Root>
        </Box>
      </ThemeProvider>
    </Box>
  )
}

export default App
