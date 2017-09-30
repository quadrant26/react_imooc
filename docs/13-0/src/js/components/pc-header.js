import React from 'react';

// use antd 栅格系统
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import 'antd/dist/antd';

export default class PcHeaderComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            current : "top"
        }
    }

    render () {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4} className="logo">
                        <img src="./src/images/logo.png" alt="logo" title="logo" />
                        <span>React News</span>
                    </Col>
                    <Col span={12}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="social">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="domestic">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="entertainment">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="sports">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="military">
                                <Icon type="appstore" />军事
                            </Menu.Item>
                            <Menu.Item key="technology">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="finance">
                                <Icon type="appstore" />财经
                            </Menu.Item>
                            <Menu.Item key="fashion">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}