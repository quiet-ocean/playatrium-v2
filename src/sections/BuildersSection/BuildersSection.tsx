import { Box } from '@mui/material'
import { useRef, useState, useMemo } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// import BuilderImage from '../../assets/images/builder.png'

import Crooks from '../../assets/images/builders/crooks.png'
import Devon from '../../assets/images/builders/devon.png'
import Hades from '../../assets/images/builders/hades.png'
import Jackson from '../../assets/images/builders/jackson.png'
import Josh from '../../assets/images/builders/josh.png'
import Raul from '../../assets/images/builders/raul.png'
import Snowstorm from '../../assets/images/builders/snowstorm.png'
import Swiftyyy from '../../assets/images/builders/swiftyyy.png'
import { SubtitleText } from '../../components'
import { palette } from '../../themes/AtriumTheme'

import { Builder } from './Builder'
import type { IBuilder } from './Builder'

const builders: IBuilder[] = [
  {
    bio: "Oversees and executes the company' financial strategies.",
    discordLink: '',
    name: 'snowstorm',
    pfp: Snowstorm,
    tags: ['finance guy', 'outdoors junkie'],
    title: 'Chief Financial Officer',
    twitterLink: '',
  },
  {
    bio: 'Determines the visual direction and design language of Atrium.',
    discordLink: '',
    name: 'Crooks',
    pfp: Crooks,
    tags: ['Illustrator', 'Right hand OP'],
    title: 'Art Director',
    twitterLink: '',
  },
  {
    bio: 'Leads brand management, marketing communications, market research and product marketing.',
    discordLink: '',
    name: 'Price of Pain',
    pfp: Devon,
    tags: ['Marketing Genius', 'Workaholic'],
    title: 'Chief Marketing Officer',
    twitterLink: '',
  },
  {
    bio: 'Visionary behind the Atrium platform who establishes company strategy and guildes the team to success.',
    discordLink: '',
    name: 'Hades',
    pfp: Hades,
    tags: ['Product God', 'Workaholic'],
    title: 'Chief Executive Officer',
    twitterLink: '',
  },
  {
    bio: 'Oversees and excutes all visual content including branding, website, and product interface.',
    discordLink: '',
    name: 'Maverick',
    pfp: Jackson,
    tags: ['Product God'],
    title: 'Chief Branding Officer',
    twitterLink: '',
  },
  {
    bio: "Spearheads the design of Atrium's pixel art metavers.",
    discordLink: '',
    name: 'Joshau',
    pfp: Josh,
    tags: ['Pixel Artist', 'Old Head'],
    title: 'Game Design Lead',
    twitterLink: '',
  },
  {
    bio: 'Leads the Atrium development team building a world-class gaming product.',
    discordLink: '',
    name: 'Raul',
    pfp: Raul,
    tags: ['C#/ Typescript', 'Rust'],
    title: 'Software Developer',
    twitterLink: '',
  },
  {
    bio: 'Graphic Designer for all things Atrium. Making things pretty on your eyes.',
    discordLink: '',
    name: 'Swiftyyy',
    pfp: Swiftyyy,
    tags: ['Colorbind Designer', 'Degenerate'],
    title: 'Graphic Designer',
    twitterLink: '',
  },
]
const defaultSpeed = 2000
export const BuildersSection = () => {
  const sliderRef = useRef<Slider>(null)
  const [speed, setSpeed] = useState(defaultSpeed)

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: 'linear',
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          initialSlide: 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          initialSlide: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToShow: 5,
    speed: 2000,
    touchMove: true,
  }

  const settingsMemo = useMemo(() => ({ ...settings, speed }), [speed])

  const handleHover = (hover: boolean) => {
    if (sliderRef.current) {
      if (hover) {
        setSpeed(100)
        sliderRef.current.slickPause()
      } else {
        setSpeed(defaultSpeed)
        sliderRef.current.slickPlay()
      }
    } else {
    }
  }
  return (
    <Box id="team-section" py={{ md: 25, xs: 16 }} height="100%">
      <Box display="flex" justifyContent="center">
        <SubtitleText color={palette.error.main}>
          the grid builders
        </SubtitleText>
      </Box>
      <Box mt={{ md: 20, xs: 16 }}>
        <Slider {...settingsMemo} ref={sliderRef}>
          {builders.map((item: IBuilder, key: number) => (
            <Builder key={key} builder={item} handleHover={handleHover} />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
