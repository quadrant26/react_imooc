import React from 'react';
import ReactDOM from 'react-dom';
// 导入 antd css
// import 'antd/dist/antd.css';

import MediaQuery from 'react-responsive';

// 导入header && footer 模块
import PcHeaderComponent from './components/pc-header';
import PcFooterComponent from './components/pc-footer';

import MobileHeaderComponent from './components/mobile-header';
import MobileFooterComponent from './components/mobile-footer';


export default class IndexComponent extends React.Component{
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PcHeaderComponent></PcHeaderComponent>
                    <PcFooterComponent></PcFooterComponent>
                </MediaQuery>

                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileHeaderComponent></MobileHeaderComponent>
                    <MobileFooterComponent></MobileFooterComponent>
                </MediaQuery>
            </div>
        )
    }
}