import { put, delay, select, getContext } from 'redux-saga/effects'
import { AppReady } from 'Store/Actions/App'
import { ResetCache } from 'Store/Actions/Auth'

export function * startup () {
  // @ts-ignore
  const kisiClient = yield getContext('kisiClient')
  yield delay(1)
  
  try {
    // @ts-ignore
    const auth = yield select(state => state.auth)
    if (!kisiClient || !auth || !auth.currentUser) {
      return
    }

    kisiClient.setLoginSecret(auth.currentUser.secret)

    // @ts-ignore
    yield kisiClient.get("/login")
  } catch (error) {
    if (kisiClient) {
      kisiClient.setLoginSecret(null)
    }
    yield put(ResetCache())
  } finally {
    yield put(AppReady())
  }
}

export default startup