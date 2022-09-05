import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo100 from '../assets/images/cross-icon-100.svg'
import discordIcon from '../assets/images/discord-icon.svg'
import atriumLogoType from '../assets/images/logo-type-large.svg'
import twitterIcon from '../assets/images/twitter-icon.svg'
import youtubeIcon from '../assets/images/youtube-icon.png'
// import atriumLogoType from '../assets/images/logo-type-large.png'
// import discordIcon from '../assets/images/discord-icon.png'
// import logo100 from '../assets/images/cross-icon-100.png'
// import twitterIcon from '../assets/images/twitter-icon.png'
// import youtubeIcon from '../assets/images/youtube-icon.png'
import { palette } from '../themes/AtriumTheme'
import { isValidEmail } from '../utils'

const icons = [discordIcon, twitterIcon, youtubeIcon]

const AtriumInput = ({
  value,
  onChange,
}: {
  value: string | number
  onChange: AnyFunction
}) => {
  return (
    <FormControl
      sx={{ m: 1, width: { md: '40%', xs: '100%' } }}
      variant="outlined"
    >
      <OutlinedInput
        id="outlined-adornment-weight"
        value={value}
        onChange={onChange}
        // value={values.weight}
        // onChange={handleChange('weight')}
        endAdornment={
          <InputAdornment
            position="end"
            sx={{ display: { md: 'flex', xs: 'none' } }}
          >
            <Button
              variant="primary"
              sx={{
                background: `${palette.warning.main} !important`,
                color: palette.text.secondary,
              }}
            >
              join
            </Button>
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
          placeholder: 'Email',
        }}
        sx={{
          '& input': {
            p: 0,
            textAlign: { md: 'left', xs: 'center' },
          },
          background: 'rgba(242, 242, 242, 0.2)',
          border: 0,
          borderRadius: 0,
          padding: 4,
        }}
      />
    </FormControl>
  )
}
export const Footer = () => {
  const [email, setEmail] = useState('')

  // useEffect(() => {
  //   console.log(isValidEmail(email))
  // }, [email])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _email = e.target.value
    setEmail(_email)
  }
  const handleJoin = () => {
    if (isValidEmail(email)) {
      // JOIN
    }
  }
  return (
    <Box sx={{ color: palette.text.primary }} py={5} id="footer" zIndex={100}>
      <Grid container justifyContent="center" columns={{ lg: 10, xl: 12 }}>
        <Grid item lg={10} xl={10}>
          <Box
            sx={{
              '& > div, & > div > div': {
                display: 'flex',
                justifyContent: 'center',
              },
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              p: 5,
            }}
          >
            <Box>
              <img src={logo100} alt="" />
            </Box>
            <Box gap={6}>
              {icons.map((item: string, key: number) => (
                <IconButton key={key}>
                  <img src={item} alt="" />
                </IconButton>
              ))}
            </Box>
            <Box flexDirection="column" gap={6}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '16px',
                    lineHeight: '120%',
                    textAlign: 'center',
                    textTransform: 'none',
                  }}
                >
                  Stay updated for the most important
                  <br />
                  news about Atrium through our email.{' '}
                </Typography>
              </Box>
              <Box>
                <AtriumInput value={email} onChange={handleChange} />
              </Box>
              <Box display={{ md: 'none !important', xs: 'block !important' }}>
                <Button
                  variant="primary"
                  color="warning"
                  sx={{
                    fontSize: '24px',
                    padding: '16px 24px',
                    width: { md: 'auto', xs: '100%' },
                  }}
                  onClick={handleJoin}
                >
                  sign up
                </Button>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={{ xs: 6 }}>
            <Box
              gap={6}
              color={palette.text.disabled}
              display="flex"
              justifyContent={{ md: 'center', xs: 'space-between' }}
              order={{ md: 1, xs: 2 }}
              sx={{
                '& .MuiTypography-root': {
                  zIndex: 10000,
                },
              }}
            >
              <Typography variant="caption">
                <Link to="/policy" style={{ color: palette.text.disabled }}>
                  Privacy
                </Link>
              </Typography>
              <Typography variant="caption">Terms of Use</Typography>
              <Typography variant="caption">© Atrium 2022</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              mt={15}
              order={{ md: 2, xs: 1 }}
            >
              <img src={atriumLogoType} alt="" width="100%" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
