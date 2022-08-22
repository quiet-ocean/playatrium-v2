import { Box, Grid, Typography, Button } from '@mui/material'

import figure from '../assets/images/community-figure.png'
import { palette } from '../themes/AtriumTheme'

export const JoinSection = () => {
  return (
    <Box
      sx={{
        background: palette.info.main,
      }}
    >
      <Grid container pt={9}>
        <Grid item lg={6}>
          <Box p={5}>
            <Box
              p="100px 145px"
              sx={{ '& *': { color: palette.text.primary } }}
            >
              <Typography variant="h3">Join our Community</Typography>
              <Box
                py={6}
                sx={{
                  '& p': {
                    lineHeight: '27px',
                  },
                }}
              >
                <ul>
                  <li>
                    <Typography variant="body2">
                      Get exclusive looks into the products evolution
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Communicate directly with the team
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Contribute to Atrium’s feature development
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box py={4}>
                <Button
                  variant="primary"
                  sx={{
                    background: palette.warning.main,
                    color: palette.text.secondary,
                    fontSize: '24px',
                    padding: '16px 24px',
                  }}
                >
                  join discord
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'end',
            }}
          >
            <img src={figure} alt="" width="80%" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
