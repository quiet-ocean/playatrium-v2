import { Box, Grid, Typography, Button } from '@mui/material'

import figure from '../assets/images/community-figure.svg'
import { palette } from '../themes/AtriumTheme'

export const JoinSection = () => {
  return (
    <Box height={{ md: 560, xs: '100%' }}>
      <Grid
        container
        // pt={9}
        justifyContent="center"
        columns={{ lg: 10, xl: 12 }}
        height="100%"
      >
        <Grid item lg={5}>
          <Box p={{ md: 5, xs: 0 }} height="100%">
            <Box
              py={{ md: 25, xs: 16 }}
              sx={{
                '& *': { color: palette.text.primary },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
              }}
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
                  color="warning"
                  sx={{
                    fontSize: '24px',
                    padding: '16px 24px',
                    width: { md: 'auto', xs: '100%' },
                  }}
                >
                  join discord
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={5} height="100%">
          <Box
            sx={{
              display: 'flex',
              // flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
              width: '100%',
            }}
            pt={9}
          >
            <img src={figure} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
