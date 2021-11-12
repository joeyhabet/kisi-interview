import { createAsyncAction } from 'Utils/store'

export const FetchList = createAsyncAction("places", "fetchList", {
  SUCCESS: ['list']
})

export const PlacesAsyncActions = {
  FetchList
}