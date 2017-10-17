import React from 'react';

import MobileIndexComponent from './mobile-header';
import MobileFooterComponent from './mobile-footer';

// import antd
import { Row, Col, Card } from 'antd'

export default class MobileUserCenterComponent extends React.Component {
    render (){
        return (
            <div>
                <MobileIndexComponent></MobileIndexComponent>
                <Row>
                    <Col span={24}></Col>
                </Row>
                <MobileFooterComponent></MobileFooterComponent>
            </div>
        )
    }
}