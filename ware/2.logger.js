import redux  from 'redux'
import {createStore,applyMiddleware} from 'redux'
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

let store=createStore(reducer,applyMiddleware(logger));

store.dispatch({type:'ADD'})
