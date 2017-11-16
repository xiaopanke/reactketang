import React,{Component} from 'react';
import './index.less'
export default class Message extends Component{
    render(){
        return (
          <div>
            {
              this.props.error&& <div className="error-info">{this.props.error}</div>
            }
            {
              this.props.success&& <div className="success-info">{this.props.success}</div>
            }
          </div>
        )
    }
}
