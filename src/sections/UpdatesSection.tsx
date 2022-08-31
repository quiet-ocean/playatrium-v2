import { Box, Typography, styled, Grid } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'

// import { ReactComponent as Update1} from '../assets/images/update-1.svg'
// // import update2 from '../assets/images/update-2.svg'
// import update3 from '../assets/images/update-3.svg'
// // import update4 from '../assets/images/update-4.svg'
// // import update5 from '../assets/images/update-5.svg'
// // import update6 from '../assets/images/update-6.svg'

// // import { ReactComponent as UpdateOne } from '../assets/images/update-1.svg'
// import { ReactComponent as Update2 } from '../assets/images/update-4.svg'

// // import Update2 from '../assets/images/update-1.svg'
// // import Update1 from '../assets/images/update-4.svg'

import update1 from '../assets/images/update-1.png'
import update2 from '../assets/images/update-2.png'
import update3 from '../assets/images/update-3.png'
import update4 from '../assets/images/update-4.png'
import update5 from '../assets/images/update-5.png'
import update6 from '../assets/images/update-6.png'
import { palette } from '../themes/AtriumTheme'

export const SubtitleText = ({
  children,
  color,
}: {
  children: React.ReactNode
  color?: string
}) => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          border: `1px solid ${color}`,
          borderRadius: '100px',
          color: color,
          display: 'inline',
          padding: '6px 16px',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}
const UpdateItemWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  // height: `${
  //   (window.innerHeight || window.document.documentElement.clientHeight) -
  //   (200 + 100 + 22 + 40)
  // }px`,
}))
const UpdateItem = ({
  image,
  date,
  title,
  small,
}: {
  image: string
  date: string
  title: string
  small?: boolean
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      sx={{
        '&:hover': {
          color: palette.info.main,
        },
      }}
    >
      <Box
        sx={{
          '& svg': {
            height: '100%',
            width: '100%',
          },

          // height: {
          //   // lg: small ? `198px` : `534px`,
          //   // md: small ? `186px` : `534px`,
          //   md: small ? `198px` : `534px`,
          // }
          height: small ? `198px` : `534px`,
        }}
      >
        <img
          src={image}
          alt=""
          width="100%"
          height="100%"
          // height={small ? `20vh` : `50vh`}
          // height='100%'
        />
        {/* <Update1 /> */}
        {/* <UpdateOne /> */}
        {/* <UpdateTwo /> */}
        {/* <SvgIcon component={update3} /> */}
        {/* <SvgIcon component={Update2} />
        <SvgIcon component={Update1} /> */}
      </Box>
      <Typography variant="caption">{date}</Typography>
      <Typography
        variant={`${small ? 'h5' : 'h4'}`}
        sx={{
          fontSize: { lg: 24, md: 20 },
          height: small ? '75px' : '',
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export const UpdatesSection = () => {
  const items = [
    <UpdateItemWrapper>
      <UpdateItem
        image={update1}
        // image=''
        date={`JULY 9TH 2022`}
        title="Atrium 2.0 is coming next month, see what’s to come!"
      />
    </UpdateItemWrapper>,
    <UpdateItemWrapper>
      <UpdateItem
        image={update2}
        date="JULY 9TH 2022"
        title="New meeting points established for newbies"
        small
      />
      <UpdateItem
        image={update3}
        date="JULY 9TH 2022"
        title="ASAC becomes Atrium’s 1st project to reach 10k"
        small
      />
    </UpdateItemWrapper>,
    <UpdateItemWrapper>
      <UpdateItem
        image={update4}
        date={`JULY 9TH 2022`}
        title="Partnership with Near Big Brain allows for new features"
      />
    </UpdateItemWrapper>,
    <UpdateItemWrapper>
      <UpdateItem
        image={update5}
        date="JULY 9TH 2022"
        title="Haven DAO grows to the largest project on Atrium"
        small
      />
      <UpdateItem
        image={update6}
        date="JULY 9TH 2022"
        title="TAYC skins integrated, see what else is in store!"
        small
      />
    </UpdateItemWrapper>,
  ]
  const settings = {
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    dots: false,
    infinite: true,

    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 900,
        settings: {
          initialSlide: 2,
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          initialSlide: 1,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
    // pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 2000,
  }
  return (
    <Box py={{ md: 10, xs: 6 }} id="updates-section">
      <Grid container justifyContent="center">
        <Grid item lg={12} xl={10} width="100%">
          <Box mb={{ md: 12, xs: 6 }} width="100%">
            <Grid container width="100%">
              <Grid
                item
                sm={6}
                xs={12}
                width="100%"
                justifyContent={{ sm: 'start', xs: 'start' }}
              >
                <Box
                  display="flex"
                  justifyContent={{ sm: 'start', xs: 'start' }}
                  p={{ md: 0, xs: 4 }}
                >
                  <SubtitleText color={palette.info.main}>updates</SubtitleText>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box display={{ md: 'flex', xs: 'none' }} justifyContent="end">
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: '340px',
                      py: { sm: 0, xs: 3 },
                      textAlign: { sm: 'right', xs: 'center' },
                    }}
                  >
                    Stay updated on the most important updates about Atrium
                    through our{' '}
                    <a href="/#footer" style={{ color: palette.info.main }}>
                      newsletter
                    </a>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box gap={4} display={{ md: 'flex', xs: 'none' }}>
            {items.map((item: React.ReactNode, key: number) => (
              <Box key={key}>{item}</Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box display={{ md: 'none', xs: 'block' }}>
        <Slider {...settings}>
          {items.map((item: React.ReactNode, key: number) => (
            <Box p={4} key={key}>
              {item}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
