import React,{Component} from 'react';
import './index.less';
import HomeHeader from './HomeHeader/index';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import Slider from './Slider/index'
import Lessons from './Lessons/index'
class Home extends Component{
  componentDidMount(){
    //获取store里的轮播图数据
    this.props.getSliders();
    this.props.getLessons();
  }
  render(){
    return (
      <div className="home">
        <HomeHeader lesson={this.props.lesson} setLesson={this.props.setLesson} />
        <div className='main-content'>
          <Slider sliders={this.props.sliders} />
          <Lessons lessons={this.props.lessons} />
        </div>
      </div>
    )
  }
}
export default connect(
  state=>state.home, //{lesson:0,slider:[]}
  actions
)(Home);
