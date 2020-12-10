import {
    User
  } from "../../services/Authentication.service";
  import { Action } from "..";
  
  declare interface AuthenticationState {
    profile?: User
  }
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (
    state: AuthenticationState = {},
    action: Action
  ): AuthenticationState {
    switch (action.type) {
      case 'AUTHENTICATION_LOGIN':
        return { profile: action.payload }
  
      case 'AUTHETICATION_LOGOUT':
        return {}  
      
      default:
        return state
    }
  }