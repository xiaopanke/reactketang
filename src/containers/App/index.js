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
export default class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <Tab />
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    )
  }
}
