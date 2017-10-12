import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;

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
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}