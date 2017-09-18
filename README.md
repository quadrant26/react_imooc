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

3. 生命周期

    