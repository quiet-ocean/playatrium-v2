import { Box, Button, Grid } from '@mui/material'

import AnimGifBlue from '../../assets/gifs/anim-gif-blue.gif'
import AnimGifRed from '../../assets/gifs/anim-gif-red.gif'
import AnimGifYellow from '../../assets/gifs/anim-gif-yellow.gif'
import { palette } from '../../themes/AtriumTheme'

const HomeIntegrations = () => {
  return (
    <Box py={25}>
      <Box display="flex" justifyContent="center">
        <Button
          variant="rounded"
          sx={{
            border: `1px solid ${palette.warning.main}`,
            color: palette.warning.main,
          }}
        >
          integrations
        </Button>
      </Box>
      <Grid container mt={25} justifyContent="center">
        <Grid item lg={3}>
          <img src={AnimGifYellow} alt="" width="100%" />
        </Grid>
        <Grid item lg={3}>
          <img src={AnimGifRed} alt="" width="100%" />
        </Grid>
        <Grid item lg={3}>
          <img src={AnimGifBlue} alt="" width="100%" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeIntegrations
