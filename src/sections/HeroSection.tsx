import { Box, styled, Container } from '@mui/material'
import { useEffect, useState } from 'react'

import HeroImage from '../assets/images/hero.png'

const HeroAnimationWrapper = styled(Box)(() => ({
  '& > img': {
    height: `${
      (window.innerHeight || window.document.documentElement.clientHeight) -
      20 -
      70
    }px`,
    position: 'absolute',
    right: '0%',
    top: 0,

    transform: 'translateX(50%)',
    transition: 'transform 1.5s',
    width: `${
      (window.innerWidth || window.document.documentElement.clientWidth) - 40
    }px`,
  },

  '&.animation-fill': {
    '& > img': {
      transform: 'translateX(0%)',
    },
    width: '100%',
  },
  height: '100%',
  margin: 'auto',
  position: 'relative',
  transition: 'width 1.5s',
  width: '0%',
  zIndex: 1,
}))
export const HeroSection = ({ playAnimation }: { playAnimation?: boolean }) => {
  const [animationClass, setAnimationClass] = useState('')
  const [_playAnimation, setPlayAnimation] = useState(false)

  useEffect(() => {
    if (playAnimation) setTimeout(() => setPlayAnimation(true), 1200)
  }, [playAnimation])
  useEffect(() => {
    if (_playAnimation)
      setTimeout(() => setAnimationClass('animation-fill'), 100)
  }, [_playAnimation])

  return (
    <Container
      className="grid-bg"
      sx={{ height: '100%', maxWidth: '100% !important', width: '100%' }}
    >
      <Box
        sx={{
          display: !_playAnimation ? 'none' : 'flex',
          // display: 'flex',
          height: '100%',
          position: 'relative',
          // width: '100%',
        }}
        p={5}
        pt="0px !important"
      >
        <HeroAnimationWrapper
          className={animationClass}
          sx={{
            overflowX: 'hidden',
          }}
        >
          <img src={HeroImage} alt="" width="100%" />
        </HeroAnimationWrapper>
      </Box>
    </Container>
  )
}
