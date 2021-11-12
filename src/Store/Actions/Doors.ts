import { createAsyncAction } from 'Utils/store'

export const FetchList = createAsyncAction("doors", "fetchList", {
  REQUEST: ['groupId', 'offset', 'limit'],
  SUCCESS: ['list']
})

export const FetchPlaceLocks = createAsyncAction('doors', 'fetchPlaceLocks', {
  REQUEST: ['placeId', 'keyword'],
  SUCCESS: ['placeLocks']
})

export const CreateGroupLock = createAsyncAction('doors', 'createGroupLock', {
  REQUEST: ['groupId', 'lockId']
})

export const DeleteGroupLock = createAsyncAction('doors', 'deleteGroupLock', {
  REQUEST: ['id']
})

export const DoorsAsyncActions = {
  FetchList,
  DeleteGroupLock,
  FetchPlaceLocks,
  CreateGroupLock
}