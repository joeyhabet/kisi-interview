import { all, takeLatest } from 'redux-saga/effects'
import { DoorsAsyncActions } from 'Store/Actions/Doors'
import list from './list'
import remove from './delete'
import placeLocks from './placeLocks'
import create from './create'

export default function* doors() {
  const { FetchList, DeleteGroupLock, FetchPlaceLocks, CreateGroupLock } = DoorsAsyncActions
  yield all([
    takeLatest(FetchList.Types.REQUEST, list),
    takeLatest(DeleteGroupLock.Types.REQUEST, remove),
    takeLatest(FetchPlaceLocks.Types.REQUEST, placeLocks),
    takeLatest(CreateGroupLock.Types.REQUEST, create)
  ])
}