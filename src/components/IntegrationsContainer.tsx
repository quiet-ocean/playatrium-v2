import { Box, styled } from '@mui/material'

export const IntegrationsContainer = styled(Box)(({ theme }) => ({
  '& div.endless-panel': {
    position: 'absolute',
    top: "100%",
    background: theme.palette.common.black,
  },
  height: '100%',
  paddingBottom: '56%',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}))

