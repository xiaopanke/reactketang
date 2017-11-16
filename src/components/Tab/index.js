import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Tab extends Component{
  componentDidMount(){
    this.props.validate()
  }
  render(){
    return (
      <nav className="tabs">
        <NavLink exact to="/">
          <i className="iconfont icon-xingqiu"></i>
          <span>首页</span>
        </NavLink>
        <NavLink to="/courses">
          <i className="iconfont icon-react"></i>
          <span>我的美女</span>
        </NavLink>
        <NavLink to="/profile">
          <i className="iconfont icon-xiaolian"></i>
          <span>个人中心</span>
        </NavLink>
      </nav>
    )
  }
}
export default connect(
  null,
  actions
)(Tab)
