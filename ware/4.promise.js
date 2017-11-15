import redux  from 'redux'
import {createStore,applyMiddleware} from 'redux';
import promise from 'redux-promise'
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

let store=createStore(reducer,applyMiddleware(thunk,promise,logger));

let promiseTask=new Promise((resolve,reject) => {
  setTimeout(()=>{
    if(Math.random()>.5){
      resolve({type:'ADD'})
    }else{
      reject({type:'ADD'})
    }
  },2000)
})

store.dispatch(promiseTask)
