import React,{Component} from 'react';
import './index.less';
import HomeHeader from './HomeHeader/index';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import Slider from './Slider/index'
class Home extends Component{
  render(){
    return (
      <div className="home">
        <HomeHeader lesson={this.props.lesson} setLesson={this.props.setLesson} />
        <div className='main-content'>
          <Slider />
        </div>
      </div>
    )
  }
}
export default connect(
  state=>state.home,
  actions
)(Home);
