# react_imooc
react project and demo

1. Node

    配置 淘宝 镜像

        npm install -g cnpm--registry=https://registry.npm.taobao.org

    配置 react 环境

        react ^15.3.2
        react-dom       ^15.3.2
        babel-preset-react  ^6.11.1
        babelify            ^7.3.0

    webpack 热加载

2. 组件

    导入模块

        import React from 'react';
        import ReactDOM from 'react-dom';

    导出组件

        export default class ComponentName extends React.Component {
            render (){
                return (
                    <header>content</header>
                )
            }
        }

    使用

        var React = require('react');
        var ReactDOM = require('react-dom');
        
        import ComponentName from path;
        
        class Index　extends React.Component {
            render (){
                return (
                    <ComponentName />
                )
            }
        }

        ||

        var ComponentName = <ComponentName />
        render (){
            return (
                {ComponentName}
            )
        }

        ReactDOM.render(<Index/>, document.getElementById('example'));

    JSX 表达式

        { username == '' ? '用户还没有登录' : '用户名为：' + username }

        定义属性 <input type="button" value={username} disabled={bolInput} />

        var html = 'IM&nbsp;Lesson'
        var html2 = 'IM\u0020Lesson' // unicode 转码      
        <p dangerouslySetInnerHTML={{__html : html}}></p>  // 可能存在 XSS 攻击

    注释

        单行注释 //
        多行注释        {/**/}

    state 属性

        constructor(){
            super();
            this.state = { username : "Parry"};
        };

        render (){
            return (
                ...
                <p>{this.state.username}</p>
                ...
            )
        }

    props 属性

        传递参数 <BodyIndexComponent userid={123456} username={"nick"} />
        
        接收参数 {this.props.username}

    双向数据绑定

        parent:

            handleChildValueChange (event){
                this.setState({age : event.target.value});
            }

            <BodyChildComponent handleChildValueChange={this.handleChildValueChange.bind(this)} />

        child:

            <input type="text" onChange={this.props.handleChildValueChange} />

    props.types

        ComponentName.propTypes = {
            attributeName : React.PropTypes.number
        }

    props.default

        ComponentName.defaultProps = ConstDefaultProps

    传递多个props

        <p {...this.props}></p>
            等价于
        <p userid={this.props.userid} username={this.props.username}></p>

    改变DOM元素的操作

        <input type="button" id="submitButton" ref="submitButton" value="提交" onClick={this.changeUserInfo.bind(this)} />

        // one

            var mySubmitButton = document.getElementById("submitButton");
            ReactDOM.findDOMNode(mySubmitButton).style.color = "red";

        // two => refs ( 不要滥用 会自动销毁对子组件的引用 不要在 render 或 render 之前对 refs 进行调用 )
        
            console.log(this.refs.submitButton);
            this.refs.submitButton.style.color = "green";

    mixins

        具有类似的生命周期

        ES6 下 需要安装 react-mixin

        导入 react-mixin

            import ReactMixin from 'react-mixin'

        导入 mixin 文件

            import MixinLog from './mixin';

        使用

            ReactMixin(ComponentName.prototype, MixinLog)

        在事件中调用 mixins 的方法

            MixinLog.method();



    