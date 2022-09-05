import { Box, Grid } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'

import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import EndlessIntegrations from './EndlessIntegrations'
// import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

import { IntegrationsContainer } from '../../components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  arrows: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  vertical: true,
  verticalSwiping: true,
}

export const IntegrationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<Slider>(null)

  const handleAnimation = (prog: number) => {

  }
  const handleAfterChange = () => {

  }
  return (
    <Box
      id="integrations-section"
      ref={sectionRef}
      sx={{
        // '& .slick-list': {
          // height: { md: 'auto !important', xs: '' },
        // },
        height: '100%',
      }}
    >
      <Box display="flex" justifyContent="center" pt={{ md: 25, xs: 16 }}>
        <SubtitleText color={palette.warning.main}>integrations</SubtitleText>
      </Box>
      {/* <SectionContainer display={{ md: 'block', xs: 'none' }}>
        <HomeIntegrations />
      </SectionContainer> */}
      {/* <Slider
        {...settings}
        afterChange={() => {
          // animateEndless()
          handleAfterChange
        }}
        ref={sliderRef}
      > */}
      <Grid container columns={{ lg: 10, xl: 12 }} justifyContent="center">
        <Grid item xs={10} className="project-panel">
          <IntegrationsContainer>
            <Box>
              <ProjectIntegrations animate={true} />
            </Box>
            <Box className="endless-panel">
              <EndlessIntegrations animate={true} />
            </Box>
          </IntegrationsContainer>
        </Grid>
      </Grid>
      {/* </Slider> */}
    </Box>
  )
}
