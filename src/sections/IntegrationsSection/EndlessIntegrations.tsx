import { Box, Typography, Grid } from '@mui/material'

import EndlessGif from '../../assets/gifs/endless.gif'
import { palette } from '../../themes/AtriumTheme'

const ProjectIntegrations = () => {
  return (
    <Box py={{ xs: 16 }}>
      <Grid container justifyContent="center" columns={{ md: 10, xl: 12 }}>
        <Grid item md={5}>
          <Box py={16}>
            <img src={EndlessGif} alt="" width="100%" />
          </Box>
        </Grid>
        <Grid item md={1} />
        <Grid
          item
          md={2}
          sx={{ color: palette.text.primary, pt: { md: 50, xs: 16 } }}
        >
          <Typography variant="h3" fontSize={{ md: '48px', xs: '36px' }}>
            Endless Integrations
          </Typography>
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
