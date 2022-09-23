import type { BoxProps } from '@mui/material'
import {
  Box,
  Grid,
  Typography,
  Button,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useEffect, useRef, useState, useCallback } from 'react'

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

const imgs = [Img1, Img2, Img3, Img4, Img5, Img6]
interface ImgBoxProps extends BoxProps {
  large?: boolean
}
const rotateDeg = 6.46
const pie = 3.141592

const ImgBox = styled(Box)<ImgBoxProps>(({ theme, large }) => ({
  '& .hover': {
    opacity: 1,
  },
  '& > img': {
    height: '100%',
    width: '100%',
  },
  // border: `1px solid red`,
  opacity: 0.1,
  position: 'absolute',
  transition: 'all 1s',
  // width: { md: `${large ? 160 : 96}`, xs: `${large ? 84 : 58}` },
  [theme.breakpoints.up('md')]: {
    height: large ? 160 : 96,
    width: large ? 160 : 96,
  },
  [theme.breakpoints.down('md')]: {
    height: large ? 80 : 60,
    width: large ? 80 : 60,
  },
}))

export const IntegrationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [imgBoxClass, setImgBoxClass] = useState('')
  const [sectionStyle, setSectionStyle] = useState({ opacity: 0 })
  // const [startPoint, setStartPoint] = useState<Point>({ x: 0, y: 0 })
  // const [rectSize, setRectSize] = useState<Point>({ x: 0, y: 0 })

  let observer = useIntersectionObserver(sectionRef, {})
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    if (observer?.isIntersecting) {
      displaySection()
    } else {
      hideSection()
    }
  }, [observer])
  // useEffect(() => {
  //   handleResize()
  // }, [])
  // const handleResize = () => {
  //   const rect = sectionRef.current?.querySelector('.main')?.getBoundingClientRect()
  //   // console.log(rect);
  //   // setStartPoint({ x: -200, y: -200 })
  //   setStartPoint({ x: 0, y: 200 })
  //   setRectSize({ x: 300, y: 300 })
  // }
  // const getDegree = (rad: number) => {
  //   return (rad / pie) * 180
  // }
  const getPosition = useCallback(
    (i: number) => {
      const index = i % 3
      const type = Math.floor(i / 3)
      // console.log(index, type)

      const imgSize = type === 0 ? (isMobile ? 96 : 160) : isMobile ? 60 : 80
      const primaryAngle = type === 0 ? -15 : 40
      const alpha = (primaryAngle / 180) * pie
      let x = 0
      let y = 0
      const l = type === 0 ? (isMobile ? 100 : 180) : isMobile ? 100 : 220
      const rectSize = isMobile ? 180 : 300
      // let x = startPoint.x
      // let y = startPoint.y

      // const l = Math.sqrt(x * x + y * y)

      y = Math.cos(((index * 2) / 3) * pie + alpha) * l
      x = Math.sin(((index * 2) / 3) * pie + alpha) * l
      // if (index !== 0) {
      //   const l = Math.sqrt(x * x + y * y)
      //   // const a = getDegree(Math.atan(y / x))
      //   const alpha = Math.atan(y / x)

      //   console.log(l, alpha)

      //   const beta = (2 / 3) * pie * index - alpha
      //   x = Math.pow(-1, index) * l * Math.cos(beta)
      //   y = Math.pow(-1, index + 1) * l * Math.sin(beta)
      // }

      const left = x + rectSize / 2 - imgSize / 2
      const top = y + rectSize / 2 - imgSize / 2

      // console.log(startPoint.x, left, top)
      return {
        left,
        top,
      }
    },
    [isMobile]
  )

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
      py={{ md: 0, xs: 10 }}
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
                  maxHeight: { md: 300, xs: 180 },
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
                {imgs.map((item: string, key: number) => (
                  <ImgBox {...getPosition(key)} large={key < 3} bgcolor="#FFF">
                    <img src={item} alt="" />
                  </ImgBox>
                ))}
                <Box
                  className="main"
                  width={{ md: 300, xs: 180 }}
                  height={{ md: 300, xs: 180 }}
                  visibility="hidden"
                >
                  <img src={Main} alt="" width="100%" height="100%" />
                </Box>
                <Box
                  position="absolute"
                  top={0}
                  sx={{ opacity: `1 !important` }}
                  width={{ md: 300, xs: 180 }}
                  height={{ md: 300, xs: 180 }}
                  className="main"
                >
                  <img src={Main} alt="" width="100%" height="100%" />
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
