var React = require('react');
var ReactDOM = require('react-dom');

import BodyChildComponent from './bodyChild';
import MixinLog from './mixin';
import ReactMixin from 'react-mixin';

import { Input, Select, Icon } from 'antd';

const defaultProps = {
    username : "这是一个默认的用户名"
}

const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 80 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com" style={{ width: 70 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
);

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
                <Input placeholder="Basic usage" />
                <br />
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
                </div>
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
