import React from 'react';

export default class MobileHeaderComponent extends React.Component{
    render () {
        fetch("http://localhost:8866/react_imooc/reg.php", {method : "GET", mode: 'cors',
        cache: 'default'})
        .then( res => {
            console.log(res)
            return res.json();
        } )
        .then( json => {
            console.log(json)
        });

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