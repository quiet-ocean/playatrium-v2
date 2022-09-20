import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useRef, useEffect, useState, forwardRef, useMemo } from 'react'

import { SubtitleText } from '../components'
import { palette } from '../themes/AtriumTheme'

const OverviewText = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme()

  return (
    <Box
      ref={ref}
      py={{ md: 20, xs: 12 }}
      sx={{
        '& *': {
          color: palette.text.primary,
        },
        // height: { md: `${height}px`, xs: '100%' },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { md: 80, xs: 56 },
          lineHeight: { md: '110%', xs: '120%' },
          margin: 'auto',
          maxWidth: 1300,
          textAlign: 'center',
          width: { md: 'auto', xs: 300 },
        }}
      >
        Atrium is a pixel-art social metaverse
        <br /> that makes the NFT experience
        <br />
        <span style={{ color: theme.palette.warning.main }}>
          way more fun.{' '}
        </span>
      </Typography>
    </Box>
  )
})
const OverviewVideo = forwardRef<
  HTMLVideoElement,
  { height: number; windowWidth: number }
>(({ height, windowWidth }, ref) => {
  const theme = useTheme()
  const isMobile = theme.breakpoints.down('md')
  const videoHeight = useMemo(
    () => (isMobile ? ((windowWidth - 40) / 16) * 9 : height),
    [height, isMobile, windowWidth]
  )
  // const videoWidth = useMemo(
  //   () => (isMobile ? windowWidth - 40 : (height * 16) / 9),
  //   [height, isMobile, windowWidth]
  // )
  return (
    <Box
      py={{ md: 10, xs: 6 }}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        sx={{
          '& > video': {
            borderRadius: { md: '12px', xs: '8px' },
            height: '100%',
            objectFit: 'cover',
          },
          height: { md: `${videoHeight}px`, xs: '80%' },
          margin: 'auto',
          overflow: 'hidden',
          // width: `${videoWidth}px`,
          width: '100%',
        }}
        id="video-container"
      >
        <video
          muted
          ref={ref}
          preload="none"
          controls
          // height="100%"
          id="video"
          width="100%"
          autoPlay
        >
          <track kind="captions" />
          <source src="/gamedemo.mp4" type="video/mp4" />
        </video>
      </Box>
    </Box>
  )
})

export const OverviewSection = ({ videoStart }: { videoStart: boolean }) => {
  const [height, setHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (videoStart) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current?.play()
        }
      }, 500)
    }
  }, [videoStart])

  const handleResize = () => {
    setHeight(document.documentElement.clientHeight - 80 * 2 - 24)
    setWindowWidth(document.documentElement.clientWidth)
  }

  return (
    <Box
      id="overview-section"
      height="100%"
      py={{ md: 20, xs: 20 }}
      sx={{
        '& > div, & > div > div, & > div > div > div': {
          height: '100%',
        },
      }}
    >
      <Grid
        container
        columns={{ lg: 10, xl: 12 }}
        justifyContent="center"
        width="100%"
      >
        <Grid item lg={10} xs={12} width={{ md: '', xs: '100%' }}>
          <Box
            sx={{
              /*display: { md: 'block', xs: 'none' },*/
              position: 'relative',
              width: '100%',
            }}
          >
            <Box className="overview-text" sx={{ height: '100%', opacity: 0 }}>
              <Box textAlign="center">
                <SubtitleText color={palette.warning.main}>
                  overview
                </SubtitleText>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center',
                }}
              >
                <OverviewText ref={textRef} />
              </Box>
            </Box>
            <Box
              className="overview-video"
              sx={{
                height: '100%',
                left: 0,
                opacity: videoStart ? `1 !important` : 0,
                position: 'absolute',
                top: 0,
                width: '100%',
              }}
            >
              <OverviewVideo
                ref={videoRef}
                height={height}
                windowWidth={windowWidth}
              />
            </Box>
          </Box>
          {/* <Box display={{ md: 'none', xs: 'block' }}>
            <OverviewText ref={textRef} height={height} />
            <OverviewVideo
              ref={videoRef}
              height={height}
              windowWidth={windowWidth}
            />
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  )
}
