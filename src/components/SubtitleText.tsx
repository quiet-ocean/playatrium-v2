import { Box, Typography } from '@mui/material'

export const SubtitleText = ({
  children,
  color,
}: {
  children: React.ReactNode
  color?: string
}) => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          border: `1px solid ${color}`,
          borderRadius: '100px',
          color: color,
          display: 'inline',
          padding: '6px 16px',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}
