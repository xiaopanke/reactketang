import * as types from '../action-types';
export default{
  setLesson(id){
    return {
      type:types.SEL_LESSON,
      payload:{
        id
      }
    }
  }
}
