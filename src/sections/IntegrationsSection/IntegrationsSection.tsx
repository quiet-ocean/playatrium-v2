import { Box, Grid } from '@mui/material'
import { useRef } from 'react'

// import type { PlayState } from '../../App'
import { SubtitleText } from '../../components'
import { palette } from '../../themes/AtriumTheme'

import EndlessIntegrations from './EndlessIntegrations'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const IntegrationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

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
          <Box pt={4}>
            <EndlessIntegrations />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
