import { GroupsAsyncActions } from 'Store/Actions/Groups'
import { values } from 'lodash'
import { createReducerFromActions } from 'Utils/store'

export default createReducerFromActions(...values(GroupsAsyncActions))