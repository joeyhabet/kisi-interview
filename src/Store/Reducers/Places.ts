import { PlacesAsyncActions } from 'Store/Actions/Places'
import { values } from 'lodash'
import { createReducerFromActions } from 'Utils/store'

export default createReducerFromActions(...values(PlacesAsyncActions))