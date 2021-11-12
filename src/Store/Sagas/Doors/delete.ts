import { put, getContext } from 'redux-saga/effects'
import { DoorsAsyncActions } from 'Store/Actions/Doors'

function* fetch(action: { payload: { id: number }, type: string}) {
  const { DeleteGroupLock: { Actions: { SUCCESS, FAILURE } } } = DoorsAsyncActions
  const { payload: { id } } = action
  
  try {
    // @ts-ignore
    const kisiClient = yield getContext('kisiClient')
    // @ts-ignore
    yield kisiClient.delete(`group_locks/${id}`)
    
    yield put(SUCCESS())
  } catch (error) {
    yield put(FAILURE(error))
  }
}

export default fetch