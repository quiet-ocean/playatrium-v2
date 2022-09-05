import { Box } from '@mui/material'
import type GSAPTimeline from 'gsap'
import type GSAPTween from 'gsap'
import { gsap } from 'gsap'
// import type GSAPTween, GSAPTimeline, { gsap } from 'gsap'
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

export type PlayState = 'none' | 'project' | 'endless' | 'done'

const overviewTweenEnd = '+=500%'
const integrationTweenEnd = '+=500%'

export const Home = () => {
  const [animClass, setAnimClass] = useState('')

  const overviewRef = useRef<HTMLDivElement>(null)
  const integrationsRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  // const [progressForIntegration, setProgressForIntegration] = useState(0)
  // const [tween, setTween] = useState<gsap.core.Tween>(null)
  const [done, setDone] = useState(false)
  // const [sticky, setSticky] = useState(false)
  const [playState, setPlayState] = useState<PlayState>('none')
  const [overviewTween, setOverviewTween] = useState<GSAPTween>(null)
  const [integrationTL, setIntegrationTL] = useState<GSAPTimeline>(null)

  useEffect(() => {
    // REGISTER SCROLL ANIMATION PLUGIN
    gsap.registerPlugin(ScrollTrigger)

    applyOverviewTween()

    // ENABLE SCROLL AFTER HERO ANIMATION
    document.body.style.overflow = 'hidden'
    setAnimClass('bg-animation')

    setTimeout(() => {
      document.body.style.overflow = 'visible'
    }, 4200)

    // SCROLL TO TOP
    window.scrollTo({ behavior: 'smooth', top: 0 })

    // ADD WHEEL EVENT LISTENER

    if (overviewRef.current) {
      overviewRef.current.addEventListener('wheel', handleWeel())
    }
    // CLEAN UP
    return () => {
      document.body.style.overflow = 'auto'
      // if (overviewRef.current) {
      overviewRef.current?.removeEventListener('wheel', handleWeel())
      // }
    }
    // console.log('margin height: ', ref.current?.getBoundingClientRect().top)
  }, [])

  useEffect(() => {
    // let flag = false
    // console.log(playState)
    // if (playState === 'project' && !flag) {
    //   flag = true
    //   setTimeout(() => {
    //     setPlayState('none')
    //   }, 4000)
    //   console.log(integrationTL)
    //   integrationTL.pause()
    // } else {
    //   // if (integrationTL)
    //   //   integrationTL.resume()
    // }
  }, [playState])
  const handleWeel = () => {
    console.log('handle wheel')
    let isExecuted = false
    return () => {
      if (!isExecuted) {
        console.log('execute handle wheel')
        isExecuted = true
        // applyOverviewTween()
      }
    }
  }
  const applyOverviewTween = () => {
    let tween = gsap.to(overviewRef.current, {
      // gsap.to(ref.current, {
      // backgroundColor: '#DAF7A6',
      ease: 'none',
      scrollTrigger: {
        anticipatePin: 1,
        end: overviewTweenEnd,
        // end: '+=400%',
        invalidateOnRefresh: true,
        markers: false,
        // onKill: (self) => {
        //   self.disable()
        // },
        onLeave: function (self) {
          self.disable()
          applyIntegrationsTween()
          // tween.kill()
          // self.animation.progress(1)
          // applyTweenForIntegrations()
        },
        onUpdate: (self) => {
          // console.log(self)
          let p = parseInt((self.progress * 100).toFixed(1))
          setProgress(p)
        },
        pin: true,
        refreshPriority: 1,
        start: 'top 0%',
        toggleActions: 'play reset play reset',
        trigger: overviewRef.current,
      },
    })
    // setTween(tween)
    setOverviewTween(tween)
  }
  const applyIntegrationsTween = () => {
    if (integrationsRef.current) {
      let tl = gsap
        .timeline({
          scrollTrigger: {
            anticipatePin: 1,
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            // end: () => "+=" + section.offsetWidth,
            end: () => integrationTweenEnd,
            onLeave: function (self) {
              self.disable()
              // setPlayState('done')
              // console.log('disable integration animation')
              // self.disable()
            },
            // onUpdate: (self) => {
            // console.log(self)
            // let p = parseInt((self.progress * 100).toFixed(1))
            // setProgress(p)
            // console.log('Integration animation progress: ', p)
            // console.log(p)
            // },
            pin: true,
            scrub: true,
            start: 'top 0%',
            trigger: integrationsRef.current,
          },
          // defaults: {ease: "none"}
        })
        .delay(3)
      // tl.deplay(2)
      // tl.
      // tl
      // .add(() => {
      //   setPlayState('project')
      // })
      // .to(
      //   integrationsRef.current?.querySelector('.endless-panel'),
      //   { duration: 3 }
      // )
      // .add(() => {
      //   // setPlayState('none')
      // })
      // .to(
      //   integrationsRef.current?.querySelector('.endless-panel'),
      //   // { top: '100%' },
      //   { duration: 3, top: '1%' }
      // )
      // .to(
      //   integrationsRef.current?.querySelector('.endless-panel'),
      //   // { top: '100%' },
      //   { duration: 3, top: '1%' }
      // )
      // .to(
      //   integrationsRef.current?.querySelector('.endless-panel'),
      //   // { top: '100%' },
      //   { duration: 3, top: '100%' }
      // )
      tl.add(() => {
        if (playState === 'done') tl.pause()
      })
        .add(() => {
          setPlayState('project')
        })
        .to(integrationsRef.current?.querySelector('.endless-panel'), {
          duration: 3,
        })
        .add(() => {
          setPlayState('none')
        })
        .fromTo(
          integrationsRef.current?.querySelector('.endless-panel'),
          { top: '100%' },
          { duration: 3, top: '0%' }
        )
        .to(integrationsRef.current?.querySelector('.endless-panel'), {
          duration: 3,
        })
        // .pause()
        // .kill()
        .add(() => {
          setPlayState('done')
        })
        .to(integrationsRef.current?.querySelector('.endless-panel'), {
          duration: 1,
        })
      setIntegrationTL(tl)
    }
  }

  // const callback = () => {
  //   if (tween) {
  //     tween.kill()
  //   }
  // }

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
        ref={overviewRef}
        id="overview-container"
      >
        <GridBgContainer>
          <OverviewSection
            progress={progress}
            // callback={callback}
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
          <IntegrationsSection state={playState} />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer height="100% !important">
        <GridBgContainer
          sx={{
            height: '100% !important',
            // minHeight: '100vh !important',
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
