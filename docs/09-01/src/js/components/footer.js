var React = require('react');
var ReactDOM = require('react-dom');

var styleFooter = require('../../css/footer.css');

export default class FooterComponent extends React.Component{

    render(){
        
        console.log(styleFooter);

        return (
            <footer className="smallFooterFontSize" className={styleFooter.miniFooterColor}>
                <h1>这是页面尾部的内容</h1>
            </footer>
        )
    }
}