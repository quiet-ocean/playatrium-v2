import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRef, useEffect, useState, useCallback } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import useIntersection from '../hooks/useIntersection'
import { palette } from '../themes/AtriumTheme'

import { SubtitleText } from './UpdatesSection'

const text: string =
  'Atrium is a virtual world where users across all Layer-1 networks can build, own, and monetize their online experience through an interoperable pixel-art metaverse.'

function disableScroll() {
  document.body.style.overflowY = 'hidden'
}
function enableScroll() {
  document.body.style.overflowY = 'scroll'
}

const applyScrollEventListener = (ref: any, onWheel: AnyFunction) => {
  ref?.addEventListener('wheel', onWheel, { passive: false })

  // intervalId = setInterval(handleWheel, 100)
}
const removeScrollEventListener = (ref: any, onWheel: AnyFunction) => {
  ref?.addEventListener('wheel', onWheel)
  // clearInterval(intervalId)
}
export const OverviewSection = () => {
  const length = text.length
  const startPos = text.indexOf('build')
  const endPos = text.indexOf('through')
  const sliderRef = useRef<Slider>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [y, setY] = useState(0)
  const [isScrollDown, setIsScrollDown] = useState(false)
  const [index, setIndex] = useState(0)
  const [isScrollDisabled, setIsScrollDisabled] = useState(true)
  const [done, setDone] = useState(false)
  const [playing, setPlaying] = useState(false)

  const adjustSectionPosition = () => {
    console.log('adjust section position')

    const sectionTop = sectionRef.current?.getBoundingClientRect().top || 0
    const bodyTop = document.body.getBoundingClientRect().top

    // console.log(sectionTop, bodyTop)

    window.scrollTo({ behavior: 'smooth', top: window.scrollY + sectionTop })

    // sectionRef.current?.scrollIntoView()
    // document.querySelector('#overview-section-container')?.scrollIntoView()
  }
  const isVisible = useIntersection(sectionRef, '0px')

  useEffect(() => {
    // const isWheelDown = window.scrollY > y
    // console.log('intersection: ', isVisible, 'scroll down: ', isWheelDown)
    if (isVisible && !done) {
      // onScroll()
      adjustSectionPosition()
      disableScroll()
      applyScrollEventListener(sectionRef.current, onWheel)
    }
    setY(window.scrollY)
    return () => {
      removeScrollEventListener(sectionRef.current, onWheel)
    }
  }, [isVisible])
  useEffect(() => {
    console.log('change done')
    if (done) enableScroll()
  }, [done])
  const onWheel = (event: WheelEvent) => {
    if (event.deltaY > 0 && !done) onScroll()
  }
  // useCustomScroller(
  //   (isScrollDown: boolean, callback: AnyFunction) => {
  //     console.log('scroll down: ', isScrollDown)
  //     const top = sectionRef.current?.getBoundingClientRect().top
  //     // // console.log(top, sectionRef.current?.scrollHeight)
  //     const inViewport = top < 50
  //     // console.log('is in viewport', inViewport)
  //     if (isScrollDown && inViewport && !done) {
  //       adjustSectionPosition()
  //       console.log('animation')
  //       onScroll()
  //     } else {
  //       callback()
  //     }

  //     // callback()
  //   },
  //   done,
  //   index
  // )
  useEffect(() => {
    if (index >= length && !done) {
      slickNext()
    }
  }, [index])
  // useEffect
  const onScroll = useCallback(() => {
    console.log('on scroll', index, length)

    if (!done) {
      if (index < length) {
        setIndex((idx) => idx + 10)
      } else {
        slickNext()
      }
    }
  }, [index, done])
  const slickNext = () => {
    console.log('slick next')
    if (!done) {
      sliderRef.current?.slickNext()
    }
  }

  const handleSlickChange = () => {
    console.log('handle slick change')
    if (!done) setDone(true)
  }

  const settings = {
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
  }
  const Slide1 = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
      <Box py={{ md: 20, xs: 16 }}>
        <Box textAlign="center">
          <SubtitleText color={palette.error.main}>overview</SubtitleText>
        </Box>
        <Box
          py={{ md: 30, xs: 16 }}
          sx={{
            '& *': {
              color: palette.text.primary,
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { md: 72, xs: 48 },
              lineHeight: { md: '110%', xs: '120%' },
              margin: 'auto',
              maxWidth: 1300,
              textAlign: { md: 'center', xs: 'left' },
            }}
          >
            {text.split('').map((char: string, key: number) => (
              <span
                key={key}
                style={{
                  color:
                    key >= startPos && key < endPos
                      ? theme.palette.error.main
                      : '',
                  visibility: matches
                    ? index > key
                      ? 'visible'
                      : 'hidden'
                    : 'visible',
                }}
              >
                {char}
              </span>
            ))}
          </Typography>
        </Box>
      </Box>
    )
  }
  const Slide2 = () => (
    <Box
      py={{ md: 20, xs: 4 }}
      height="100%"
      sx={{
        '& > video': {
          borderRadius: { md: '12px', xs: '8px' },
          height: '100%',
          objectFit: 'fill',
        },
      }}
    >
      {done ? (
        <video id="video" width="100%" autoPlay>
          <track kind="captions" />
          <source src="/gamedemo.mp4" type="video/mp4" />
        </video>
      ) : (
        <video id="video" preload="none" width="100%" controls>
          <track kind="captions" />
          <source src="/gamedemo.mp4" type="video/mp4" />
        </video>
      )}
    </Box>
  )
  return (
    <Box id="overview-section" height="100%" ref={sectionRef}>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          xl={10}
          sx={{
            '& li.slide': {
              '& li.slide > div': { height: '100%' },
            },
          }}
        >
          <Box
            sx={{
              display: { md: 'block', xs: 'none' },
              height: '100%',
              width: '100%',
            }}
          >
            <Slider
              ref={sliderRef}
              {...settings}
              afterChange={handleSlickChange}
            >
              <Slide1 />
              <Slide2 />
            </Slider>
          </Box>
          <Box sx={{ display: { md: 'none', xs: 'block' } }}>
            <Slide1 />
            <Slide2 />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
