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
  })

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
    }, 3000)
  }
  const handleAnimation = () => {
    if (!animated) {
      if (!status.project.done) {
        animateProject()
      } else if (status.project.done && !status.endless.done) {
        sliderRef.current?.slickNext()
      }
    }
  }
  const handleWheel = (e: WheelEvent) => {
    if (isFocused() && !animated && e.deltaY > 0) {
      e.preventDefault()
      handleAnimation()
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
          height: { md: 'auto !important', xs: '' },
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
