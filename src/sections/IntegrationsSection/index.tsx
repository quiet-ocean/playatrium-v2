import { Box } from '@mui/material'

import { SectionContainer } from '../../components'

import EndlessIntegrations from './EndlessIntegrations'
import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

export const IntegrationsSection = () => {
  return (
    <Box id="integrations-section">
      <SectionContainer>
        <HomeIntegrations />
      </SectionContainer>
      <SectionContainer>
        <ProjectIntegrations />
      </SectionContainer>
      <SectionContainer>
        <EndlessIntegrations />
      </SectionContainer>
    </Box>
  )
}
