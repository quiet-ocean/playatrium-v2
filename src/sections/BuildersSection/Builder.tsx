import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Button, Typography, styled, Collapse } from '@mui/material'
import { useState } from 'react'

import { palette } from '../../themes/AtriumTheme'

const BuilderContent = styled(Box)(({ theme }) => ({
  '& > .MuiTypography-root': {
    color: theme.palette.text.primary,
  },
  '&.hover': {
    '& > .MuiTypography-root': {
      color: theme.palette.common.black,
    },
    background: theme.palette.common.white,
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  transition: 'background 0.5s',
  [theme.breakpoints.up('md')]: {
    padding: '24px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px',
  },
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
export const Builder = ({
  builder,
  handleHover,
}: {
  builder: IBuilder
  handleHover: AnyFunction
}) => {
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
        <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>
          {builder.title}
        </Typography>
        <Typography variant="h4">{builder.name}</Typography>
        <Collapse in={hover}>
          <Box display="flex" gap={3}>
            {builder.tags.map((item: string, key: number) => (
              <Box key={key}>
                <Button
                  className="x-small"
                  variant="rounded"
                  sx={{
                    border: `1px solid ${palette.text.secondary}`,
                    color: palette.text.secondary,
                    textTransform: 'capitalize !important',
                  }}
                >
                  {item}
                </Button>
              </Box>
            ))}
          </Box>
          <Box mt={4}>
            <Typography variant="caption" sx={{ fontSize: '16px' }}>
              {builder.bio}
            </Typography>
          </Box>
          <Box mt={10} display="flex" gap={4}>
            <Button variant="primary" endIcon={<ArrowRightAltIcon />}>
              <a href="/#">twitter</a>
            </Button>
            <Button variant="primary" endIcon={<ArrowRightAltIcon />}>
              <a href="/#">discord</a>
            </Button>
          </Box>
        </Collapse>
      </BuilderContent>
    </Box>
  )
}
