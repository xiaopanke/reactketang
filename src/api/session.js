import {post,get} from './index';
export function signUp(data){
  return post('/signup',data)
}
export function login(data){
  return post('/login',data)
}

export function validate(){
  return get('/validate')
}
