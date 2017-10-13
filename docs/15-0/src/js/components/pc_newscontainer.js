import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsBlockComponent from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

export default class PcNewContainComponent extends React.Component{
    render (){
        const setting = {
            dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
        }

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...setting}>
                                    <div><img src="./src/images/carousel_1.jpg"/></div>
                                    <div><img src="./src/images/carousel_2.jpg"/></div>
                                    <div><img src="./src/images/carousel_3.jpg"/></div>
                                    <div><img src="./src/images/carousel_4.jpg"/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock  count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"></PCNewsImageBlock>
                        </div>
                        <Tabs defaultActiveKey="1" className="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlockComponent type="top" count={20} width="100%" bordered="false" ></PCNewsBlockComponent>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlockComponent type="guoji" count={20} width="100%" bordered="false" ></PCNewsBlockComponent>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}