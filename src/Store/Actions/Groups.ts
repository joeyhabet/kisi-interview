import { createAsyncAction } from 'Utils/store'

export const FetchList = createAsyncAction("groups", "fetchList", {
  REQUEST: ['placeId', 'offset', 'limit'],
  SUCCESS: ['list']
})

export const GroupsAsyncActions = {
  FetchList
}