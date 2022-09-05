import { Box, styled } from '@mui/material'

export const SIntegrationsContainer = styled(Box)(({ theme }) => ({
  '& div.endless-panel': {
    background: theme.palette.common.black,
    position: 'absolute',
    top: '100%',
  },
  '&.done div.endless-panel': {
    top: '0% !important',
  },
  height: '100%',
  overflow: 'hidden',
  paddingBottom: '56%',
  position: 'relative',
  width: '100%',
}))

export const IntegrationsContainer = ({
  children,
  done,
}: {
  children: React.ReactNode
  done: boolean
}) => {
  return (
    <SIntegrationsContainer
      className={`${done ? 'done' : ''}`}
      sx={
        {
          // '& div.endless-panel': {
          //   position: done ? 'static' : 'absolute',
          // top: done ? '0% !important' : '',
          // },
          // '& div.project-panel': {
          //   display: done ? 'none' : 'block',
          // },
        }
      }
    >
      {children}
    </SIntegrationsContainer>
  )
}
