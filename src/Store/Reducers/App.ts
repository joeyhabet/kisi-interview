import { createReducer } from "Utils/store"
import { APP_READY } from 'Store/Actions/App'

const initialState = {
  isAppReady: false
}

export default createReducer(initialState, {
  [APP_READY]: (state: any) => ({
    ...state,
    isAppReady: true
  })
})