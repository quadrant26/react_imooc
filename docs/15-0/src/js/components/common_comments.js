import React from 'react';
import { Row, Col, Form, Input, Button, notification } from 'antd';
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
            this.setState = {
                comments : json
            }
            
            console.log(this.setState);
        })
    }

    handleSubmit (e){
        e.preventDefault();
        var myFetchOptions = { 
            method : "GET"
        }
        var _this =this;
        var formdata = this.props.form.getFieldsValue();
        console.log(formdata);
        
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
        .then(response => response.json())
        .then(json => {
            _this.componentDidMount();
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
        console.log( this.state );
        const { comments } = this.state;
        const commentList = comments.length
            ?
            comments.map((commentItem, index) => {
                return (
                    <Card key={index} title={commentItem.title} extra={<a href="#">发布于 {commentItem.datetime} </a>}>
                        <p>{comment.Comments}</p>
                    </Card>
                )
            }) 
            : '没有任何评论！';
        
        console.log(comments);
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
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