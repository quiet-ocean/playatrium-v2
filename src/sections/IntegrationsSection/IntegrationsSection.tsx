import type { BoxProps } from '@mui/material'
import { Box, Grid, Typography, Button, styled } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

// import type { PlayState } from '../../App'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Img1 from '../../assets/images/integrations/1.png'
import Img2 from '../../assets/images/integrations/2.png'
import Img3 from '../../assets/images/integrations/3.png'
import Main from '../../assets/images/integrations/main.png'
import Img4 from '../../assets/images/integrations/sm-1.png'
import Img5 from '../../assets/images/integrations/sm-2.png'
import Img6 from '../../assets/images/integrations/sm-3.png'
import { SubtitleText } from '../../components'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { palette } from '../../themes/AtriumTheme'

interface ImgBoxProps extends BoxProps {
  large?: boolean
}
const rotateDeg = 6.46

const ImgBox = styled(Box)<ImgBoxProps>(({ theme, large }) => ({
  '& .hover': {
    opacity: 1,
  },
  '& > img': {
    height: '100%',
    width: '100%',
  },
  opacity: 0.1,
  position: 'absolute',
  transition: 'all 1s',
  // width: { md: `${large ? 160 : 96}`, xs: `${large ? 84 : 58}` },
  [theme.breakpoints.up('md')]: {
    height: large ? 160 : 96,
    width: large ? 160 : 96,
  },
  [theme.breakpoints.down('md')]: {
    height: large ? 84 : 58,
    width: large ? 84 : 58,
  },
}))
export const IntegrationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [imgBoxClass, setImgBoxClass] = useState('')
  const [sectionStyle, setSectionStyle] = useState({ opacity: 0 })

  let observer = useIntersectionObserver(sectionRef, {})

  useEffect(() => {
    if (observer?.isIntersecting) {
      displaySection()
    } else {
      hideSection()
    }
  }, [observer])
  const displaySection = () =>
    setTimeout(() => setSectionStyle({ opacity: 1 }), 1000)
  const hideSection = () => setSectionStyle({ opacity: 0 })

  const handleMouseEnter = () => {
    setImgBoxClass('hover')
  }
  const handleMouseLeave = () => setImgBoxClass('')
  return (
    <Box
      id="integrations-section"
      ref={sectionRef}
      height="100%"
      sx={{
        transition: 'opacity 1s',
        ...sectionStyle,
      }}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Grid container justifyContent="center" columns={{ lg: 10, xl: 12 }}>
          <Grid
            item
            xl={6}
            md={4}
            xs={12}
            py={{ md: 0, xs: 20 }}
            width={{ md: 'auto', xs: '80%' }}
          >
            <Box
              sx={{
                '& img': {
                  maxHeight: { md: 300, xs: 150 },
                },
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={imgBoxClass}
                position="relative"
                sx={{
                  '&.hover > div': {
                    opacity: 1,
                  },
                  '&.hover > div:nth-child(even):not(.main)': {
                    transform: `rotateZ(-${rotateDeg}deg)`,
                  },
                  '&.hover > div:nth-child(odd):not(.main)': {
                    transform: `rotateZ(${rotateDeg}deg)`,
                  },
                }}
              >
                <ImgBox left="-10%" top="-25%" large>
                  <img src={Img1} alt="" />
                </ImgBox>
                <ImgBox right="-25%" top="18%" large>
                  <img src={Img2} alt="" />
                </ImgBox>
                <ImgBox left="-22%" top="65%" large>
                  <img src={Img3} alt="" />
                </ImgBox>
                <ImgBox left="-40%" top="25%">
                  <img src={Img4} alt="" />
                </ImgBox>
                <ImgBox right="2%" top="-12%">
                  <img src={Img5} alt="" />
                </ImgBox>
                <ImgBox
                  right="-9%"
                  top="79%"
                  width={96}
                  height={96}
                  bgcolor="#FFF"
                >
                  <img src={Img6} alt="" />
                </ImgBox>
                <Box className="main">
                  <img src={Main} alt="" />
                </Box>
                <Box
                  position="absolute"
                  top={0}
                  sx={{ opacity: `1 !important` }}
                  className="main"
                >
                  <img src={Main} alt="" />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={1} xl={1} />
          <Grid item xl={3} md={3} sx={{ color: palette.text.primary }}>
            <Box>
              <Box textAlign={{ md: 'left', xs: 'center' }}>
                <SubtitleText color={palette.warning.main}>
                  integrations
                </SubtitleText>
              </Box>
              <Typography
                mt={11}
                variant="h3"
                fontSize={{ md: '48px', xs: '36px' }}
                textAlign={{ md: 'left', xs: 'center' }}
              >
                Endless Integrations
              </Typography>
              <Typography
                variant="body2"
                mt={6}
                textAlign={{ md: 'left', xs: 'center' }}
              >
                We’ve started with ASAC, and we are looking to integrate our
                next 50 projects. If you want a central hub inside Atrium,
                submit your project today!
              </Typography>
              <Box mt={6}>
                <Button
                  className="medium active"
                  variant="primary"
                  sx={{
                    border: `1px solid ${palette.warning.main}`,
                    color: palette.warning.main,
                    width: { md: 'auto', xs: '100%' },
                  }}
                >
                  Submit your Project
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
