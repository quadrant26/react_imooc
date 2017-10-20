import React from 'react';

import { Row, Col } from 'antd';

export default class MobileFooterComponent extends React.Component{
    render () {
        return (
            <div className="footer">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="copyright">
                        &copy;&nbsp; 2017 ReactNews All Right LICENSE, Inc.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}