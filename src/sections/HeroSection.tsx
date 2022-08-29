import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'

import HeroImage from '../assets/images/hero.png'

const HeroAnimationWrapper = styled(Box)(({ theme }) => ({
  '& > div': {
    height: '100%',
  },
  '& > div.main': {
    transition: 'width 1s',
    width: '0%',
  },
  '& > div.slide': {
    background: theme.palette.background.paper,
    transition: 'width 1s',
    width: '100%',
  },
  '&.animation-fill': {
    '& > div.main': {
      width: '100%',
    },
    '& > div.slide': {
      width: '0%',
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
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <Box
      sx={{
        '& img': {
          objectFit: { sm: 'fill', xs: 'cover' },
        },
        height: '100%',
        position: 'relative',
        width: '100%',
      }}
    >
      {children}
      <HeroAnimationWrapper className={className}>
        <Box className="slide" />
        <Box className="main" />
        <Box className="slide" />
      </HeroAnimationWrapper>
    </Box>
  )
}
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
        <HeroAnimation className={animationClass}>
          <img src={HeroImage} alt="" width="100%" height="100%" />
        </HeroAnimation>
      </Box>
    </Box>
  )
}
