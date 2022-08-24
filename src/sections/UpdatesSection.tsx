import { Box, Typography, Button, styled, Grid } from '@mui/material'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import update1 from '../assets/images/update-1.png'
import update3 from '../assets/images/update-3.png'
import update5 from '../assets/images/update-5.png'
import update6 from '../assets/images/update-6.png'
import update7 from '../assets/images/update-7.png'
import update8 from '../assets/images/update-8.png'
import { palette } from '../themes/AtriumTheme'
import React from 'react'

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
    <Box display="flex" flexDirection="column" gap={4}>
      <Box
        sx={{
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
      </Box>
      <Typography variant="caption">{date}</Typography>
      <Typography
        variant={`${small ? 'h5' : 'h4'}`}
        sx={{
          height: small ? '75px' : '',
          fontSize: { md: 20, lg: 24 }
        }}
      >{title}</Typography>
    </Box>
  )
}

export const UpdatesSection = () => {
  const items = [
      <UpdateItemWrapper>
        <UpdateItem
          image={update1}
          date={`JULY 9TH 2022`}
          title="Atrium 2.0 is coming next month, see what’s to come!"
        />
      </UpdateItemWrapper>,
      <UpdateItemWrapper>
        <UpdateItem
          image={update5}
          date="JULY 9TH 2022"
          title="New meeting points established for newbies"
          small
        />
        <UpdateItem
          image={update6}
          date="JULY 9TH 2022"
          title="ASAC becomes Atrium’s 1st project to reach 10k"
          small
        />
      </UpdateItemWrapper>,
      <UpdateItemWrapper>
        <UpdateItem
          image={update3}
          date={`JULY 9TH 2022`}
          title="Partnership with Near Big Brain allows for new features"
        />
      </UpdateItemWrapper>,
      <UpdateItemWrapper>
        <UpdateItem
          image={update7}
          date="JULY 9TH 2022"
          title="Haven DAO grows to the largest project on Atrium"
          small
        />
        <UpdateItem
          image={update8}
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
    // pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 2000,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  }
  return (
    <Box py={10} id="updates-section">
      <Grid container justifyContent="center">
        <Grid item lg={12} xl={10}>
          <Box mb={20}>
            <Button
              variant="rounded"
              sx={{
                border: `1px solid ${palette.info.main}`,
                color: palette.info.main,
              }}
            >
              updates
            </Button>
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
            <Box p={4} key={key}>{item}</Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
