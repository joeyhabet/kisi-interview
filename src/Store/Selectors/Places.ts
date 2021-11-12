import { createSelector } from 'reselect'

export const getState = (state: any) => state.places

export const getPlaces = createSelector(
  getState,
  ({ list }) => list
)