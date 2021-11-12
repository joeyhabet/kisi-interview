import { createSelector } from 'reselect'

export const getState = (state: any) => state.app

export const isAppReady = createSelector(
  getState,
  ({ isAppReady }) => isAppReady
)