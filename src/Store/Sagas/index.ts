import { all, fork } from 'redux-saga/effects'
import signIn from './Auth'
import places from './Places'
import groups from './Groups'
import doors from './Doors'
import startup from './Startup'

const rootSaga = function* root() {
  yield all([
    fork(signIn),
    fork(places),
    fork(groups),
    fork(doors),
    fork(startup)
  ])
}

export default rootSaga