import { Box, styled } from '@mui/material'

export const IntegrationsContainer = styled(Box)(({ theme }) => ({
  '& div.endless-panel': {
    // background: theme.palette.common.black,
    position: 'absolute',
    top: '100%',
  },
  '& div.screen-panel': {
    '& > div': {
      background: theme.palette.common.black,
      height: '100%',
      width: '100%',
    },
    height: '100%',
    position: 'absolute',
    top: '100%',
    width: '100%',
  },
  '&.done div.endless-panel': {
    top: '0% !important',
  },
  '&.done div.project-panel': {
    visibility: 'hidden',
    '& img': {
      visibility: 'hidden',
      // display: 'none',
    }
  },
  height: '100%',
  overflow: 'hidden',
  paddingBottom: '56%',
  position: 'relative',
  width: '100%',
}))
