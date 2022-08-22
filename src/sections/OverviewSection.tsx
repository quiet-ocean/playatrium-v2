import { Box, Button, Typography, styled, Grid } from '@mui/material'
import React, { useRef, useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import overviewImage from '../assets/images/overview.png'
import { palette } from '../themes/AtriumTheme'

const str1: string = 'Atrium is a virtual world where users'
const str2: string = 'across all Layer-1 networks can '
const str3: string = 'build,'
const str4: string = 'own, and monetize their online '
const str5: string = 'experience'
const str6: string = 'through an interoperable '
const str7: string = 'pixel-art metaverse. '

const AnimationCharWrapper = styled('span')(() => ({
  '&.show': {
    opacity: 1,
  },
  color: 'inherit',
  display: 'inline',
  opacity: 0,
  transition: 'opacity 0.05s',
}))
const AnimationChar = ({
  children,
  charClass,
  index,
}: {
  children: React.ReactNode
  charClass: string
  index: number
}) => {
  // return <AnimationCharWrapper>{children}</AnimationCharWrapper>
  return (
    <AnimationCharWrapper
      className={charClass}
      sx={{
        transitionDelay: `${0.05 * index}s`,
      }}
    >
      {children}
    </AnimationCharWrapper>
  )
}
const AnimationString = ({
  str,
  delay,
  charClass,
}: {
  str: string
  delay: number
  charClass: string
}) => {
  return (
    <>
      {str.split('').map((item: string, key: number) => (
        <AnimationChar charClass={charClass} key={key} index={delay + key}>
          {item}
        </AnimationChar>
      ))}
    </>
  )
}
export const OverviewSection = () => {
  const carousel = useRef(null)
  const [charClass, setCharClass] = useState('')

  useEffect(() => {
    // console.log(carousel)
    setCharClass('show')
  }, [carousel])

  return (
    <Box id="overview-section" height="100%">
      <Grid container justifyContent="center">
        <Grid item lg={12} xl={10}>
          <Carousel
            ref={carousel}
            axis="vertical"
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            transitionTime={1000}
            showStatus={false}
          >
            <Box
              py={20}
              onFocus={() => setCharClass('show')}
              id="overview-section"
            >
              <Box textAlign="center">
                <Button
                  variant="rounded"
                  sx={{
                    border: `1px solid ${palette.error.main}`,
                    color: palette.error.main,
                  }}
                  onClick={() => carousel?.current?.moveTo(1)}
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
                <Typography variant="h2">
                  <AnimationString charClass={charClass} str={str1} delay={0} />
                </Typography>
                <Typography variant="h2">
                  <AnimationString
                    charClass={charClass}
                    str={str2}
                    delay={str1.length}
                  />

                  <span style={{ color: palette.error.main }}>
                    <AnimationString
                      charClass={charClass}
                      str={str3}
                      delay={str1.length + str2.length}
                    />
                  </span>
                </Typography>
                <Typography variant="h2">
                  <span style={{ color: palette.error.main }}>
                    <AnimationString
                      charClass={charClass}
                      str={str4}
                      delay={str1.length + str2.length + str3.length}
                    />
                  </span>
                </Typography>
                <Typography variant="h2">
                  <span style={{ color: palette.error.main }}>
                    <AnimationString
                      charClass={charClass}
                      str={str5}
                      delay={
                        str1.length + str2.length + str3.length + str4.length
                      }
                    />
                  </span>{' '}
                  <AnimationString
                    charClass={charClass}
                    str={str6}
                    delay={
                      str1.length +
                      str2.length +
                      str3.length +
                      str4.length +
                      str5.length
                    }
                  />
                </Typography>
                <Typography variant="h2">
                  <AnimationString
                    charClass={charClass}
                    str={str7}
                    delay={
                      str1.length +
                      str2.length +
                      str3.length +
                      str4.length +
                      str5.length +
                      str6.length
                    }
                  />
                </Typography>
              </Box>
            </Box>
            <Box py={20}>
              <img src={overviewImage} alt="" width="100%" height="100%" />
            </Box>
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  )
}
