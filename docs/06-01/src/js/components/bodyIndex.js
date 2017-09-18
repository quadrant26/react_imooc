var React = require('react');
var ReactDOM = require('react-dom');

export default class BodyIndexComponent extends React.Component{

    componentWillMount (){
        // language
        console.log('bodyIndex - componentWillMount');

    }

    componentDidMount () {
        console.log('bodyIndex - componentDidMount');
    }

    render() {

        var username = 'Parry';
        var bolInput = false;
        var html = 'IM&nbsp;Lesson'
        var html2 = 'IM\u0020Lesson'

        // 单行注释

        return (
            <div>
                <h2>这是页面主体内容</h2>
                <p>{ username == '' ? '用户还没有登录' : '用户名为：' + username }</p>
                <p>
                    <input type="button" value="默认按钮" disabled="{bolInput}" />
                    <input type="button" value={username} disabled={bolInput} />
                </p>
                {/* 多行注释 */}
                <p>{html}</p>
                <p>{html2}</p>
                <p dangerouslySetInnerHTML={{__html : html}}></p>
            </div>
        )
    }
}