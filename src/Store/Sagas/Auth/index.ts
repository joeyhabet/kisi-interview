import { all, takeLatest } from 'redux-saga/effects'
import { AuthAsyncActions } from 'Store/Actions/Auth'
import signIn from './signIn'

export default function* root() {
  const { SignIn } = AuthAsyncActions
  yield all([
    takeLatest(SignIn.Types.REQUEST, signIn)
  ])
}