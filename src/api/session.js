import {post} from './index';
export function signUp(data){
  return post('/signup',data)
}
