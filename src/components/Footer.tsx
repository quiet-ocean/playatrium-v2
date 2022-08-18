import {
  Box,
  Typography,
  Button,
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

const AtriumInput = () => {
  return (
    <FormControl sx={{ m: 1, width: '40%' }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        // value={values.weight}
        // onChange={handleChange('weight')}
        endAdornment={
          <InputAdornment position="end">
            <Button variant="primary" sx={{
              background: `${palette.warning.main} !important`,
              color: palette.text.secondary,
            }}>
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
          borderRadius: 0,
          padding: 4,
          background: 'rgba(242, 242, 242, 0.2)',
          border: 0,
        }}
      />
    </FormControl>
  )
}
export const Footer = () => {
  return (
    <Box p={5} sx={{ color: palette.text.primary }}>
      <Box
        sx={{
          '& > div, & > div > div': {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
        display="flex"
        flexDirection="column"
        gap={10}
        p={5}
      >
        <Box>
          <img src={logo100} alt="" />
        </Box>
        <Box gap={6}>
          <IconButton>
            <img src={discordIcon} alt="" />
          </IconButton>
          <IconButton>
            <img src={twitterIcon} alt="" />
          </IconButton>
          <IconButton>
            <img src={youtubeIcon} alt="" />
          </IconButton>
        </Box>
        <Box flexDirection="column" gap={6}>
          <Box>
            <Typography variant="h5" sx={{ fontSize: '16px' }}>
              Stay updated for the most important news about Atrium through our
              email.{' '}
            </Typography>
          </Box>
          <Box>
            <AtriumInput />
          </Box>
          <Box gap={6}>
            <Typography variant="caption">Privacy</Typography>
            <Typography variant="caption">Terms of Use</Typography>
            <Typography variant="caption">© Atrium 2022</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt={15}>
        <img src={atriumLogoType} alt="" />
      </Box>
    </Box>
  )
}
