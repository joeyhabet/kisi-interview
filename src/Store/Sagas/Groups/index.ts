import { all, takeLatest } from 'redux-saga/effects'
import { GroupsAsyncActions } from 'Store/Actions/Groups'
import list from './list'

export default function* root() {
  const { FetchList } = GroupsAsyncActions
  yield all([
    takeLatest(FetchList.Types.REQUEST, list)
  ])
}