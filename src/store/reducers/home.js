
import * as types from '../action-types'
//每个页面对应一个reducer
let initState={
  lesson:0 ,//当前课程的ID
  sliders:[]
}
export default function (state=initState,action) {
  switch (action.type) {
    case types.SEL_LESSON:
      return {
        ...state,
        lesson:action.payload.id
      }
    case types.FEATCH_SLIDERS:
      console.log(12345);
      return {
        ...state,
        sliders:action.payload.sliders
      }
    default:
    return state
  }
}
