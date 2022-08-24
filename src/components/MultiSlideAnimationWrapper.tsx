import { Box } from '@mui/material'
import React, { useRef, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { palette } from '../themes/AtriumTheme'

export const MultiSlideAnimationWrapper = ({
  child1,
  child2,
  state,
}: {
  child1: React.ReactNode
  child2: React.ReactNode
  state: boolean
}) => {
  const ref = useRef<Carousel>(null)
  // ref.current.
  const [show, setShow] = useState(true)
  useEffect(() => {
    if (state) {
      ref.current?.moveTo(1)
      ref.current?.moveTo(0)
    } else {
      ref.current?.moveTo(1)
      ref.current?.moveTo(2)
    }
    setTimeout(() => setShow(state), 1000)
  }, [state])
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          '& .carousel-root, .carousel, .slider-wrapper, .slider-wrapper': {
            '.slider-wrapper ul, .slider-wrapper li': {
              height: '100%',
              width: '100%',
            },
            height: '100%',
            width: '100%',
          },
          height: '100%',
          position: 'absolute',
          width: '100%',
          zIndex: 10,
        }}
      >
        <Carousel
          axis="horizontal"
          ref={ref}
          transitionTime={2000}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          swipeable={false}
          showStatus={false}
        >
          <Box
            sx={{ background: 'transparent', height: '100%', width: '100%' }}
          />
          <Box
            sx={{
              background: palette.background.default,
              // border: '1px solid red',
              height: '100%',
              width: '100%',
            }}
          />
          <Box
            sx={{ background: 'transparent', height: '100%', width: '100%' }}
          />
        </Carousel>
      </Box>
      <Box
        sx={{
          height: '100%',
          visibility: show ? 'visible' : 'hidden',
          width: '100%',
        }}
      >
        {child1}
      </Box>
      <Box
        sx={{
          height: '100%',
          position: 'absolute',
          top: '0px',
          visibility: !show ? 'visible' : 'hidden',
          width: '100%',
        }}
      >
        {child2}
      </Box>
    </Box>
  )
}
