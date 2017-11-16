import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'
export default class NavBar extends Component{
  render(){
    return (
      <div className="navbar">
        <i className="iconfont icon-fanhui"></i>
        {this.props.title}
      </div>
    )
  }
}
