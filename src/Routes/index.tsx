import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import SignIn from './SignIn'
import createStore from 'Store'
import { isAppReady } from 'Store/Selectors/App'
import { CircularProgress, Container } from '@mui/material'
import { AppRoute } from 'Constants/Route'
import SignInRoute from 'Components/SignInRoute'
import PrivateRoute from 'Components/PrivateRoute'
import Places from './Places'
import Groups from './Groups'
import Group from './Group'

const { store, persistor } = createStore()
const theme = createTheme()

const App = () => {
  const appReady = useSelector(isAppReady)

  if (!appReady) {
    return (
      <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress/>
      </Container>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path={AppRoute.ROOT}
          element={
            <SignInRoute>
                <SignIn/>
            </SignInRoute>
          }
        />
        <Route path={AppRoute.SIGNIN}
          element={
            <SignInRoute>
                <SignIn/>
            </SignInRoute>
          }
        />
        <Route path={AppRoute.PLACES}
          element={
            <PrivateRoute>
                <Places/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.GROUPS}
          element={
            <PrivateRoute>
                <Groups/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.GROUP}
          element={
            <PrivateRoute>
                <Group/>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default AppWrapper