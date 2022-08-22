import { Box, Grid, Typography, Button } from '@mui/material'

import figure from '../assets/images/community-figure.png'
import { palette } from '../themes/AtriumTheme'

export const JoinSection = () => {
  return (
    <Grid container pt={9} justifyContent="center" columns={{ lg: 10, xl: 12 }}>
      <Grid item lg={4}>
        <Box p={5}>
          <Box py={25} sx={{ '& *': { color: palette.text.primary } }}>
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
            // flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <img src={figure} alt="" width="80%" />
        </Box>
      </Grid>
    </Grid>
  )
}
