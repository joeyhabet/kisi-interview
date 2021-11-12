import { createAsyncAction } from 'Utils/store'

export const RESET_CACHE = 'auth.RESET'

export const ResetCache = () => ({
  type: RESET_CACHE
})

export const SignIn = createAsyncAction("auth", "signIn", {
  REQUEST: ['email', 'password'],
  SUCCESS: ['currentUser']
})

export const SignOut = createAsyncAction("auth", "signOut", {})

export const AuthAsyncActions = {
  SignIn,
  SignOut
}