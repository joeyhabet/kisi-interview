import { createSelector } from 'reselect'

export const getState = (state: any) => state.doors

export const getDoors = createSelector(
  getState,
  ({ list }) => list
)

export const getPlaceLocks = createSelector(
  getState,
  ({ placeLocks }) => placeLocks
)