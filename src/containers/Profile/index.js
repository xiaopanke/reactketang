import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
export default class Profile extends Component{
  render(){
    return (
      <div className="profile">
        <div className="profile_bg">
          <img src={require('../../images/profile.png')} />
          <Link to="/login">登陆</Link>
        </div>
      </div>
    )
  }
}
