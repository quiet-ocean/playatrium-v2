import {
  Box,
  Grid,
  Typography,
  ButtonGroup,
  Button,
  styled,
} from '@mui/material'
import React, { useState, useRef, useEffect } from 'react'

import { MultiSlideAnimationWrapper, SubtitleText } from '../components'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { palette } from '../themes/AtriumTheme'

const TabButton = styled(Button)(({ theme }) => ({
  '&.active': {
    background: theme.palette.info.main,
    color: theme.palette.text.primary,
  },
  '&:hover:not(.active)': {
    background: '#FFF',
    cursor: 'pointer',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
  background: theme.palette.background.default,
  border: `2px solid ${theme.palette.info.main} !important`,
  borderRadius: 0,
  color: theme.palette.info.main,
  fontFamily: 'Fractul Alt',
  fontWeight: 600,
  padding: 16,
  textTransform: 'capitalize',
  width: '100%',
  zIndex: 10,
}))

const ProfileVideo = () => {
  return (
    <video
      muted
      preload="none"
      controls
      id="video"
      width="100%"
      // height={335}
      autoPlay
      style={{
        borderRadius: 12,
      }}
    >
      <track kind="captions" />
      <source src="/gamedemo.mp4" type="video/mp4" />
    </video>
  )
}
const ProfileSectionContainer = styled(Box)(() => ({
  '&.hide': {
    opacity: 0,
  },
  '&.show': {
    opacity: 1,
  },
  opacity: 0,
  transition: 'opacity 1s',
}))
export const ProfilesSection = () => {
  const [sectionClass, setSectionClass] = useState('')
  const [state, setState] = useState(true)
  const section = useRef<Element>(null)
  const observer = useIntersectionObserver(section, {})

  useEffect(() => {
    // console.log('intersected ', observer?.isIntersecting)
    if (observer?.isIntersecting) setSectionClass('show')
    else setSectionClass('hide')
  }, [observer])

  const TabButtonGroup = () => (
    <ButtonGroup
      variant="contained"
      aria-label="outlined primary button group"
      sx={{
        boxShadow: 'none',
        width: '100%',
      }}
    >
      <TabButton
        className={`medium ${state ? 'active' : ''}`}
        sx={{ borderRight: `0px !important` }}
        onClick={() => setState(true)}
      >
        Personal Profile
      </TabButton>
      <TabButton
        className={`medium ${!state ? 'active' : ''}`}
        onClick={() => setState(false)}
      >
        Community Hub
      </TabButton>
    </ButtonGroup>
  )
  return (
    <ProfileSectionContainer
      ref={section}
      id="profiles-section"
      py={{ md: 25, xs: 16 }}
      className={sectionClass}
    >
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
          <Box py={{ md: 25, xs: 9 }} pr={{ md: 10, xs: 0 }}>
            <Box display={{ md: 'block', xs: 'none' }}>
              <TabButtonGroup />
            </Box>
            <Box mt={{ md: 24, xs: 0 }} pr={{ md: 13, xs: 0 }}>
              <MultiSlideAnimationWrapper
                state={state}
                child1={
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h3">
                      Social media, but web3 native.
                    </Typography>
                    <Typography variant="body2" mt={10}>
                      Build your user profile inside Atrium.
                    </Typography>
                    {/* <Typography variant="body2">inside Atrium.</Typography> */}
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
                      Join your favourite NFT communities
                    </Typography>
                    <Typography variant="body2" mt={10}>
                      We put all the best community building tools all in one
                      place.
                    </Typography>
                    {/* <br />
                    <Typography variant="body2">
                      The experience Atrium offers in creating user profiles is
                      innovative in terms of the interest and preferences of our
                      users and the communities they are a part of.
                    </Typography> */}
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
          pt={{ md: 25, xs: 9 }}
          sx={{ order: { md: 2, xs: 1 } }}
        >
          <MultiSlideAnimationWrapper
            child1={<ProfileVideo />}
            child2={<ProfileVideo />}
            state={state}
          />
        </Grid>
      </Grid>
    </ProfileSectionContainer>
  )
}
