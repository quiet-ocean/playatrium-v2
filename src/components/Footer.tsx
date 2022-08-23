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

import atriumLogoType from '../assets/images/atrium-logo-large.png'
import discordIcon from '../assets/images/discord-icon.png'
import logo100 from '../assets/images/logo-100.png'
import twitterIcon from '../assets/images/twitter-icon.png'
import youtubeIcon from '../assets/images/youtube-icon.png'
import { palette } from '../themes/AtriumTheme'

const icons = [discordIcon, twitterIcon, youtubeIcon]

const AtriumInput = () => {
  return (
    <FormControl sx={{ m: 1, width: '40%' }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        // value={values.weight}
        // onChange={handleChange('weight')}
        endAdornment={
          <InputAdornment position="end">
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
        }}
        sx={{
          '& input': {
            p: 0,
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
  return (
    <Box sx={{ color: palette.text.primary }} py={5}>
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
                  <br />news about Atrium through our email.{' '}
                </Typography>
              </Box>
              <Box>
                <AtriumInput />
              </Box>
              <Box gap={6} color={palette.text.disabled}>
                <Typography variant="caption">Privacy</Typography>
                <Typography variant="caption">Terms of Use</Typography>
                <Typography variant="caption">© Atrium 2022</Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={15}>
            <img src={atriumLogoType} alt="" width="100%" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}