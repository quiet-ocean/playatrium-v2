import { Box, Button } from '@mui/material'

import { SectionContainer } from '../../components'
import { palette } from '../../themes/AtriumTheme'

import EndlessIntegrations from './EndlessIntegrations'
// import HomeIntegrations from './HomeIntegrations'
import ProjectIntegrations from './ProjectIntegrations'

export const IntegrationsSection = () => {
  return (
    <Box id="integrations-section">
      <Box display="flex" justifyContent="center" pt={{ md: 25, xs: 16 }}>
        <Button
          variant="rounded"
          sx={{
            border: `1px solid ${palette.warning.main}`,
            color: palette.warning.main,
          }}
          // onClick={handleNext}
        >
          integrations
        </Button>
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
