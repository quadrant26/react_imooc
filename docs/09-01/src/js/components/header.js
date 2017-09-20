import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            minHeader : false
        }
    }

    switchHeader (){
        this.setState({ 
            minHeader: !this.state.minHeader 
        });
    }

    render() {
        const styleComponentHeader = {
            header : {
                backgroundColor: "#333333",
                color: "#fff",
                paddingTop : (this.state.minHeader) ? '3px' : "15px",
                paddingBottom :  (this.state.minHeader) ? '3px' : "15px"
            }
        }
        return (
            <header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        )
    }
}