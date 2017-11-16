import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import NavBar from '../../components/NavBar/index'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Signup extends Component{
  signUp=() => {
    let username=this.username.value;
    let password=this.password.value;
    if(username && password){
      this.props.signUp({username,password})
    }

  }
  render(){
    return (
      <div className="signup">
          <NavBar title="注册" />
          <div className="login-logo">
              <img src={require('../../images/profile.png')} />
          </div>
          <input ref={input=>this.username=input} type="text" placeholder="用户名" />
          <input ref={input=>this.password=input} type="text" placeholder="密码" />
          <Link to='/login'>登陆</Link>
          <div className="loginbutton" onClick={this.signUp}>注&nbsp;册</div>
          {
            this.props.error&& <div className="error-info">{this.props.error}</div>
          }
          {
            this.props.success&& <div className="success-info">{this.props.success}</div>
          }

      </div>
    )
  }
}
export default connect(
  state=>state.session,
  actions
)(Signup)
