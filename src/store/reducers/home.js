
import * as types from '../action-types'
//每个页面对应一个reducer
let initState={
  lesson:0 //当前课程的ID
}
export default function (state=initState,action) {
  switch (action.type) {
    case types.SEL_LESSON:
      return {
        lesson:action.payload.id
      }
      break;
    default:
    return state
  }
}
