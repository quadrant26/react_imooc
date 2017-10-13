import React from 'react';
import ReactDOM from 'react-dom';
// 导入 antd css
// import 'antd/dist/antd.css';

import MediaQuery from 'react-responsive';

// 导入header && footer 模块
import PCIndexComponent from './components/pc_index';
import MobileIndexComponent from './components/mobile_index';

export default class IndexComponent extends React.Component{
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PCIndexComponent></PCIndexComponent>
                </MediaQuery>

                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndexComponent></MobileIndexComponent>
                </MediaQuery>
            </div>
        )
    }
}