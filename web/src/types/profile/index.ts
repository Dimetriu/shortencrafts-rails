import { auth } from '../../constants';

export interface Profile {
  avatar?: string
  email: string
  username: string
  password: string
  passwordConfirmation: string
}

export interface NullProfile { profile: {} }

interface SignUp {
  type: typeof auth.SIGN_UP
  payload: Profile
}

interface LogIn {
  type: typeof auth.LOG_IN
  payload: Profile
}

interface LogOut {
  type: typeof auth.LOG_OUT
  payload: NullProfile
}

export type SignUpActionType = SignUp;
export type LogInActionType = LogIn;
export type LogOutActionType = LogOut;
