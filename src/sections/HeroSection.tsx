import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'

import heroImage from '../assets/images/hero.png'

const HeroAnimationWrapper = styled(Box)(() => ({
  '&.animation-fill': {
    width: '100%',
  },
  height: `${
    (window.outerHeight ||
      window.innerHeight ||
      window.document.documentElement.clientHeight) -
    20 -
    69
  }px`,
  margin: 'auto',
  transition: 'width 1.5s',

  width: '0%',
}))
export const HeroSection = () => {
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    setAnimationClass('animation-fill')
  }, [])
  return (
    <HeroAnimationWrapper className={animationClass}>
      <img src={heroImage} alt="" width="100%" height="100%" />
    </HeroAnimationWrapper>
  )
}
