import { Box } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'

import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import EndlessIntegrations from './EndlessIntegrations'
// import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  arrows: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
}
export const IntegrationsSection = ({ progress }: { progress: number }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<Slider>(null)
  const [animated, setAnimated] = useState(false)
  const [status, setStatus] = useState({
    endless: {
      animate: false,
      done: false,
    },
    project: {
      animate: false,
      done: false,
    },
  })

  useEffect(() => {
    console.log(progress, ' in integrations')

    handleAnimation()
  }, [progress])
  useEffect(() => {
    // if (!sectionRef.current) return
    // sectionRef.current.addEventListener('wheel', handleScroll, {
    //   passive: false,
    // })
    // intervalId = setInterval(() => {
    //   if (scrolling) {
    //     scrolling = false
    //     handleAnimation()
    //   }
    // }, 50)
    // return () => {
    //   clearEventListeners()
    // }
  }, [])

  useEffect(() => {
    console.log(status)
  }, [status])

  const clearEventListeners = () => {
    // sectionRef.current?.removeEventListener('wheel', handleScroll)
    // clearInterval(intervalId)
  }
  // const handleScroll = (e: WheelEvent) => {
  //   console.log('scroll')
  //   scrolling = true
  //   if (isFocused() && !animated && e.deltaY > 0) {
  //     e.preventDefault()
  //     // handleAnimation()
  //   }
  // }

  const isFocused = () => {
    return true
  }
  async function animateProject() {
    setStatus({
      ...status,
      project: {
        animate: true,
        done: false,
      },
    })
    let myPromise = new Promise(function (resolve) {
      setTimeout(function () {
        resolve('I love You !!')
        setStatus({
          ...status,
          project: {
            animate: false,
            done: true,
          },
        })
      }, 3000)
    })

    return myPromise
  }
  // const animateProject = () => {
  //   setStatus({
  //     ...status,
  //     project: {
  //       animate: true,
  //       done: false,
  //     },
  //   })

  //   setTimeout(() => {
  //     setStatus({
  //       ...status,
  //       project: {
  //         animate: false,
  //         done: true,
  //       },
  //     })
  //   }, 5000)
  // }
  const animateEndless = () => {
    setStatus({
      ...status,
      endless: {
        animate: true,
        done: false,
      },
    })

    setTimeout(() => {
      setStatus({
        ...status,
        endless: {
          animate: false,
          done: true,
        },
      })
      setAnimated(true)
      clearEventListeners()
    }, 3000)
  }
  const handleAnimation = async () => {
    if (!animated) {
      if (!status.project.done && !status.project.animate) {
        await animateProject()
      } else if (
        !status.project.animate &&
        status.project.done &&
        !status.endless.animate &&
        !status.endless.done
      ) {
        sliderRef.current?.slickNext()
      }
    }
  }
  const handleWheel = (e: WheelEvent) => {
    if (isFocused() && !animated && e.deltaY > 0) {
      e.preventDefault()
      // handleAnimation()
    }
  }
  // const handleHover = () => {
  //   console.log('hover')
  // }
  return (
    <Box
      id="integrations-section"
      ref={sectionRef}
      sx={{
        '& .slick-list': {
          // height: { md: 'auto !important', xs: '' },
        },
        height: '100%',
      }}
    >
      <Box display="flex" justifyContent="center" pt={{ md: 25, xs: 16 }}>
        <SubtitleText color={palette.warning.main}>integrations</SubtitleText>
      </Box>
      {/* <SectionContainer display={{ md: 'block', xs: 'none' }}>
        <HomeIntegrations />
      </SectionContainer> */}
      <Slider
        {...settings}
        afterChange={() => {
          animateEndless()
        }}
        ref={sliderRef}
      >
        <ProjectIntegrations animate={status.project.animate} />
        <EndlessIntegrations animate={status.endless.animate} />
      </Slider>
    </Box>
  )
}
