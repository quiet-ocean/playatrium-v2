import { Box } from '@mui/material'

import logoType from '../assets/images/logo-type.png'
import { palette } from '../themes/AtriumTheme'

import { Navbar } from './Navbar'
export const Header = () => {
  return (
    <Box
      className="header"
      display="flex"
      // justifyContent={`space-between`}
      p="16px"
      sx={{
        background: palette.common.black,
        borderBottom: `1px solid ${palette.primary.main}`,
      }}
    >
      <Box py="8px" pl={{ xl: 30, lg: 0, md: 0 }} width="100%">
        <a href="/#">
          <img src={logoType} alt="" />
        </a>
      </Box>
      <Navbar />
    </Box>
  )
}
