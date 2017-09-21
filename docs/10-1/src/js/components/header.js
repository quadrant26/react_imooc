import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

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
            // onClick={this.switchHeader.bind(this)}
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部</h1>
                <ul>
                    <li><Link to={`/`}>首页</Link></li>
                    <li><Link to="/list/123">列表</Link></li>
                    <li><Link to="/detail">详情</Link></li>
                </ul>
            </header>
        )
    }
}