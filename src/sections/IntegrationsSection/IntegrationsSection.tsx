import { Box, Grid } from '@mui/material'
import { useRef } from 'react'

import { useContext, useEffect } from 'react'
import type { PlayState } from '../../App'
import { IntegrationsContainer } from '../../components'
import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import EndlessIntegrations from './EndlessIntegrations'
// import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { AppContext } from '../../context/AppContext'

export const IntegrationsSection = ({ state }: { state: PlayState }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { integrationsPG } = useContext(AppContext)

  useEffect(() => {
    console.log('integration animation progress is ', integrationsPG)
  }, [integrationsPG])
  return (
    <Box
      id="integrations-section"
      ref={sectionRef}
      sx={{
        height: '100%',
      }}
    >
      <Box display="flex" justifyContent="center" pt={{ md: 25, xs: 16 }}>
        <SubtitleText color={palette.warning.main}>integrations</SubtitleText>
      </Box>
      <Grid container columns={{ lg: 10, xl: 12 }} justifyContent="center">
        <Grid item xs={10} className="project-panel">
          <IntegrationsContainer
            className={`${state === 'done' ? 'done' : ''}`}
          >
            <Box className="project-panel">
              <ProjectIntegrations animate={state === 'project'} />
            </Box>
            <Box className="screen-panel" />
            <Box
              className="endless-panel"
              mt={3}
              sx={{ height: '100%', width: '100%' }}
            >
              <EndlessIntegrations animate={state === 'endless'} />
            </Box>
          </IntegrationsContainer>
        </Grid>
      </Grid>
    </Box>
  )
}
