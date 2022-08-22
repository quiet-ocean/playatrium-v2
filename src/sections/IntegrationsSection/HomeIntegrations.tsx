import { Box, Button, Grid } from '@mui/material'
import { useRef, useState } from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import AnimGifBlue from '../../assets/gifs/anim-gif-blue.gif'
import AnimGifRed from '../../assets/gifs/anim-gif-red.gif'
import AnimGifYellow from '../../assets/gifs/anim-gif-yellow.gif'
import RunningMonkey from '../../assets/gifs/GIF_ASAC_RunDown_v2.gif'
import { palette } from '../../themes/AtriumTheme'

const HomeIntegrations = () => {
  const carousel = useRef(null)
  const [index, setIndex] = useState<0 | 1>(1)
  const handleNext = () => {
    console.log(carousel)
    carousel.current?.moveTo(index)
    setIndex(index === 0 ? 1 : 0)
  }
  return (
    <Box py={25}>
      <Box display="flex" justifyContent="center">
        <Button
          variant="rounded"
          sx={{
            border: `1px solid ${palette.warning.main}`,
            color: palette.warning.main,
          }}
          onClick={handleNext}
        >
          integrations
        </Button>
      </Box>
      <Grid container mt={25} justifyContent="center">
        <Grid item lg={3}>
          <img src={AnimGifYellow} alt="" width="100%" />
        </Grid>
        <Grid item lg={3}>
          <Carousel
            ref={carousel}
            axis="vertical"
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            transitionTime={1000}
            showStatus={false}
          >
            <img src={AnimGifRed} alt="" width="100%" />
            <img src={RunningMonkey} alt="" width="100%" />
          </Carousel>
        </Grid>
        <Grid item lg={3}>
          <img src={AnimGifBlue} alt="" width="100%" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeIntegrations
