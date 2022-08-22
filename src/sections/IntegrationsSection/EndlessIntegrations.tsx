import { Box, Typography, Grid } from '@mui/material'

import EndlessGif from '../../assets/gifs/endless.gif'
import { palette } from '../../themes/AtriumTheme'

const ProjectIntegrations = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item lg={5}>
          <img src={EndlessGif} alt="" width="100%" />
        </Grid>
        <Grid item lg={1} />
        <Grid item lg={2} sx={{ color: palette.text.primary, pt: 50 }}>
          <Typography variant="h3">Endless Integrations</Typography>
          <Typography variant="body2" mt={6}>
            We’ve started with ASAC, and we are looking to integrate our next 50
            projects. If you want a central hub inside Atrium, submit your
            project today!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProjectIntegrations
