import { Box, Grid, Typography, Button } from '@mui/material'
import { useRef } from 'react'

// import type { PlayState } from '../../App'
import Main from '../../assets/images/integrations/main.png'
import { SubtitleText } from '../../components'
import { palette } from '../../themes/AtriumTheme'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import Img1 from '../../assets/images/integrations/1.png'
// import Img2 from '../../assets/images/integrations/2.png'
// import Img3 from '../../assets/images/integrations/3.png'
// import Img4 from '../../assets/images/integrations/4.png'
// import Img5 from '../../assets/images/integrations/5.png'
// import Img6 from '../../assets/images/integrations/6.png'

export const IntegrationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <Box id="integrations-section" ref={sectionRef} height="100%">
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Grid container justifyContent="center" columns={{ lg: 10, xl: 12 }}>
          <Grid item xl={6} md={4} xs={12}>
            <Box
              px={{ md: 25, xs: 0 }}
              sx={{
                '& img': {
                  maxHeight: { md: 300, xs: 150 },
                },
              }}
            >
              {/* <img
              src={EndlessGif}
              alt=""
              style={{ display: animate ? 'block' : 'none', margin: 'auto' }}
            />
            <img
              src={EndlessImage}
              alt=""
              style={{ display: !animate ? 'block' : 'none', margin: 'auto' }}
            />
             */}
              <Box p={12}>
                <img src={Main} alt="" />
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
