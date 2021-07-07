import * as types from '../../types/profile';
import { auth } from '../../constants';

export function signUpAction(newProfile: types.Profile): types.SignUpActionType {
  return {
    type: auth.SIGN_UP,
    payload: newProfile
  }
}

export function logInAction(profile: types.Profile): types.LogInActionType {
  return {
    type: auth.LOG_IN,
    payload: profile
  }
}

export function logOutAction(nullProfile: types.NullProfile): types.LogOutActionType {
  return {
    type: auth.LOG_OUT,
    payload: nullProfile
  }
}
