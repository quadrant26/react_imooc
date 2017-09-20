var React = require('react');
var ReactDOM = require('react-dom');

export default class FooterComponent extends React.Component{
    render(){
        return (
            <footer className="smallFooterFontSize">
                <h1>这是页面尾部的内容</h1>
            </footer>
        )
    }
}