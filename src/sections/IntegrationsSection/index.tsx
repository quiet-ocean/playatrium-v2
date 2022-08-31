import { Box } from '@mui/material'
import { useState, useEffect, useRef } from 'react'

import { SectionContainer } from '../../components'
import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import EndlessIntegrations from './EndlessIntegrations'
// import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const settings = {
  // arrows: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
}
export const IntegrationsSection = () => {
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
    if (!sectionRef.current) return

    sectionRef.current.addEventListener('wheel', handleWheel, {
      passive: false,
    })
    return () => {
      sectionRef.current?.removeEventListener('wheel', handleWheel)
    }
    // window.addEventListener('scroll', handleWheel, { passive: false })
    // return () => {
    //   window.removeEventListener('scroll', handleWheel)
    // }
  })
  useEffect(() => {
    console.log(status)
  }, [status])

  const isFocused = () => {
    return true
  }
  const animateProject = () => {
    setStatus({
      ...status,
      project: {
        animate: true,
        done: false,
      },
    })

    setTimeout(() => {
      setStatus({
        ...status,
        project: {
          animate: false,
          done: true,
        },
      })
    }, 5000)
  }
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
    }, 5000)
  }
  const handleAnimation = () => {
    if (!animated) {
      if (!status.project.done) {
        animateProject()
      } else if (status.project.done && !status.endless.done) {
        console.log('Slick next')
        sliderRef.current?.slickNext()
        // sliderRef.current?.slickPlay()
      }
    }
  }
  const handleWheel = (e: Event) => {
    // console.log(sectionRef.current?.getBoundingClientRect().top)
    // console.log(isFocused(), animated)
    if (isFocused() && !animated) {
      e.preventDefault()
      handleAnimation()
      // animateProject()

      // setTimeout(() => {
      //   sliderRef.current?.slickNext()
      //   animateEndless()
      // }, 2000)
    }
  }
  const handleHover = () => {
    console.log('hover')
  }
  return (
    <Box
      id="integrations-section"
      ref={sectionRef}
      sx={{
        '& .slick-list': {
          height: 'auto !important',
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
          console.log('After slick change')
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
