import React from 'react';

import { Modal, Button, Link, Form, Menu, Icon, Row, Col, Input, Checkbox, Tabs, message } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeaderComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }

    // 设置模态框是否显示
    setModalVisible (value){
        this.setState({modalVisible: value});
    }

    login (e){
        // console.log(e);
        this.setModalVisible (true);
    };

    // 提交
    handleSubmit (e){

        //页面开始向 API 进行提交数据
        e.preventDefault();

        var myFetchOptions = {
			method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        var url;
        
        // 判断是登录还是注册
        if( this.state.action == "login"){
            url = 'http://localhost:8866/react_imooc/login.php?g_username='+ formData.g_username +'&g_password=' + formData.g_password;
        }else{
            url = 'http://localhost:8866/react_imooc/reg.php?r_username='+ formData.r_username +'&r_password=' + formData.r_password  +'&r_confrimPassword=' + formData.r_confrimPassword ;
        };
        
        fetch(url)
        .then( res => res.json())
        .then( json => {
            if( json.code === 1){
                message.error(json.error_msg);
            }else{
                this.setModalVisible(false);
                this.setState({
                    userNickName : formData.g_username || formData.r_username,
                    hasLogined: true,
                    modalVisible: false
                });
            };
        });
    }

    // 登录还是注册弹出框显示
    callback (key){
        if( key == 1){
            this.setState({action: "login"});
        }else{
            this.setState({action: "register"});
        }
    }

    // 退出登录
    logout (){
        this.setState({
            userNickName : '',
            hasLogined: false
        })
    }

    render () {

        const { getFieldDecorator } = this.props.form;
        const usershow = this.state.hasLogined ?
            <Icon type="inbox" onClick={this.logout.bind(this)}/>
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>;

        return (
            <div id="mobileHeader">
                <header>
                    <img src="./src/images/logo.png" alt="logo" title="logo" />
                    <span>ReactNews</span>
                    {usershow}
            </header>
            <Modal title="用户中心" visible={this.state.modalVisible} onOk={() => this.setModalVisible(false)} onCancel={() => this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card" onChange={ this.callback.bind(this) }>
                        <TabPane tab="登录" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('g_username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input  prefix={<Icon type="user" style={{ fontSize: 13 }} />} required placeholder="请输入您的账号"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('g_password', {
                                        rules: [{ required: true, message: 'Please input your password!'}],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} required type="password" placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} required placeholder="请输入您的账号"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password', {
                                        rules: [{ required: true, message: 'Please input your password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} required type="password" placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confrimPassword', {
                                        rules: [{ required: true, message: 'Please input your confrimPassword!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} required type="password" placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default MobileHeaderComponent = Form.create({})(MobileHeaderComponent);