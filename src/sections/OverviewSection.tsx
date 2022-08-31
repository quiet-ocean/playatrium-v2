import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRef, useEffect, useState, useCallback } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// import overviewImage from '../assets/images/overview.png'
import { palette } from '../themes/AtriumTheme'

import { SubtitleText } from './UpdatesSection'

const videoStyle = {
  borderRadius: '12px',
  height: '100%',
}

const text: string =
  'Atrium is a virtual world where users across all Layer-1 networks can build, own, and monetize their online experience through an interoperable pixel-art metaverse.'
// const text: string = 'Atrium'

export const OverviewSection = () => {
  const length = text.length
  const startPos = text.indexOf('build')
  const endPos = text.indexOf('through')
  const sliderRef = useRef<Slider>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [index, setIndex] = useState(0)
  const [disableScroll, setDisableScroll] = useState(true)

  useEffect(() => {
    if (!sectionRef.current) {
      return
    }
    sectionRef.current.addEventListener('wheel', handleWheel, {
      passive: false,
    })

    return () => sectionRef.current?.removeEventListener('wheel', handleWheel)
  }, [sectionRef, disableScroll, index])

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      // console.log(index, length)
      if (event.deltaY > 0) {
        if (index < length) {
          event.preventDefault()
          setIndex((prevIndex) => {
            if (prevIndex <= length) return prevIndex + 10
            return prevIndex
            // else {

            //   handleClick()
            //   // return length
            //   return prevIndex
            // }
          })
        } else {
          handleClick()
        }
      }
    },
    [index]
  )
  const handleClick = async () => {
    console.log('handle next')
    if (sliderRef.current) sliderRef.current.slickNext()
    setDisableScroll(false)
    // let video = document.querySelector("#video")
    // video.pause()
    // video.play()
    if (videoRef.current) {
      // window.vcomp = videoRef.current
      console.log('play video')
      // videoRef.current.pause()
      // videoRef.current.load()
      // .then((res: any) => {
      //   console.log('Video loaded: ', res)
      // })
      // // .catch((err: Error) => console.log('Error: ', err))
      setTimeout(async () => {
        // const playPromise = videoRef.current?.play()
        // await videoRef.current?.play()
        // if (playPromise) playPromise() 
        videoRef.current.nativeElement.muted = true

        if (videoRef.current.play)
          // await videoRef.current.play()
          videoRef.current
            .play()
            .then((res: any) => {
              console.log('Video started to play: ', res)
            })
            .catch((err: Error) =>
              console.log('Error occurrd while start video: ', err)
            )
      }, 0)
      // const media = document.querySelector('#video').nativeElement;
      // media.muted = true; // without this line it's not working although I have "muted" in HTML
      // media.play();
    }
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
      <Box py={{ md: 20, xs: 16 }} id="overview-section">
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
          // objectFit: 'cover',
          objectFit: 'fill',
        }
      }}  
    >
      {/* <img
        src={overviewImage}
        alt=""
        width="100%"
        height="100%"
        style={{ borderRadius: '12px' }}
      /> */}
      <video
        id="video"
        preload="none"
        width="100%"
        // height="100%"
        controls
        // style={videoStyle}
        ref={videoRef}
        muted={true}
      >
        <track kind="captions" />
        <source src="/gamedemo.mp4" type="video/mp4" />
      </video>
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
              // height: '100%',
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
            <Slider ref={sliderRef} {...settings}>
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
