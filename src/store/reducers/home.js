
import * as types from '../action-types'
//每个页面对应一个reducer
let initState={
  lesson:0 ,//当前课程的ID
  sliders:[],
  lessons:{
    loading:'',//加载状态  加载中
    hasMore:true,//后面是否有更多
    list:[]
  }
}
export default function (state=initState,action) {
  switch (action.type) {
    case types.SEL_LESSON:
      return {
        ...state,
        lesson:action.payload.id
      }
    case types.FETCH_SLIDERS:
      return {
        ...state,
        sliders:action.payload.sliders
      }
    case types.FETCH_LESSONS:
      return {
        ...state,
        lessons:{
          ...state.lessons,
          loading:'加载中'
        }
      }
    case types.FETCH_LESSONS_FINISH:
      return {
        ...state,
        lessons:{
          ...state.lessons,
          loading:'',
          hasMore:action.payload.hasMore,//后面是否有更多
          list:[...state.lessons.list,...action.payload.list]
        }
      }
    default:
    return state
  }
}
