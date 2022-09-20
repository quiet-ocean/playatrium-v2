import { Box } from '@mui/material'
import React, { useEffect } from 'react'

import type { PlayState } from '../App'
import { SectionContainer, GridBgContainer } from '../components'
import {
  HeroSection,
  IntegrationsSection,
  UpdatesSection,
  OverviewSection,
  ProfilesSection,
  BuildersSection,
  JoinSection,
} from '../sections'
import AtriumTheme from '../themes/AtriumTheme'

export const Home = ({
  overviewRef,
  integrationsRef,
  overviewVideoStart,
  integrationPlayState,
  animClass,
}: {
  overviewRef: React.RefObject<HTMLDivElement>
  integrationsRef: React.RefObject<HTMLDivElement>
  overviewVideoStart: boolean
  integrationPlayState: PlayState
  animClass: string
}) => {
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }, [])

  return (
    <Box
      className={animClass}
      sx={{
        '&.bg-animation .grid-bg': {
          '&::before': {
            left: `0%`,
            width: `100%`,
          },
          position: 'relative',
        },
        scrollSnapType: 'y mandatory',
      }}
    >
      <SectionContainer className="header" height="100vh !important">
        <Box height="100%" display="flex" flexDirection="column">
          <Box sx={{ height: '100%', width: '100%' }}>
            <GridBgContainer top>
              <HeroSection playAnimation={animClass === 'bg-animation'} />
            </GridBgContainer>
          </Box>
        </Box>
      </SectionContainer>
      <SectionContainer className="update light">
        <UpdatesSection />
      </SectionContainer>
      <SectionContainer
        sx={{
          scrollSnapAlign: 'center',
        }}
        ref={overviewRef}
        id="overview-container"
      >
        <GridBgContainer>
          <OverviewSection videoStart={overviewVideoStart} />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer className="light">
        <GridBgContainer>
          <ProfilesSection />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer ref={integrationsRef}>
        <GridBgContainer>
          <IntegrationsSection state={integrationPlayState} />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer height="100% !important">
        <GridBgContainer
          sx={{
            height: '100% !important',
          }}
        >
          <BuildersSection />
        </GridBgContainer>
      </SectionContainer>
      <Box
        px={{ lg: 5, xl: 0 }}
        sx={{
          background: AtriumTheme.palette.info.main,
        }}
      >
        <GridBgContainer>
          <JoinSection />
        </GridBgContainer>
      </Box>
    </Box>
  )
}
