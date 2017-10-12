import React from 'react';
import ReactDOM from 'react-dom';

import IndexComponent from './index';

export default class Root extends React.Component{
    render(){
        return (
            <div>
                <IndexComponent />
            </div>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById("mainContainer")
)