import { createSelector } from 'reselect'

export const getState = (state: any) => state.groups

export const getGroups = createSelector(
  getState,
  ({ list }) => list
)