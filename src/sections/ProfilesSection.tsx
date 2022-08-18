import { Box, Grid, Typography, ButtonGroup, Button } from '@mui/material'

import profilePreviewImage from '../assets/images/profile-preview.png'
import { palette } from '../themes/AtriumTheme'

export const ProfilesSection = () => {
  return (
    <Box p={30}>
      <Box>
        <Button
          variant="rounded"
          sx={{
            border: `1px solid ${palette.info.main}`,
            color: palette.info.main,
          }}
        >
          profiles
        </Button>
      </Box>
      <Grid container spacing={10}>
        <Grid item lg={5}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button variant="primary" color="info">One</Button>
            <Button variant="primary" color="info">Two</Button>
          </ButtonGroup>
          <Box>
            <Typography variant="h3">Personalize your Identity</Typography>
            <Typography variant="body2">
              User profiles offer one central location for user data across all
              channels and apps, amplifying representation of their digital
              identity.
            </Typography>
            <Typography variant="body2">
              The experience Atrium offers in creating user profiles is
              innovative in terms of the interest and preferences of our users
              and the communities they are a part of.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={7}>
          <img src={profilePreviewImage} alt="" width="100%" />
        </Grid>
      </Grid>
    </Box>
  )
}
