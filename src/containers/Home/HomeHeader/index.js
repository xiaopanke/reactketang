import React,{Component} from 'react';
import './index.less';
import logo from '../../../images/logo.png';
export default class HomeHeader extends Component{
  render(){
    return (
      <div className="homeheader">
        <div className="home-logo">
          <img src={logo} />
          <div>
            <i className="iconfont icon-uilist"></i>
            <i className="iconfont icon-guanbi"></i>
          </div>
        </div>
        <ul className="menu-list">
          <li>node课程培训</li>
          <li>html课程培训</li>
          <li>视频课程培训</li>
          <li>node课程培训</li>
        </ul>
      </div>
    )
  }
}
