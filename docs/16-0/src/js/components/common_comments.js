import React from 'react';
import { Row, Col, Form, Input, Button, notification, Card } from 'antd';
const FormItem = Form.Item;

class CommonCommentComponent extends React.Component{
    constructor (){
        super();
        this.state = {
            comments : ''
        };
    }

    componentDidMount (){
        var myFetchOptions = {
            method : "GET"
        }
        
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
        .then(response => response.json())
        .then(json => {
            this.setState({comments : json})
        })
    }

    handleSubmit         (e){
        e.preventDefault();
        var myFetchOptions = { 
            method : "GET"
        }
        
        var formdata = this.props.form.getFieldsValue();
        
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.componentDidMount();
        })
    }

    addUserCollection (){
        var myFetchOptions = { 
            method : "GET"
        }
        
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
        .then(response => response.json())
        .then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});
    }
    
    render (){
        let { getFieldDecorator } = this.props.form;
        const { comments } = this.state;
        console.log(comments);
        const commentList = comments.length
            ?
            comments.map((commentItem, index) => {
                return (
                    <Card key={index} title={commentItem.UserName} extra={<a href="#">发布于 {commentItem.datetime} </a>}>
                        <p>{commentItem.Comments}</p>
                    </Card>
                )
            }) 
            : '没有任何评论！';
        
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark', {
                                    rules: [{ required: true, message: 'Please input your comments!' }],
                                })(
                                    
                                    <Input type="textarea" placeholder="输入您的评论" required ></Input>
                                )}
                                {/* <Input type="textarea" placeholder="输入您的评论" {...getFieldDecorator('remark', {initialValue: ''})}></Input> */}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                            &nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommonCommentComponent = Form.create()(CommonCommentComponent);