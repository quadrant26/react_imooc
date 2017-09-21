var React = require('react');
var ReactDOM = require('react-dom');

export default class ListComponent extends React.Component{
    render(){
        return (
            <div>
                <p>This List's page. ID: { this.props.params.uid }</p>
            </div>
        )
    }
}