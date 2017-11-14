import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

export default class Carousel extends React.Component {
    render() {
        let swipeoption={
          auto: 3000
        }
        return (
            <div className="carousel-wrapper">
              <ReactSwipe className="carousel" swipeOptions={swipeoption}>
                  <div>panda 1</div>
                  <div>panda 2</div>
                  <div>panda 3</div>
              </ReactSwipe>
            </div>
        );
    }
}
