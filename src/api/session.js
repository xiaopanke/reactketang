import {post} from './index';
export function signUp(data){
  return post('/signup',data)
}
export function login(data){
  return post('/login',data)
}
