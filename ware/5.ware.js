import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

let initState={
  loading:'',//加载状态，默认为空，开始加载时变成加载中，加载完成后变成空
  data:'' //实际后台返回的数据，默认为空，加载完成后或者显示加载成功，或者显示加载失败
}
const FETCH_START='FETCH_START' //开始加载
const FETCH_SUCCESS='FETCH_SUCCESS' //加载 成功
const FETCH_ERROR='FETCH_ERROR' //加载失败
let reducer =(state=initState,action) => {
  switch (action.type) {
    case FETCH_START:
      return {loading:'加载中...',data:''}
    case FETCH_SUCCESS:
      return {loading:'',error:'',data:action.payload}
    case FETCH_ERROR:
      return {loading:'',data:'',error:action.payload}
      break;
    default:
      return state
  }
}
let store=createStore(reducer,applyMiddleware(thunk,logger))
class Panel extends React.Component{
  constructor(){
    super();

  }
  haha=() => {
    store.dispatch(function(dispatch) {
      store.dispatch({type:FETCH_START});
      setTimeout(function () {
        if(Math.random()>.5){
          dispatch({type:FETCH_SUCCESS,payload:'成功'})
        }else{
          dispatch({type:FETCH_ERROR,payload:'失败'})
        }
      },1000)
    })
  }
  componentDidMount(){
    store.subscribe(() => {
       this.setState({});
    })
  }
  render(){
    let {loading,data,error}=store.getState()
    return(
      <div>
        <p>
          {loading}
          {data}
          {error}
        </p>
        <button onClick={this.haha}>加载数据</button>
      </div>
    )
  }
}

ReactDOM.render(<Panel />,document.querySelector('#root'))
