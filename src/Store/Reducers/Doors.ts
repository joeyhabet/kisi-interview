import { DoorsAsyncActions } from 'Store/Actions/Doors'
import { values } from 'lodash'
import { createReducerFromActions } from 'Utils/store'

export default createReducerFromActions(...values(DoorsAsyncActions))