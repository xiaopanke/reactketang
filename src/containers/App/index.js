import React,{Component} from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './index.less';
import Home from '../Home/index';
import Courses from '../Courses/index';
import Profile from '../Profile/index';
import Login from '../Login/index';
import Signup from '../Signup/index';
import Tab from '../../components/Tab/index'
import createHistory from 'history/createHashHistory'
const history = createHistory() //用来管理路由历史的
import {ConnectedRouter} from 'react-router-redux' //连接后的路由容器 连接的是路由容器和仓库(store)
/*
1.改app.js用ConnectedRouter 替换掉Router
2.改store 使用Router中间件
3.改reducer 添加 routerReducer
*/
export default class App extends Component{
  render(){
    return (
      <ConnectedRouter history={history}>
        <div>
          <Tab />
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/signup" component={Signup} /> */}
        </div>
      </ConnectedRouter>
    )
  }
}
