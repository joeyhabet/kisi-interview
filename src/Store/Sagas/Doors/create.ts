import { put, getContext } from 'redux-saga/effects'
import { DoorsAsyncActions } from 'Store/Actions/Doors'

function* create(action: { payload: { groupId: number, lockId: number }, type: string}) {
  const { CreateGroupLock: { Actions: { SUCCESS, FAILURE } } } = DoorsAsyncActions
  const { payload: { groupId, lockId } } = action
  
  try {
    // @ts-ignore
    const kisiClient = yield getContext('kisiClient')
    // @ts-ignore
    yield kisiClient.post('group_locks', { group_id: groupId, lock_id: lockId })
    
    yield put(SUCCESS())
  } catch (error) {
    yield put(FAILURE(error))
  }
}

export default create