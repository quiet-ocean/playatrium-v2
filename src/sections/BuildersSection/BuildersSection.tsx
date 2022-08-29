import { Box, Button } from '@mui/material'
import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import BuilderImage from '../../assets/images/builder.png'
import { palette } from '../../themes/AtriumTheme'
import { SubtitleText } from '../UpdatesSection'

import type { IBuilder } from './Builder'
import { Builder } from './Builder'

const builders: IBuilder[] = [
  {
    bio: 'He’s good with the numbers and shit, hisis motto is C.R.E.A.M. Overall chill dude tho. ',
    discordLink: '',
    name: 'snowstorm',
    pfp: BuilderImage,
    tags: ['finance guy', 'outdoors junkie'],
    title: 'cfo',
    twitterLink: '',
  },
  {
    bio: '',
    discordLink: '',
    name: '',
    pfp: '',
    tags: [''],
    title: '',
    twitterLink: '',
  },
  {
    bio: '',
    discordLink: '',
    name: '',
    pfp: '',
    tags: [''],
    title: '',
    twitterLink: '',
  },
]
export const BuildersSection = () => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    dots: false,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1024,
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
          initialSlide: 3,
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
    slidesToScroll: 1,
    slidesToShow: 5,
    speed: 2000,
  }

  const handleHover = (hover: boolean) => {
    if (sliderRef.current) {
      if (hover) sliderRef.current.slickPause()
      else sliderRef.current.slickPlay()
    } else {
    }
  }
  return (
    <Box id="team-section" py={{ md: 25, xs: 16 }}>
      <Box display="flex" justifyContent="center">
        <SubtitleText color={palette.error.main}>
          the grid builders
        </SubtitleText>
      </Box>
      <Box mt={{ md: 25, xs: 16 }}>
        <Slider {...settings} ref={sliderRef}>
          {new Array(10).fill(2).map((_, key: number) => (
            <Builder
              key={key}
              builder={builders[0]}
              handleHover={handleHover}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
