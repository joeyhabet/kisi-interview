import { put, getContext } from 'redux-saga/effects'
import { AuthAsyncActions } from 'Store/Actions/Auth'

function* signIn(action: { payload: { email: string, password: string }, type: string}) {
  const { SignIn: { Actions: { SUCCESS, FAILURE } } } = AuthAsyncActions
  const { payload: { email, password } } = action
  
  try {
    // @ts-ignore
    const kisiClient = yield getContext('kisiClient')
    // @ts-ignore
    const login = yield kisiClient.signIn(email, password)
    const auth = {
      secret: login.secret,
      user: login.user
    }
    
    yield put(SUCCESS(auth))
  } catch (error) {
    yield put(FAILURE(error))
  }
}

export default signIn