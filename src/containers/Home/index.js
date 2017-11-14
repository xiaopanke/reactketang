import React,{Component} from 'react';
import './index.less';
import HomeHeader from './HomeHeader/index';
import {connect} from 'react-redux';
import actions from '../../store/actions/home'
class Home extends Component{
  render(){
    return (
      <div className="home">
        <HomeHeader lesson={this.props.lesson} setLesson={this.props.setLesson} />
      </div>
    )
  }
}
export default connect(
  state=>state.home,
  actions
)(Home);
