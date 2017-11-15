import redux  from 'redux'
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
let initState={num:0}
import logger from 'redux-logger';
let reducer=(state=initState,action) => {
  switch (action.type) {
    case 'ADD':
      return {num:state.num+1}
      break;
    default:
      return state
  }
}

let store=createStore(reducer,applyMiddleware(thunk,logger));

//logger 中间件是用来打印日志
//thunk中间件的使用可以让我们可以派发函数的action

store.dispatch(function (dispatch) {
  setTimeout(() => {
    dispatch({type:'ADD'})
  },3000)
})
