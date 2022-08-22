import { Box, Button, styled } from '@mui/material'

import { palette } from '../themes/AtriumTheme'

export const SectionLink = styled('a')(({ theme }) => ({
  '&:hover': {
    color: '#FFF',
  },
  color: theme.palette.text.primary,
  textDecoration: 'none',
}))

const items = ['updates', 'overview', 'integrations', 'profiles', 'team']
export const Navbar = () => {
  return (
    <Box display={`flex`} gap={`12px`} p="4px">
      {items.map((item: string, key: number) => (
        <Box key={key}>
          <Button variant="primary">
            <SectionLink href={`#${item}-section`}>{item}</SectionLink>
          </Button>
        </Box>
      ))}
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
  )
}
