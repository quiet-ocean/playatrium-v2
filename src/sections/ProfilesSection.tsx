import { Box, Grid, Typography, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'

import profilePreviewImage from '../assets/images/profile-preview.png'
import { MultiSlideAnimationWrapper } from '../components'
import { palette } from '../themes/AtriumTheme'

import { SubtitleText } from './UpdatesSection'

// const videoStyle = {
//   borderRadius: '12px',
//   height: '100%',
// }
export const ProfilesSection = () => {
  const [state, setState] = useState(true)

  const TabButtonGroup = () => (
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
  )
  return (
    <Box py={{ md: 25, xs: 16 }} id="profiles-section">
      <Grid container justifyContent="center" columns={{ lg: 10, xl: 12 }}>
        <Grid item xl={10} xs={12} width="100%">
          <Box width="100%">
            <SubtitleText color={palette.info.main}>profiles</SubtitleText>
          </Box>
          <Box display={{ md: 'none', xs: 'block' }} pt={16}>
            <TabButtonGroup />
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} sx={{ order: { md: 1, xs: 2 } }}>
          <Box py={{ md: 25, xs: 16 }} pr={{ md: 10, xs: 0 }}>
            <Box display={{ md: 'block', xs: 'none' }}>
              <TabButtonGroup />
            </Box>
            <Box mt={{ md: 24, xs: 0 }} pr={{ md: 13, xs: 0 }}>
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
        <Grid
          item
          xl={7}
          lg={7}
          pt={{ md: 25, xs: 16 }}
          sx={{ order: { md: 2, xs: 1 } }}
        >
          <MultiSlideAnimationWrapper
            child1={<img src={profilePreviewImage} alt="" width="100%" />}
            child2={<img src={profilePreviewImage} alt="" width="100%" />}
            // child1={
            //   <video width="100%" height="100%" controls style={videoStyle}>
            //     <track kind="captions" />
            //     <source src="/gamedemo.mp4" type="video/mp4" />
            //   </video>
            //   // <CardMedia sx={{ height: '100%', width: '100%' }} src="/gamedemo.mp4" />
            // }
            // child2={
            //   <video width="100%" height="100%" controls style={videoStyle}>
            //     <track kind="captions" />
            //     <source src="/gamedemo.mp4" type="video/mp4" />
            //   </video>
            //   // <CardMedia sx={{ height: '100%', width: '100%' }} src="/gamedemo.mp4" />
            // }
            state={state}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
