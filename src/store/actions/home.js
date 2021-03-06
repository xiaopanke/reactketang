import * as types from '../action-types';
import {fetchSliders,fetchLessons} from '../../api/home'
export default{
  setLesson(id){
    return {
      type:types.SEL_LESSON,
      payload:{
        id
      }
    }
  },
  //获取轮播图
  getSliders(){
    return dispatch=>{
      fetchSliders().then((sliders) => {
        dispatch({
          type:types.FETCH_SLIDERS,
          payload:{sliders}
        })
      })
    }

  },
  //获取后台数据
  getLessons(){
    return (dispatch,getState)=>{
      let {loading,hasMore,offset,limit}=getState().home.lessons;
      if(!loading && hasMore){
        dispatch({
          type:types.FETCH_LESSONS
        })
        dispatch({
         type:types.FETCH_LESSONS_FINISH,
         payload:fetchLessons(offset,limit)
       });
      }
    }
  },
  refresh(){
    return (dispatch,getState)=>{
      let {loading,hasMore,offset,limit}=getState().home.lessons;
      if(!loading){
        dispatch({
          type:types.FETCH_LESSONS
        })
        dispatch({
         type:types.FETCH_LESSONS_REFRESH,
         //payload:fetchLessons(0,offset+limit)
         payload:fetchLessons(0,limit)
       });
      }
    }
  }
}
