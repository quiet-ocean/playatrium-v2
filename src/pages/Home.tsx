import { Box } from '@mui/material'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useState, useEffect, useRef } from 'react'

import { SectionContainer, GridBgContainer } from '../components'
import {
  HeroSection,
  IntegrationsSection,
  UpdatesSection,
  OverviewSection,
  ProfilesSection,
  BuildersSection,
  JoinSection,
} from '../sections'
import AtriumTheme from '../themes/AtriumTheme'

let container
export const Home = () => {
  const [animClass, setAnimClass] = useState('')

  const ref = useRef(null)
  const integrationsRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [progressForIntegration, setProgressForIntegration] = useState(0)
  const [tween, setTween] = useState<gsap.core.Tween>(null)
  const [done, setDone] = useState(false)
  // const [sticky, setSticky] = useState(false)
  useEffect(() => {
    // REGISTER SCROLL ANIMATION PLUGIN
    gsap.registerPlugin(ScrollTrigger)
    
    // applyOverviewTween()
    applyIntegrationsTween()

    // ENABLE SCROLL AFTER HERO ANIMATION
    document.body.style.overflow = 'hidden'
    setAnimClass('bg-animation')

    setTimeout(() => {
      document.body.style.overflow = 'visible'
    }, 4200)

    // SCROLL TO TOP
    window.scrollTo({ behavior: 'smooth', top: 0 })

    // ADD SCROLL EVENT LISTENER

    container = document.getElementById('overview-container')
    // CLEAN UP
    return () => {
      document.body.style.overflow = 'auto'
    }
    // console.log('margin height: ', ref.current?.getBoundingClientRect().top)
  }, [])

  const applyOverviewTween = () => {
    let scrollTween = gsap.to(ref.current, {
      // backgroundColor: '#DAF7A6',
      ease: 'none',
      scrollTrigger: {
        anticipatePin: 1,
        end: '+=500%',
        // end: '+=400%',
        invalidateOnRefresh: true,
        markers: false,
        onKill: (self) => {
          console.log('on kill')
          self.disable()
        },
        onLeave: function (self) {
          self.disable()
          console.log('on leave')
          // tween.kill()
          // self.animation.progress(1)
          // applyTweenForIntegrations()
        },
        onUpdate: (self) => {
          // console.log(self)
          let p = (self.progress * 100).toFixed(1)
          setProgress(p)
        },
        pin: true,
        refreshPriority: 1,
        start: 'top 0%',
        toggleActions: 'play reset play reset',
        trigger: ref.current,
      },
    })
    setTween(scrollTween)
  } 
  const applyIntegrationsTween = () => {
    if (integrationsRef.current) {
      let tl = gsap.timeline({
        scrollTrigger: {
          anticipatePin: 1,
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          // end: () => "+=" + section.offsetWidth,
          end: () => '+=3000',
          pin: true,
          scrub: true,
          start: 'top 0%',
          trigger: integrationsRef.current,
          onLeave: function (self) {
            // console.log('disable integration animation')
            self.disable()
          },
        },
        // defaults: {ease: "none"}
      }).delay(5)
      // tl.deplay(2)
      tl.fromTo(
        integrationsRef.current?.querySelector('.endless-panel'),
        { top: '100%' },
        { duration: 3, top: '1%' }
      )
    }
    // let scrollTweenForITSection = gsap.to(integrationsRef.current, {
    //   ease: 'none',
    //   scrollTrigger: {
    //     anticipatePin: 1,
    //     end: '+=300%',
    //     invalidateOnRefresh: true,
    //     markers: false,
    //     onLeave: (self) => {
    //       self.disable()
    //       // self.animation.progress(1)
    //     },
    //     onUpdate: (self) => {
    //       let p = (self.progress * 100).toFixed(1)
    //       setProgressForIntegration(p)
    //     },
    //     pin: true,
    //     refreshPriority: 1,
    //     start: 'top 0%',
    //     toggleActions: 'play reset play reset',
    //     trigger: integrationsRef.current,
    //   },
    // })
  }

  const callback = () => {
    if (tween) {
      tween.kill()
    }
  }

  return (
    <Box
      className={animClass}
      sx={{
        '&.bg-animation .grid-bg': {
          '&::before': {
            left: `0%`,
            width: `100%`,
          },
          position: 'relative',
        },
        scrollSnapType: 'y mandatory',
      }}
    >
      <SectionContainer className="header" height="100vh !important">
        <Box height="100%" display="flex" flexDirection="column">
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
        // className={`${sticky ? 'sticky' : ''}`}
        sx={{
          // height: '100% !important',
          scrollSnapAlign: 'center',
        }}
        ref={ref}
        id="overview-container"
      >
        <GridBgContainer>
          <OverviewSection
            progress={progress}
            callback={callback}
            done={done}
            setDone={setDone}
          />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer className="light">
        <GridBgContainer>
          <ProfilesSection />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer ref={integrationsRef}>
        <GridBgContainer>
          <IntegrationsSection />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer minHeight="100vh !important" height="100% !important">
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
    </Box>
  )
}
