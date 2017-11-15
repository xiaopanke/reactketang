import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

export default class Carousel extends React.Component {
    render() {
        let swipeoption={
          auto: 3000
        }
        console.log(this.props);
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

            </div>
        );
    }
}
