import { Box, styled } from '@mui/material'

export const SIntegrationsContainer = styled(Box)(({ theme }) => ({
  '& div.endless-panel': {
    position: 'absolute',
    top: "100%",
    background: theme.palette.common.black,
  },
  '&.done div.endless-panel': {
    top: '0% !important',
  },
  height: '100%',
  paddingBottom: '56%',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}))


export const IntegrationsContainer = ({ children, done}: { children: React.ReactNode, done: boolean }) => {
  return (
    <SIntegrationsContainer
      className={`${done ? 'done' : ''}`}
      sx={{
        // '& div.endless-panel': {
        //   position: done ? 'static' : 'absolute',
          // top: done ? '0% !important' : '',
        // },
        // '& div.project-panel': {
        //   display: done ? 'none' : 'block',
        // },
      }}
    >
      {children}
    </SIntegrationsContainer>
  )
}