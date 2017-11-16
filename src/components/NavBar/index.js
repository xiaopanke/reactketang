import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'
export default class NavBar extends Component{
  goback=() => {
    console.log(this.props.match);
  }
  render(){
    return (
      <div className="navbar">
        <i className="iconfont icon-fanhui" onClick={this.goback}></i>
        {this.props.title}
      </div>
    )
  }
}
