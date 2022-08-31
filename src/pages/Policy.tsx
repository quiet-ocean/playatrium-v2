import { Box, Typography, Grid } from '@mui/material'

import { GridBgContainer } from '../components'

export const Policy = () => {
  return (
    <Box
      mt={16}
      sx={{
        '& .grid-bg': {
          '&::before': {
            left: `0%`,
            width: `100%`,
          },
          position: 'relative',
        },
        // minHeight: '1000px',
      }}
    >
      <GridBgContainer>
        <Typography variant="h1">Privacy Policy</Typography>
      </GridBgContainer>
    </Box>
  )
}
