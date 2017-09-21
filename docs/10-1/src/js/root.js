import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Index from './index';
import ListComponent from './components/list';
import DetailComponent from './components/detail';

console.log(ListComponent);

export default class Root extends React.Component{
    render (){
        return (
            <Router history={hashHistory}>

                <Route component={Index} path="/">
                    <Route component={DetailComponent} path="detail"></Route>
                </Route>

                <Route component={ListComponent} path='list/:uid'></Route>

            </Router>
        )
    }
}

ReactDOM.render(
    <Root/>,
    document.getElementById('example')
)