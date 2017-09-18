var React = require('react');
var ReactDOM = require('react-dom');

import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import BodyIndexComponent from './components/bodyIndex';

class Index extends React.Component{
    render (){
        
        // var headerComponent;
        // if ( true ){
        //     headerComponent = <HeaderLoginComponent />;
        // }else{
        //     headerComponent = <HeaderComponent />;
        // };

        var headerComponent = <HeaderComponent/>;
        
        return (
            <div>
                {headerComponent}
                <BodyIndexComponent />
                <FooterComponent />
            </div>
            
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('example')
)