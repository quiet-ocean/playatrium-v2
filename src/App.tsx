import { Box, ThemeProvider, CssBaseline, AppBar, Slide } from '@mui/material'
// import useScrollTrigger from '@mui/material/useScrollTrigger'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useState, useEffect, useCallback, useRef } from 'react'
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
import AppProvider from './context/AppContext'
import { Home, Policy } from './pages'
import AtriumTheme from './themes/AtriumTheme'

export type PlayState = 'none' | 'project' | 'endless' | 'done' | 'sliding'
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window?: () => Window
  children: React.ReactElement
}

// function HideOnScroll(props: Props) {
function HideOnScroll(props: Props) {
  // const { children, window } = props
  const { children } = props
  // const [open, setOpen] = useState(false)

  // const trigger = useScrollTrigger({
  //   target: window ? window() : undefined,
  // })

  // useEffect(() => {
  //   setOpen(trigger)
  // }, [trigger])
  return (
    <Slide appear={false} direction="down" in={true}>
      {children}
    </Slide>
  )
}

const sticky = 500

const overviewTweenEnd = '+=1000%'
const integrationTweenEnd = '+=800%'

const App: React.FC = () => {
  const [animClass, setAnimClass] = useState('')
  const overviewRef = useRef<HTMLDivElement>(null)
  const integrationsRef = useRef<HTMLDivElement>(null)
  // const [overviewPG, setOverviewPG] = useState(0)
  const [overviewVideoStart, setOverviewVideoStart] = useState(false)
  // const [integrationPG, setIntegrationPG] = useState(0)
  const [integrationPlayState, setIntegrationPlayState] =
    useState<PlayState>('none')
  const [scrollUp, setScrollUp] = useState(false)
  const [y, setY] = useState(window.scrollY)

  // const { setIntegrationsPG } = useContext(AppContext)
  // console.log('set integration progress function: ', setIntegrationsPG)

  const handleNavigation = useCallback(() => {
    if (y > window.scrollY) {
      setScrollUp(true)
    } else if (y < window.scrollY) {
      setScrollUp(false)
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    // REGISTER SCROLL ANIMATION PLUGIN
    gsap.registerPlugin(ScrollTrigger)

    // APPLY ANIMATION FOR OVERVIEW SECTION
    applyOverviewTween()
    // applyIntegrationsTween()

    // ENABLE SCROLL AFTER HERO ANIMATION
    document.body.style.overflow = 'hidden'
    setAnimClass('bg-animation')

    setTimeout(() => {
      document.body.style.overflow = 'visible'
    }, 4200)

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])
  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('wheel', handleNavigation)

    return () => {
      window.removeEventListener('wheel', handleNavigation)
    }
  }, [handleNavigation])
  const applyOverviewTween = () => {
    // const setProgress = setOverviewPG
    // gsap.to(overviewRef.current, {
    //   ease: 'none',
    //   scrollTrigger: {
    //     anticipatePin: 1,
    //     end: overviewTweenEnd,
    //     invalidateOnRefresh: true,
    //     markers: false,
    //     onLeave: function (self) {
    //       self.disable()
    //       applyIntegrationsTween()
    //     },
    //     onUpdate: (self) => {
    //       let p = parseInt((self.progress * 100).toFixed(1))
    //       // setOverviewPG(p)
    //       setProgress(p)
    //     },
    //     pin: true,
    //     refreshPriority: 1,
    //     start: 'top 0%',
    //     toggleActions: 'play reset play reset',
    //     trigger: overviewRef.current,
    //   },
    // })
    if (overviewRef.current) {
      gsap
        .timeline({
          scrollTrigger: {
            anticipatePin: 1,
            end: () => overviewTweenEnd,
            onLeave: function (self) {
              // self.disable()
              self.kill()
              applyIntegrationsTween()
            },
            // onUpdate: (self) => {},
            pin: true,
            scrub: true,
            start: 'top 0%',
            trigger: overviewRef.current,
          },
        })
        .add(() => {
          // setDone(false)
        })
        .delay(3)
        .to(overviewRef.current?.querySelector('.overview-text'), {
          duration: 2,
          opacity: 1,
        })
        .delay(3)
        .to(overviewRef.current?.querySelector('.overview-text'), {
          duration: 2,
          opacity: 0,
        })
        .to(overviewRef.current?.querySelector('.overview-video'), {
          // duration: 2,
          opacity: 1,
        })
        .add(() => {
          setOverviewVideoStart(true)
        })
        .delay(3)
    }
  }
  const applyIntegrationsTween = () => {
    if (integrationsRef.current) {
      // const setProgress = setIntegrationsPG
      let tl = gsap.timeline({
        scrollTrigger: {
          anticipatePin: 1,
          end: () => integrationTweenEnd,
          onLeave: function (self) {
            self.disable()
          },
          onUpdate: function () {
            // let p = parseInt((self.progress * 100).toFixed(1))
            // setProgress(p)
          },
          pin: true,
          scrub: true,
          start: 'top 0%',
          trigger: integrationsRef.current,
        },
        // defaults: {ease: "none"}
      })
      // .delay(3)
      tl.add(() => {
        if (integrationPlayState === 'done') tl.pause()
      })
        .add(() => {
          setIntegrationPlayState('project')
        })
        // .to(integrationsRef.current?.querySelector('.endless-panel'), {
        //   duration: 3,
        // })
        // .add(() => {
        //   setPlayState('none')
        // })
        // .to(
        //   integrationsRef.current?.querySelector
        // )
        .add('start')
        .to(integrationsRef.current?.querySelector('.screen-panel'), {
          duration: 3,
          top: '0%',
        })
        .add(() => {
          setIntegrationPlayState('sliding')
        })
        // .add(() => {
        //   const projectPanels = document.getElementsByClassName('.project-panel')
        //   let projectPanel = projectPanels.length ? projectPanels[0] : null

        //   if (projectPanel) {
        //     projectPanel?.style.visibility = 'hidden'
        //   }
        //   // [0]?.style.visibility = 'hidden'
        // })
        .to(integrationsRef.current?.querySelector('.screen-panel'), {
          duration: 3,
          top: '-100%',
        })
        // .to(
        //   integrationsRef.current?.querySelector('.endless-panel'),
        //   3,
        //   // { top: '100%' },
        //   { duration: 3, top: '0%' },
        //   '-=3'
        // )
        // .fromTo(
        //   integrationsRef.current?.querySelector('.endless-panel'),
        //   { top: '100%' },
        //   { duration: 3, top: '0%' }
        // )
        .to(integrationsRef.current?.querySelector('.endless-panel'), {
          duration: 3,
        })
        // .pause()
        // .kill()
        .add(() => {
          setIntegrationPlayState('done')
        })
        .to(integrationsRef.current?.querySelector('.endless-panel'), {
          duration: 1,
        })
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={AtriumTheme}>
        <AppProvider>
          <Box sx={{ background: AtriumTheme.palette.common.black }}>
            <RootLayout
              className={`bg-animation ${
                scrollUp && y > sticky ? 'scroll-up' : ''
              }`}
            >
              <BrowserRouter>
                <HideOnScroll>
                  <AppBar
                    sx={{ borderBottom: `1px solid rgba(168, 168, 168, 0.1)` }}
                  >
                    <ResponsiveAppBar />
                  </AppBar>
                </HideOnScroll>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        overviewRef={overviewRef}
                        integrationsRef={integrationsRef}
                        // overviewPG={overviewPG}
                        overviewVideoStart={overviewVideoStart}
                        integrationPlayState={integrationPlayState}
                        animClass={animClass}
                      />
                    }
                  />
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
                      position: 'relative',
                    },
                    px: { xl: 0, xs: 5 },
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
        </AppProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
