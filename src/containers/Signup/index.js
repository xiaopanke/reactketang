import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import NavBar from '../../components/NavBar/index'
export default class Signup extends Component{
  render(){
    return (
      <div className="signup">
          <NavBar title="注册" />
          <div className="login-logo">
              <img src={require('../../images/profile.png')} />
          </div>
          <input type="text" placeholder="手机号" />
          <input type="text" placeholder="密码" />
          <input type="text" placeholder="密码" />
          <Link to='/login'>登陆</Link>
          <div className="loginbutton">注&nbsp;册</div>
      </div>
    )
  }
}
