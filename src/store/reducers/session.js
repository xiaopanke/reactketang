
import * as types from '../action-types'
//
let initState={
  user:null,
  success:null,
  error:null
}
export default function (state=initState,action) {
  switch (action.type) {
    case types.SIGN_UP:
      var {success,error}=action.payload;
      return {
        ...state,
        success,
        error
      }
    case types.LOGIN:
      var {success,error,user}=action.payload;
      return {
        ...state,
        success,
        error,
        user
      }
    default:
    return state
  }
}
