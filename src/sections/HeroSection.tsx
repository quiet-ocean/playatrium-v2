import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'

const HeroAnimationWrapper = styled(Box)(() => ({
  '&.animation-fill': {
    width: '100%',
  },
  backgroundImage: 'url("/hero.png")',
  backgroundPosition: 'center',
  height: `${
    (window.innerHeight || window.document.documentElement.clientHeight) - 20
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
  return <HeroAnimationWrapper className={animationClass} />
}
