import { Box, styled, Typography, Collapse } from '@mui/material'
import { useEffect, useState } from 'react'

import HeroImage from '../assets/images/hero.png'
import { palette } from '../themes/AtriumTheme'

const HeroAnimationWrapper = styled(Box)(({ theme }) => ({
  '& > div': {
    height: '100%',
  },
  '& > div.main': {
    // cursor: 'url("/public/cursor.svg") 12 12, pointer',
    cursor: 'url("/cursor.svg") 12 12, pointer',
    transition: 'width 1s',
    width: '0%',
  },
  '& > div.slide': {
    background: theme.palette.common.black,
    transition: 'width 1s',
    width: '100%',
  },
  '&.animation-fill': {
    '& > div.main': {
      width: '100%',
      zIndex: 10,
    },
    '& > div.slide': {
      width: '0%',
      // width: '20px',
    },
  },
  display: 'flex',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
}))
const HeroAnimation = ({
  children,
  start,
}: {
  children: React.ReactNode
  start: boolean
}) => {
  const [fade, setFade] = useState(false)
  const [animClassName, setAnimClassName] = useState('')
  useEffect(() => {
    if (start) {
      setFade(true)
      setTimeout(() => {
        setAnimClassName('animation-fill')
      }, 1000)
    }
  }, [start])
  return (
    <Box
      sx={{
        '& img': {
          objectFit: { sm: 'fill', xs: 'cover' },
        },
        // cursor: 'url("../assets/images/cursor.svg"), auto',
        // cursor: 'url("../assets/images/cursor.svg"), auto',
        // display: 'flex',
        // flexDirection: 'column',
        height: '100%',

        p: { xl: '0px 20px 20px 20px', xs: '0px 0px 20px 0px' },

        // position: 'relative',
        width: '100%',
      }}
    >
      <Box height="100%" position="relative">
        <Box
          p={{ md: 10, xs: '20px 10px' }}
          position="absolute"
          top="0"
          width="100%"
        >
          <Collapse in={fade}>
            <Typography
              variant="h1"
              fontSize={{ md: 64, xs: 48 }}
              color={palette.text.primary}
            >
              Making web3 fun again.
            </Typography>
          </Collapse>
        </Box>
        <Box height="100%" pt={{ md: '150px', xs: '180px' }}>
          <Box
            sx={{
              height: '100%',
              position: 'relative',
              width: '100%',
            }}
          >
            {children}
            <HeroAnimationWrapper className={animClassName}>
              <Box className="slide" />
              <Box className="main custom-cursor" />
              <Box className="slide" />
            </HeroAnimationWrapper>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export const HeroSection = ({ playAnimation }: { playAnimation?: boolean }) => {
  // const [_playAnimation, setPlayAnimation] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)

  // useEffect(() => {
  //   if (playAnimation) setTimeout(() => setPlayAnimation(true), 1200)
  // }, [playAnimation])
  useEffect(() => {
    if (playAnimation) setTimeout(() => setStartAnimation(true), 1200)
  }, [playAnimation])

  return (
    <Box
      sx={{
        height: '100%',
        pt: 16,
        width: '100%',
      }}
    >
      <Box
        className="grid-bg"
        sx={{
          height: '100%',
          position: 'relative',
        }}
      >
        <HeroAnimation start={startAnimation}>
          <img src={HeroImage} alt="" width="100%" height="100%" />
        </HeroAnimation>
      </Box>
    </Box>
  )
}
