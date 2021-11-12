import { createSelector } from 'reselect'

export const getState = (state: any) => state.auth

export const getCurrentUser = createSelector(
  getState,
  ({ currentUser }) => currentUser
)

export const isAuthenticated = createSelector(
  getCurrentUser,
  currentUser => !!currentUser
)