import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getCurrentUser } from 'Store/Selectors/Auth'

const AppContainer: React.FC<{}> = ({
  children
}) => {
  const currentUser = useSelector(getCurrentUser)

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="div"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Home
          </Typography>
          <Typography
            component="div"
            variant="h6"
            color="inherit"
            noWrap
          >
            { currentUser?.user?.name }
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, px: 3 }}>
        {children}
      </Box>
    </Box>
  )
}

export default AppContainer