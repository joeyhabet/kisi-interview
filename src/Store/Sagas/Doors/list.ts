import { FETCH_DOORS_LIMIT } from 'Constants/App'
import { put, getContext } from 'redux-saga/effects'
import { DoorsAsyncActions } from 'Store/Actions/Doors'

function* fetch(action: { payload: { groupId: number, offset: number, limit: number }, type: string}) {
  const { FetchList: { Actions: { SUCCESS, FAILURE } } } = DoorsAsyncActions
  const { payload: { groupId, offset = 0, limit = FETCH_DOORS_LIMIT } } = action
  
  try {
    // @ts-ignore
    const kisiClient = yield getContext('kisiClient')
    // @ts-ignore
    const doors = yield kisiClient.get('group_locks', { group_id: groupId, offset, limit })
    
    yield put(SUCCESS(doors))
  } catch (error) {
    yield put(FAILURE(error))
  }
}

export default fetch