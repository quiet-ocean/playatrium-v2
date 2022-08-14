import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import heroImage from '../assets/hero.png'

const HeroAnimationWrapper = styled(Box)(() => ({
  margin: 'auto',
  width: '0%',
  transition: 'width 1.5s',
  height: '800px',

  '&.animation-fill': {
    width: '100%',
  }
}))
export const HeroSection = () => {

  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    setAnimationClass('animation-fill')
  }, [])
  return (
    <HeroAnimationWrapper className={animationClass}>
      <img src={heroImage} alt="" width="100%" height="100%"/>
    </HeroAnimationWrapper>
  )
}
