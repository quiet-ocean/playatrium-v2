import { Box, Grid } from '@mui/material'
import { useRef } from 'react'

import { IntegrationsContainer } from '../../components'
import type { PlayState } from '../../pages'
import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import EndlessIntegrations from './EndlessIntegrations'
// import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const IntegrationsSection = ({ state }: { state: PlayState }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  // const handleAnimation = (prog: number) => {}
  // const handleAfterChange = () => {}
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
          <IntegrationsContainer done={state === 'done'}>
            <Box className="project-panel">
              <ProjectIntegrations animate={state === 'project'} />
            </Box>
            <Box className="endless-panel" mt={3} sx={{ width: '100%'}}>
              <EndlessIntegrations animate={state === 'endless'} />
            </Box>
          </IntegrationsContainer>
        </Grid>
      </Grid>
      {/* </Slider> */}
    </Box>
  )
}
