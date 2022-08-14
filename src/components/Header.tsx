import { Box } from '@mui/material'

import logoType from '../assets/logo-type.png'
import { palette } from '../themes/AtriumTheme'

import { Navbar } from './Navbar'
export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent={`space-between`}
      p="16px"
      sx={{
        background: palette.common.black,
        backgroundImage: 'url("../logo-36.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderBottom: `1px solid ${palette.primary.main}`
      }}
    >
      <Box py="8px">
        <img src={logoType} alt="" />
      </Box>
      <Navbar />
    </Box>
  )
}
