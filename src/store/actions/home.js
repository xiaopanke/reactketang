import * as types from '../action-types';
import {fetchSliders} from '../../api/home'
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
          type:types.FEATCH_SLIDERS,
          payload:{sliders}
        })
      })
    }

  }
}
