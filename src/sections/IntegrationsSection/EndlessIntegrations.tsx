import { Box, Typography, Grid } from '@mui/material'

import EndlessGif from '../../assets/gifs/endless.gif'
import EndlessImage from '../../assets/gifs/endless.png'
import { palette } from '../../themes/AtriumTheme'

const EndlessIntegrations = ({ animate }: { animate: boolean }) => {
  return (
    <Box>
      <Grid container justifyContent="center" columns={{ md: 10, xl: 12 }}>
        <Grid item md={7}>
          <Box
            p={25}
            sx={{
              '& img': {
                maxHeight: { md: 'auto', xs: 360 },
              },
            }}
          >
            <img
              src={EndlessGif}
              alt=""
              // width="100%"
              style={{ display: animate ? 'block' : 'none', margin: 'auto' }}
            />
            <img
              src={EndlessImage}
              alt=""
              // width="100%"
              style={{ display: !animate ? 'block' : 'none', margin: 'auto' }}
            />
          </Box>
        </Grid>
        <Grid item md={3} sx={{ color: palette.text.primary }}>
          <Box p={{ md: 20, xs: 12 }} pt={{ md: 50, xs: 20 }}>
            <Typography variant="h3" fontSize={{ md: '48px', xs: '36px' }}>
              Endless Integrations
            </Typography>
            <Typography variant="body2" mt={6}>
              We’ve started with ASAC, and we are looking to integrate our next
              50 projects. If you want a central hub inside Atrium, submit your
              project today!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EndlessIntegrations
