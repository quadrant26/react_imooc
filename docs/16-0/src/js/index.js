import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

// 导入 antd css
// import 'antd/dist/antd.css';

import MediaQuery from 'react-responsive';
import PcNewsDetailComponent from './components/pc_news_detail';
import MobileNewsDetailComponent from './components/mobile_news_detail';

// 导入header && footer 模块
import PCIndexComponent from './components/pc_index';
import MobileIndexComponent from './components/mobile_index';

// 用户中心
import PcUserCenterComponent from './components/pc-usercenter';
import MobileUserCenterComponent from './components/mobile-usercenter';

export default class IndexComponent extends React.Component{
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndexComponent}></Route>
                        <Route path="/details/:uniquekey" component={PcNewsDetailComponent}></Route>
                        <Route path="/usercenter" component={PcUserCenterComponent}></Route>
                    </Router>
                    {/* <PCIndexComponent></PCIndexComponent> */}
                </MediaQuery>

                <MediaQuery query='(max-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndexComponent}></Route>
                        <Route path="/details/:uniquekey" component={MobileNewsDetailComponent}></Route>
                        <Route path="/usercenter" component={MobileUserCenterComponent}></Route>
                    </Router>
                    {/* <MobileIndexComponent></MobileIndexComponent> */}
                </MediaQuery>
            </div>
        )
    }
}