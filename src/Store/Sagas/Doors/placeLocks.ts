import { put, getContext } from 'redux-saga/effects'
import { DoorsAsyncActions } from 'Store/Actions/Doors'

function* fetch(action: { payload: { placeId: number, keyword: string }, type: string}) {
  const { FetchPlaceLocks: { Actions: { SUCCESS, FAILURE } } } = DoorsAsyncActions
  const { payload: { placeId, keyword } } = action
  
  try {
    // @ts-ignore
    const kisiClient = yield getContext('kisiClient')
    // @ts-ignore
    const doors = yield kisiClient.get('locks', { place_id: placeId, query: keyword })
    
    yield put(SUCCESS(doors))
  } catch (error) {
    yield put(FAILURE(error))
  }
}

export default fetch