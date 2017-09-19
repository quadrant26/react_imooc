var React = require('react');
var ReactDOM = require('react-dom');

export default class BodyChildComponent extends React.Component {
    render (){
        return (
            <div>
                <p>子页面输入： <input type="text" onChange={this.props.handleChildValueChange} /></p>
                <p>子元素接收到的数据 {this.props.userid} { this.props.username}</p>           
            </div>
        )
    }
}