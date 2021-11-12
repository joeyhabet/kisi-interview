import { AuthAsyncActions, RESET_CACHE } from 'Store/Actions/Auth'
import { values } from 'lodash'
import { createReducer, generateFieldsAndHandlers } from 'Utils/store'

const { initialState, handler } = generateFieldsAndHandlers(...values(AuthAsyncActions))

export default createReducer(initialState, {
  ...handler,
  [RESET_CACHE]: (state: any) => initialState
})