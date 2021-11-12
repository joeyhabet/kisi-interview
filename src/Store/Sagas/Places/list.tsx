import { put, getContext } from 'redux-saga/effects'
import { PlacesAsyncActions } from 'Store/Actions/Places'

function* fetch() {
  const { FetchList: { Actions: { SUCCESS, FAILURE } } } = PlacesAsyncActions
  
  try {
    // @ts-ignore
    const kisiClient = yield getContext('kisiClient')
    // @ts-ignore
    const places = yield kisiClient.get('places')
    
    yield put(SUCCESS(places))
  } catch (error) {
    yield put(FAILURE(error))
  }
}

export default fetch