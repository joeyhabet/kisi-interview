import { FETCH_GROUPS_LIMIT } from 'Constants/App'
import { put, getContext } from 'redux-saga/effects'
import { GroupsAsyncActions } from 'Store/Actions/Groups'

function* fetch(action: { payload: { placeId: number, offset: number, limit: number }, type: string}) {
  const { FetchList: { Actions: { SUCCESS, FAILURE } } } = GroupsAsyncActions
  const { payload: { placeId, offset = 0, limit = FETCH_GROUPS_LIMIT } } = action
  
  try {
    // @ts-ignore
    const kisiClient = yield getContext('kisiClient')
    // @ts-ignore
    const groups = yield kisiClient.get('groups', { place_id: placeId, offset, limit })
    
    yield put(SUCCESS(groups))
  } catch (error) {
    yield put(FAILURE(error))
  }
}

export default fetch