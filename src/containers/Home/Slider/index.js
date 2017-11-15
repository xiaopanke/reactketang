import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import './index.less'

export default class Carousel extends React.Component {
  constructor(){
    super();
    this.state={
      shownum:0 //是否显示菜单
    }
  }
    render() {
        let swipeoption={
          auto: 1000,
          continuous:true,
          callback:(index)=>{
              this.setState({
                shownum:index
              })
          }
        }
        return (
            <div className="carousel-wrapper">
              {
                this.props.sliders.length >0 ? <ReactSwipe className="carousel" swipeOptions={swipeoption}>
                    {
                      this.props.sliders.map((item,index) => (
                        <div key={index}><img src={item} /></div>
                      ))
                    }
                </ReactSwipe> : null
              }
              <div className="dots">
                {
                  this.props.sliders.length >0 ? (this.props.sliders.map((item,index) => (
                    <span key={index} className={index==this.state.shownum ? 'active' : ''}></span>
                  ))) : null
                }
              </div>
            </div>
        );
    }
}
