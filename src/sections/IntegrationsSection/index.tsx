import { Box } from '@mui/material'

import { Wrapper } from '../../components'

import EndlessIntegrations from './EndlessIntegrations'
import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

export const IntegrationsSection = () => {
  return (
    <Box id="integrations-section">
      <Wrapper>
        <HomeIntegrations />
      </Wrapper>
      <Wrapper>
        <ProjectIntegrations />
      </Wrapper>
      <Wrapper>
        <EndlessIntegrations />
      </Wrapper>
    </Box>
  )
}
