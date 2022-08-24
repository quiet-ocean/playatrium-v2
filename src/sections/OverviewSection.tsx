import { Box, Button, Typography, Grid } from '@mui/material'
import { useRef, useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import overviewImage from '../assets/images/overview.png'
import { palette } from '../themes/AtriumTheme'

const text: string =
  'Atrium is a virtual world where users across all Layer-1 networks can build, own, and monetize their online experience through an interoperable pixel-art metaverse.'
// const text: string = 'Atrium'

export const OverviewSection = () => {
  const length = text.length
  const sliderRef = useRef<Slider>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

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
  }, [sectionRef, disableScroll])

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY > 0 && disableScroll) {
      event.preventDefault()
      setIndex((prevIndex) => {
        if (prevIndex < length) return prevIndex + 1
        else {
          handleClick()
          return length
        }
      })
    }
  }
  const handleClick = () => {
    if (sliderRef.current) sliderRef.current.slickNext()
    setDisableScroll(false)
  }
  const settings = {
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
  }
  return (
    <Box id="overview-section" height="100%" ref={sectionRef}>
      <Grid container justifyContent="center">
        <Grid
          item
          lg={12}
          xl={10}
          sx={{
            '& li.slide': {
              // height: '100%',
              '& li.slide > div': { height: '100%' },
            },
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            <Box py={20} id="overview-section">
              <Box textAlign="center">
                <Button
                  variant="rounded"
                  sx={{
                    border: `1px solid ${palette.error.main}`,
                    color: palette.error.main,
                  }}
                  onClick={handleClick}
                >
                  overview
                </Button>
              </Box>
              <Box
                py={30}
                sx={{
                  '& *': {
                    color: palette.text.primary,
                    textAlign: 'center !important',
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ margin: 'auto', maxWidth: 1300 }}
                >
                  {text.split('').map((char: string, key: number) => (
                    <span
                      key={key}
                      style={{ visibility: index > key ? 'visible' : 'hidden' }}
                    >
                      {char}
                    </span>
                  ))}
                </Typography>
              </Box>
            </Box>
            <Box py={20}>
              <img
                src={overviewImage}
                alt=""
                width="100%"
                height="100%"
                style={{ borderRadius: '12px' }}
              />
            </Box>
          </Slider>
        </Grid>
      </Grid>
    </Box>
  )
}
