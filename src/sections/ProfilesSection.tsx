import { Box, Grid, Typography, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'

import profilePreviewImage from '../assets/images/profile-preview.png'
import { MultiSlideAnimationWrapper } from '../components'
import { palette } from '../themes/AtriumTheme'

export const ProfilesSection = () => {
  const [state, setState] = useState(true)

  return (
    <Box py={25} id="profiles-section">
      <Grid container justifyContent="center" columns={{ lg: 10, xl: 12 }}>
        <Grid item xl={3} lg={3}>
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
          <Box py={25} pr={10}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{
                width: '100%',
              }}
            >
              <Button
                variant="primary"
                className={`medium ${state ? 'active' : ''}`}
                color="info"
                sx={{
                  borderRight: '0px !important',
                  width: '100%',
                }}
                onClick={() => setState(true)}
              >
                personal profile
              </Button>
              <Button
                variant="primary"
                className={`medium ${!state ? 'active' : ''}`}
                color="info"
                sx={{
                  borderLeft: '0px !important',
                  width: '100%',
                }}
                onClick={() => setState(false)}
              >
                community hub
              </Button>
            </ButtonGroup>
            <Box mt={24} pr={13}>
              <MultiSlideAnimationWrapper
                state={state}
                child1={
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h3">
                      Personalize your Identity
                    </Typography>
                    <Typography variant="body2" mt={10}>
                      User profiles offer one central location for user data
                      across all channels and apps, amplifying representation of
                      their digital identity.
                    </Typography>
                    <br />
                    <Typography variant="body2">
                      The experience Atrium offers in creating user profiles is
                      innovative in terms of the interest and preferences of our
                      users and the communities they are a part of.
                    </Typography>
                  </Box>
                }
                child2={
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      zIndex: 0,
                    }}
                  >
                    <Typography variant="h3">
                      Connect your communities
                    </Typography>
                    <Typography variant="body2" mt={10}>
                      User profiles offer one central location for user data
                      across all channels and apps, amplifying representation of
                      their digital identity.
                    </Typography>
                    <br />
                    <Typography variant="body2">
                      The experience Atrium offers in creating user profiles is
                      innovative in terms of the interest and preferences of our
                      users and the communities they are a part of.
                    </Typography>
                  </Box>
                }
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xl={7} lg={7} pt={25}>
          <MultiSlideAnimationWrapper
            child1={<img src={profilePreviewImage} alt="" width="100%" />}
            child2={<img src={profilePreviewImage} alt="" width="100%" />}
            state={state}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
