import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
const history = createHistory() //用来管理路由历史的
let middleware=routerMiddleware(history);
let store =createStore(reducer,applyMiddleware(thunk,promise,middleware,logger));
export default store;
