import { Box } from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BuilderImage from '../../assets/images/builder-1.png'
import { Builder, IBuilder } from './Builder';

const builders: IBuilder[] = [
  {
    pfp: BuilderImage,
    title: 'cfo',
    name: 'snowstorm', 
    tags: ['finance guy', 'outdoors junkie'],
    bio: 'He’s good with the numbers and shit, hisis motto is C.R.E.A.M. Overall chill dude tho. ',
    twitterLink: '',
    discordLink: '',
  },
  {
    pfp: '',
    title: '',
    name: '', 
    tags: [''],
    bio: '',
    twitterLink: '',
    discordLink: '',
  },
  {
    pfp: '',
    title: '',
    name: '', 
    tags: [''],
    bio: '',
    twitterLink: '',
    discordLink: '',
  }
]
export const BuildersSection = () => {
  const sliderRef = useRef<Slider>(null)
  
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ],
  }

  const handleHover = (hover: boolean) => {
    if (sliderRef.current) {
      if (hover) sliderRef.current.slickPause()
      else sliderRef.current.slickPlay() 
    } else {

    }
  }
  return (
    <Box id="team-section" py={25}>
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
  )
}
