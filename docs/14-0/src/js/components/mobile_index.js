import React from 'react';
import ReactDom from 'react-dom';

// 导入header && footer 模块
import MobileHeaderComponent from './mobile-header';
import MobileFooterComponent from './mobile-footer';

export default class MobileIndexComponent extends React.Component{
    render(){
        return (
            <div>
                <MobileHeaderComponent/>
                <MobileFooterComponent/>
            </div>
        )
    }
}