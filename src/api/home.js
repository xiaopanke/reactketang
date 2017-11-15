import {get} from './index.js'
export function fetchSliders(){
  return get('/sliders')
}

export function fetchLessons() {
  return get('/lessons')
}
