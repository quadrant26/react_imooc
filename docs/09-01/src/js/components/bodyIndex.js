var React = require('react');
var ReactDOM = require('react-dom');

import BodyChildComponent from './bodyChild';
import MixinLog from './mixin';
import ReactMixin from 'react-mixin';

const defaultProps = {
    username : "这是一个默认的用户名"
}

export default class BodyIndexComponent extends React.Component{

    componentWillMount (){
        // language
        console.log('bodyIndex - componentWillMount');

    }

    componentDidMount () {
        console.log('bodyIndex - componentDidMount');
    }

    constructor(){
        super();
        this.state = { username : "Parry", age : 20};
    };

    changeUserInfo () {
        this.setState({age : 50});
        // 第一种方式
        var mySubmitButton = document.getElementById("submitButton");
        console.log(mySubmitButton);
        ReactDOM.findDOMNode(mySubmitButton).style.color = "red";

        // 第二种方式
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color = "green";

        MixinLog.log();

    }

    handleChildValueChange (event){
        this.setState({age : event.target.value});
    }

    render() {
        
        /*
        setTimeout(() => {
            this.setState({"username" : "king"})
        }, 2000);
        */

        return (
            <div>
                <h2>这是页面主体内容</h2>
                {/* <p>{this.state.username} {this.props.userid} {this.props.username}</p> */}
                <p>接收到父页面的属性：userid： {this.props.userid} username： {this.props.username}</p>
                <p>{this.state.age}</p>
                <input type="button" id="submitButton" ref="submitButton" value="提交" onClick={this.changeUserInfo.bind(this)} />

                <BodyChildComponent {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </div>
        )
    }
}

BodyIndexComponent.propTypes = {
    userid : React.PropTypes.number
}

BodyIndexComponent.defaultProps = defaultProps;

ReactMixin(BodyIndexComponent.prototype, MixinLog);
