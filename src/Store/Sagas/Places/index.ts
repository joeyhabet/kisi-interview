import { all, takeLatest } from 'redux-saga/effects'
import { PlacesAsyncActions } from 'Store/Actions/Places'
import list from './list'

export default function* root() {
  const { FetchList } = PlacesAsyncActions
  yield all([
    takeLatest(FetchList.Types.REQUEST, list)
  ])
}