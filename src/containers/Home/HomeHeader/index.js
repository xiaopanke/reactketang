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
  getmenulist=() =>(
    <CSSTransition timeout={500} classNames="fade">
      <ul className="menu-list" onClick={(event)=>{
        this.props.setLesson(event.target.dataset.id);
        this.setState({isShow:false})
      }}>
        <li className={this.props.lesson=='1' ? 'active' : ''} data-id="1">大美女</li>
        <li  className={this.props.lesson=='2' ? 'active' : ''} data-id="2">小美女</li>
        <li  className={this.props.lesson=='3' ? 'active' : ''} data-id="3">大大美女</li>
        <li  className={this.props.lesson=='4' ? 'active' : ''} data-id="4">大小美女</li>
      </ul>
      </CSSTransition>
  )
  render(){
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
          this.state.isShow ? this.getmenulist() : null
        }
        </TransitionGroup>
      </div>
    )
  }
}
