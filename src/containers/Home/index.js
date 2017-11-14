import React,{Component} from 'react';
import './index.less';
import HomeHeader from './HomeHeader/index'
export default class Home extends Component{
  render(){
    return (
      <div className="home">
        <HomeHeader />
      </div>
    )
  }
}
