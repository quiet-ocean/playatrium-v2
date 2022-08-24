import { Box, Typography, Grid } from '@mui/material'

import WalkAroundGif from '../../assets/gifs/walkaround 1.gif'
import { palette } from '../../themes/AtriumTheme'

const ProjectIntegrations = () => {
  return (
    <Box >
      <Grid container justifyContent="center" columns={{ md: 10, xl: 12 }}>
        <Grid item md={5}>
          <img src={WalkAroundGif} alt="" width="100%" />
        </Grid>
        <Grid item md={1} />
        <Grid
          item
          md={2}
          sx={{ color: palette.text.primary, pt: { md: 50, x: 16 } }}
        >
          <Typography variant="h3" fontSize={{ md: '48px', xs: '36px' }}>
            Project Integrations
          </Typography>
          <Typography variant="body2" mt={6}>
            Atrium gives utility to other projects through integrating their
            artwork, products, and communities into our metaverse platform.
            <br />
            <br />
            Atrium is a minimalist utopia that lets players paint their own
            picture.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProjectIntegrations
