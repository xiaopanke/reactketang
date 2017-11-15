//import {createStore} from 'redux'; //不支持node
let redux=require('redux') //支持node
let initState={num:0}

let reducer=(state=initState,action) => {
  switch (action.type) {
    case 'ADD':
      return {num:state.num+1}
      break;
    default:
      return state
  }
}

let store=redux.createStore(reducer);
//中间件的原理，重写dispatch,加入新的东西
let next=store.dispatch;
store.dispatch=function (action) {
  console.log(store.getState());
  next(action);
  console.log(store.getState());
}
store.dispatch({type:'ADD'})
