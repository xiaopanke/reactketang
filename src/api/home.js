import {get} from './index.js'
export function fetchSliders(){
  return get('/sliders')
}

export function fetchLessons(offset,limit) {
  return get(`/lessons?offset=${offset}&limit=${limit}`)
}
