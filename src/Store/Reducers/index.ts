import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './Auth'
import app from './App'
import places from './Places'
import groups from './Groups'
import doors from './Doors'

const authPersistConfig = {
  key: 'KISI-AUTH',
  storage: storage,
  whitelist: ['currentUser']
}

export default combineReducers({
  app,
  auth: persistReducer(authPersistConfig, auth),
  places,
  groups,
  doors
})