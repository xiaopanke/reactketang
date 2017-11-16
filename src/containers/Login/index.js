import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import NavBar from '../../components/NavBar/index'
import Message from '../../components/Message/index'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Login extends Component{
  login=() => {
    let username=this.username.value;
    let password=this.password.value;
    if(username && password){
      this.props.login({username,password})
    }
  }
  render(){
    return (
      <div className="login">
          <NavBar title="登陆" />
          <div className="login-logo">
              <img src={require('../../images/profile.png')} />
          </div>
          <input ref={input=>this.username=input} type="text" placeholder="用户名" />
          <input ref={input=>this.password=input} type="text" placeholder="密码" />
          <Link to='/signup'>注册</Link>
          <div className="loginbutton"  onClick={this.login}>登&nbsp;陆</div>
          <Message {...this.props} />
      </div>
    )
  }
}
export default connect(
  state=>state.session,
  actions
)(Login)
