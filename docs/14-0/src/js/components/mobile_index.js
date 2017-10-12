import React from 'react';
import ReactDom from 'react-dom';

// 导入header && footer 模块
import MobileHeaderComponent from './mobile-header';
import MobileFooterComponent from './mobile-footer';

import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndexComponent extends React.Component{
    render(){
        return (
            <div>
                <MobileHeaderComponent/>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="appstore" />头条</span>} key="1">头条新闻</TabPane>
                    <TabPane tab={<span><Icon type="appstore" />社会</span>} key="2">社会新闻</TabPane>
                    <TabPane tab={<span><Icon type="appstore" />国内</span>} key="3">国内新闻</TabPane>
                    <TabPane tab={<span><Icon type="appstore" />娱乐</span>} key="4">娱乐新闻</TabPane>
                    <TabPane tab={<span><Icon type="appstore" />体育</span>} key="5">体育新闻</TabPane>
                </Tabs>
                <MobileFooterComponent/>
            </div>
        )
    }
}