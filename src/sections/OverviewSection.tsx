import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
// import useMediaQuery from '@mui/material/useMediaQuery'
import { useRef, useEffect, useState, forwardRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import { palette } from '../themes/AtriumTheme'

import { SubtitleText } from './UpdatesSection'

const text: string =
  'Atrium is a virtual world where users across all Layer-1 networks can build, own, and monetize their online experience through an interoperable pixel-art metaverse.'

const length = text.length
const startPos = text.indexOf('build')
const endPos = text.indexOf('through')

const OverviewText = forwardRef<
  HTMLDivElement,
  {
    index: number
    height: number
  }
>(({ index, height }, ref) => {
  const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box
      ref={ref}
      py={{ md: 20, xs: 12 }}
      sx={{
        '& *': {
          color: palette.text.primary,
        },
        height: { md: `${height}px`, xs: '100%' },
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
                key >= startPos && key < endPos ? theme.palette.error.main : '',
              // visibility: matches
              //   ? index > key
              //     ? 'visible'
              //     : 'hidden'
              //   : 'visible',
              visibility: index > key ? 'visible' : 'hidden',
            }}
          >
            {char}
          </span>
        ))}
      </Typography>
    </Box>
  )
})
const OverviewVideo = forwardRef<HTMLVideoElement, { height: number }>(
  ({ height }, ref) => {
    return (
      <Box
        py={{ md: 20, xs: 12 }}
        sx={{
          '& > video': {
            borderRadius: { md: '12px', xs: '8px' },
            // display: `${!done ? 'none' : 'block'}`,
            height: '100%',
            objectFit: 'fill',
          },
          height: `${height}px`,
        }}
        id="video-container"
      >
        <video
          muted
          ref={ref}
          preload="none"
          controls
          id="video"
          width="100%"
          autoPlay
        >
          <track kind="captions" />
          <source src="/gamedemo.mp4" type="video/mp4" />
        </video>
      </Box>
    )
  }
)
// const MobileContent = () => {

// }
export const OverviewSection = ({
  progress,
  // callback,
  done,
  setDone,
}: {
  progress: number
  // callback: AnyFunction
  done: boolean
  setDone: AnyFunction
}) => {
  const [index, setIndex] = useState(0)
  const [height, setHeight] = useState(0)

  const carouselRef = useRef<Slider>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const keyframe = 70

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    // window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      // window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    handleAnimation()
  }, [progress])

  useEffect(() => {
    // console.log(index, done)
    if (index > length && !done) {
      setDone(true)
      slick()
      //
    }
    if (done) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current?.play()
        }
      }, 500)
    }
  }, [index, done])
  const handleResize = () => {
    setHeight(document.documentElement.clientHeight - 80 * 2 - 24)
  }
  const handleAnimation = () => {
    setIndex((length * progress) / keyframe)
  }

  const slick = () => {
    carouselRef.current?.slickNext()
  }
  const handleSlick = () => {
    // console.log('handle slick')

    setDone(true)
  }

  const settings = {
    arrows: false,
    draggable: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    swipeToSlide: false,
    touchMove: false,
    vertical: true,
    verticalSwiping: true,
  }
  return (
    <Box id="overview-section" height="100%" py={{ md: 20, xs: 16 }}>
      <Grid container columns={{ lg: 10, xl: 12 }} justifyContent="center">
        <Grid item lg={10}>
          <Box textAlign="center">
            <SubtitleText color={palette.error.main}>overview</SubtitleText>
          </Box>
          <Box
            sx={{
              '& .slick-list': {
                // height: `${height}px !important`,
              },

              // height: `${height}px`,

              // overflowAnchor: 'auto',

              // overflowY: { md: 'scroll', xs: 'visible' },
              display: { md: 'block', xs: 'none' },
            }}
          >
            <Slider ref={carouselRef} afterChange={handleSlick} {...settings}>
              {/* TEXT */}
              <OverviewText ref={textRef} index={index} height={height} />
              {/* VIDEO */}
              <OverviewVideo ref={videoRef} height={height} />
            </Slider>
          </Box>
          <Box display={{ md: 'none', xs: 'block' }}>
            {/* TEXT */}
            <OverviewText ref={textRef} index={index} height={height} />
            {/* VIDEO */}
            <OverviewVideo ref={videoRef} height={height} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
