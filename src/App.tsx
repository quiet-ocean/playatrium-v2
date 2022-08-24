import { Box, ThemeProvider, styled, CssBaseline, Slide, AppBar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';


import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'
import { ResponsiveAppBar, DesktopAppBar, Footer, SectionContainer, GridBgContainer } from './components'
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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}
function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const App: React.FC = () => {

  const [animClass, setAnimClass] = useState('')
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '10px'
    setAnimClass('bg-animation')

    setTimeout(() => {
      document.body.style.overflow = 'visible'
      document.body.style.paddingRight = '0px'
      setEnable(true)
    }, 4000)

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [])

  return (
    <React.Fragment >
      <CssBaseline />
      <ThemeProvider theme={AtriumTheme}>
        <Box sx={{ background: AtriumTheme.palette.common.black }}>
          <Root className={`${animClass}`}>
            <SectionContainer className="header" height="100vh !important">
              <Box height="100%" display="flex" flexDirection="column">
                <HideOnScroll>
                  <Box>
                    {/* <Box pr={ enable ? '0px' : '10px' } sx={{ background: AtriumTheme.palette.common.black }}> */}
                      <ResponsiveAppBar />
                    {/* </Box> */}
                  </Box>
                </HideOnScroll>
                <Box mt="77px" sx={{ height: '100%', width: '100%' }}>
                  <GridBgContainer>
                    <HeroSection playAnimation={animClass === 'bg-animation'} />
                  </GridBgContainer>
                </Box>
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
            <SectionContainer>
              <GridBgContainer>
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
          </Root>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
