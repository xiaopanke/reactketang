import React,{Component} from 'react';
import './index.less';
export default class Lessons extends Component{

  render(){
    return (
      <div className="lessons">
        <div>
          <i className="iconfont icon-book"></i>
          <span>全部美女</span>
        </div>
        {
          this.props.lessons.list.map((item,index)=>(
            <div key={index} className="lesson">
              <img src={item.url}  />
              <p>{item.title}</p>
              <p className="price">{item.price}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
