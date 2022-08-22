import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'

import { palette } from '../themes/AtriumTheme'

const HeroAnimationWrapper = styled(Box)(() => ({
  '&.animation-fill': {
    width: '100%',
  },
  // border: '1px solid red',
  // height: `${
  //   (window.innerHeight || window.document.documentElement.clientHeight) - 20
  // }px`,
  height: '100%',
  margin: 'auto',

  transition: 'width 1.5s',
  // overflowX: 'hidden',
  width: '0%',
  zIndex: 1,
}))
const SideBox = styled(Box)(() => ({
  background: palette.common.black,
  flex: 1,
  zIndex: 2,
}))
export const HeroSection = () => {
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    setAnimationClass('animation-fill')
  }, [])
  return (
    <Box
      className="grid-bg"
      sx={{
        height: '100%',
        position: 'relative',
      }}
      p={5}
      pt="0px !important"
    >
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          width: '100%',
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/hero.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            height: '100%',
            // position: 'absolute',
            width: '100%',
            zIndex: 0,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        }}
      >
        <SideBox />
        <HeroAnimationWrapper className={animationClass}></HeroAnimationWrapper>
        <SideBox />
      </Box>
    </Box>
  )
}
