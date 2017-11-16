import React,{Component} from 'react';
import './index.less'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
 class Profile extends Component{
  render(){
    return (
      <div className="profile">
        <div className="profile_bg">
          <img src={require('../../images/profile.png')} />

          <Link to="/login">{this.props.user ? this.props.user.username : '登陆'}</Link>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>state.session
)(Profile)
