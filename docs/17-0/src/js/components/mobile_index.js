import React from 'react';
import ReactDom from 'react-dom';

// 导入header && footer 模块
import MobileHeaderComponent from './mobile-header';
import MobileFooterComponent from './mobile-footer';
import MobileListComponent from './mobile_list';

import MobileListPullRefreshComponent from './mobile_list_pull_refresh';

import { Tabs, Icon, Carousel } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndexComponent extends React.Component{
    render(){
        const settings = {
            dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
        }
        return (
            <div>
                <MobileHeaderComponent/>
                <Tabs>
                    <TabPane tab={<span><Icon type="appstore" />头条</span>} key="1">
                        <div className="carousel">
							<Carousel {...settings}>
								<div><img src="./src/images/carousel_1.jpg"/></div>
								<div><img src="./src/images/carousel_2.jpg"/></div>
								<div><img src="./src/images/carousel_3.jpg"/></div>
								<div><img src="./src/images/carousel_4.jpg"/></div>
							</Carousel>
						</div>
                        <MobileListComponent type="top" count={20}></MobileListComponent>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore" />社会</span>} key="2">
                        <MobileListComponent type="shehui" count={20}></MobileListComponent>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore" />国内</span>} key="3">
                        <MobileListPullRefreshComponent type="guonei" count={20}></MobileListPullRefreshComponent>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore" />娱乐</span>} key="4">
                        <MobileListComponent type="yule" count={20}></MobileListComponent>
                    </TabPane>
                    <TabPane tab={<span><Icon type="appstore" />体育</span>} key="5">
                        <MobileListComponent type="tiyu" count={20}></MobileListComponent>
                    </TabPane>
                </Tabs>
                <MobileFooterComponent/>
            </div>
        )
    }
}