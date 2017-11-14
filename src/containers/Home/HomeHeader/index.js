import React,{Component} from 'react';
import './index.less';
import logo from '../../../images/logo.png';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
export default class HomeHeader extends Component{
  constructor(){
    super();
    this.state={
      isShow:false //是否显示菜单
    }
  }
  render(){
    let menulist=<CSSTransition timeout={500} classNames="fade">
      <ul className="menu-list">
        <li>node课程培训</li>
        <li>html课程培训</li>
        <li>视频课程培训</li>
        <li>node课程培训</li>
      </ul>
      </CSSTransition>
    return (
      <div className="homeheader">
        <div className="home-logo">
          <img src={logo} />
          <div onClick={()=>this.setState({isShow:!this.state.isShow})}>
            {
              this.state.isShow ?  <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-uilist"></i>
            }
          </div>
        </div>
        <TransitionGroup>
        {
          this.state.isShow ? menulist : null
        }
        </TransitionGroup>
      </div>
    )
  }
}
