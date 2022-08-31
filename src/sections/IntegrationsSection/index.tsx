import { Box } from '@mui/material'

import { SectionContainer } from '../../components'
import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import EndlessIntegrations from './EndlessIntegrations'
// import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

export const IntegrationsSection = () => {
  return (
    <Box id="integrations-section">
      <Box display="flex" justifyContent="center" pt={{ md: 25, xs: 16 }}>
        <SubtitleText color={palette.warning.main}>integrations</SubtitleText>
      </Box>
      {/* <SectionContainer display={{ md: 'block', xs: 'none' }}>
        <HomeIntegrations />
      </SectionContainer> */}
      <SectionContainer>
        <ProjectIntegrations />
      </SectionContainer>
      <SectionContainer>
        <EndlessIntegrations />
      </SectionContainer>
    </Box>
  )
}
