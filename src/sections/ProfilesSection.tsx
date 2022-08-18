import {
  Box,
  Grid,
  Typography,
  ButtonGroup,
  Button,
  styled,
} from '@mui/material'
import React, { useRef, useEffect, useState, forwardRef } from 'react'
import { Carousel } from 'react-responsive-carousel'

import profilePreviewImage from '../assets/images/profile-preview.png'
import { palette } from '../themes/AtriumTheme'

const MultiSlideAnimationWrapper = ({
  child1,
  child2,
  state,
}: {
  child1: React.ReactNode
  child2: React.ReactNode
  state: boolean
}) => {
  const ref = useRef<Carousel>(null)
  // ref.current.
  const [show ,setShow] = useState(true)
  useEffect(() => {
    if (state) {
      ref.current?.moveTo(1)
      ref.current?.moveTo(0)
    } else {
      ref.current?.moveTo(1)
      ref.current?.moveTo(2)
    }
    setTimeout(() => setShow(state), 1000)
  }, [state])
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          '& .carousel-root, .carousel, .slider-wrapper, .slider-wrapper': {
            '.slider-wrapper ul, .slider-wrapper li': {
              height: '100%',
              width: '100%',
            },
            height: '100%',
            width: '100%',
          },
          height: '100%',
          position: 'absolute',
          width: '100%',
          zIndex: 10,
        }}
      >
        <Carousel
          axis="horizontal"
          ref={ref}
          transitionTime={2000}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          swipeable={false}
          showStatus={false}
        >
          <Box
            sx={{ background: 'transparent', height: '100%', width: '100%' }}
          />
          <Box
            sx={{
              background: palette.background.default,
              // border: '1px solid red',
              height: '100%',
              width: '100%',
            }}
          />
          <Box
            sx={{ background: 'transparent', height: '100%', width: '100%' }}
          />
        </Carousel>
      </Box>
      <Box sx={{ height: '100%', width: '100%', visibility: show? 'visible' : 'hidden' }}>{child1}</Box>
      <Box
        sx={{ height: '100%', position: 'absolute', top: '0px', width: '100%', visibility: !show? 'visible' : 'hidden' }}
      >
        {child2}
      </Box>
    </Box>
  )
}


export const ProfilesSection = () => {
  const [state, setState] = useState(true)

  return (
    <Box p="100px 145px">
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
      <Grid container spacing={10} mt={21}>
        <Grid item lg={4}>
          <Box py={8}>
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
                  <Box sx={{ display: 'flex', flexDirection: 'column', zIndex: 0 }}>
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
        <Grid item lg={8}>
          <MultiSlideAnimationWrapper
            child1={
              <img src={profilePreviewImage} alt="" width="100%" />
            }
            child2={
              <img src={profilePreviewImage} alt="" width="100%" />
            }
            state={state}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
