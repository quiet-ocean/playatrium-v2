import { Box, Button } from '@mui/material'

import { palette } from '../themes/AtriumTheme'

import CrossIcon from '../assets/images/logo-36.png'
import { ResponsiveMenuContainer } from './MobileAppBar'

const items = ['updates', 'overview', 'integrations', 'profiles', 'team']
export const Navbar = () => {
  return (
    <Box display={`flex`}  p="4px" width="100%" justifyContent="space-between">
      <Box sx={{ width: 36, height: 36 }}>
        <a href="/#">
          <img src={CrossIcon} alt="" width="100%" height="100%"/>  
        </a>
      </Box>
      <Box display="flex" gap={`12px`}>
        <ResponsiveMenuContainer>
          {items.map((item: string, key: number) => (
            <Box key={key}>
              <Button variant="primary">
                <a href={`#${item}-section`}>{item}</a>
              </Button>
            </Box>
          ))}
        </ResponsiveMenuContainer>
        
        <Box>
          <Button
            variant="primary"
            sx={{
              background: palette.warning.main,
              color: palette.text.secondary,
            }}
          >
            join discord
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
