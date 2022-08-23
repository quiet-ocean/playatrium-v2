import { Box, Button, Typography, styled, Collapse } from '@mui/material'
import { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { palette } from '../../themes/AtriumTheme';

const BuilderContent = styled(Box)(({ theme }) => ({
  // '& > div': {
  //   height: '0px',
  //   transition: 'height 1s, opacity 1s',
  //   border: `1px solid red`,
  //   opacity: 0,
  //   '& > *': {
  //     // display: 'none',
  //     // opacity: 0,
  //     // transition: 'opacity 1s',
  //   }
  // },
  '& > .MuiTypography-root': {
    color: theme.palette.text.primary,
  },
  '&.hover': {
    background: theme.palette.common.white,
    '& > .MuiTypography-root': {
      color: theme.palette.common.black,
    },
  //   '& > div': {
  //     height: '100px',
  //     opacity: 1,
  //     // '& > *': {
  //       // display: 'flex',
  //       // opacity: 1,
  //     // }
  //   },
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '24px',
  transition: 'background 1s',  
  // height: '700px',
})) 
export interface IBuilder { 
  pfp: string
  title: string
  name: string
  tags: string[]
  bio: string
  twitterLink: string
  discordLink: string
  hover?: boolean
}
export const Builder = ({ builder, handleHover }: { builder: IBuilder, handleHover: AnyFunction }) => {
  const [hover, setHover] = useState(false)

  const _handleHover = (hover: boolean) => {
    setHover(hover)
    handleHover(hover)
  }
  return (
    <Box
      p={4}
      onMouseEnter={() => _handleHover(true)}
      onMouseLeave={() => _handleHover(false)}
      sx={{
        '&:hover': {
          opacity: 1,
        },
        opacity: 0.3,
        transition: 'opacity 1s',
      }}
    >
      <img src={builder.pfp} alt="" width="100%" />
      <BuilderContent className={hover ? 'hover' : ''}>
        <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>{builder.title}</Typography>
        <Typography variant="h4">{builder.name}</Typography>
        <Collapse in={hover}>
          <Box display="flex" gap={3}>
            {builder.tags.map((item: string, key: number) => (
              <Box>
                <Button
                  className="x-small"
                  key={key}
                  variant="rounded"
                  sx={{
                    border: `1px solid ${palette.text.secondary}`,
                    color: palette.text.secondary,
                    textTransform: 'capitalize !important',
                  }}
                >{item}</Button>
              </Box>
            ))}
          </Box>
          <Box mt={4}>
            <Typography variant="caption" sx={{ fontSize: '16px' }}>{builder.bio}</Typography>
          </Box>
          <Box mt={10} display="flex" gap={4}>
            <Button variant="primary" endIcon={<ArrowRightAltIcon />}>
              <a href='/#'>
                twitter
                
              </a>
            </Button>
            <Button variant="primary" endIcon={<ArrowRightAltIcon />}>
              <a href='/#'>
                discord
              </a>
            </Button>
          </Box>
        </Collapse>
      </BuilderContent>
    </Box>
  )
}