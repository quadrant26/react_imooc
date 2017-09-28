import React from 'react';

export default class MobileHeaderComponent extends React.Component{
    render () {
        return (
            <div id="mobileHeader">
                <header>
                <img src="./src/images/logo.png" alt="logo" title="logo" />
                <span>ReactNews</span> 
            </header>
            </div>
        )
    }
}