import * as types from '../action-types';
import {signUp} from '../../api/session'
export default{
  signUp(data){
    return dispatch=>{
      signUp(data).then((payload) => {
        dispatch({
          type:types.SIGN_UP,
          payload
        })
      })
    }
  }
}
