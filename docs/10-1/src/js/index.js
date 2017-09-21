import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import BodyIndexComponent from './components/bodyIndex';

export default class Index extends React.Component{
    render (){
        return (
            <div>
                <HeaderComponent/>
                <BodyIndexComponent userid={123456} username={"king"} />
                <div>
                    {this.props.children}
                </div>
                <FooterComponent />
            </div>
        )
    }
}