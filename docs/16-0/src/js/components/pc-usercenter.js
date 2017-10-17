import React from 'react';

// header and footer
import PCIndexComponent from './pc-header';
import PcFooterComponent from './pc-footer';

// import antd
import { Row, Col, Card, Tabs, Upload, Icon, Button, Modal } from 'antd';
const TabPane = Tabs.TabPane;

export default class PcUserCenterComponent extends React.Component {

    constructor (){
        super();
        this.state = {
            previewImage : '',
            previewVisible : false,
            usercollection : '',
            usercomments : ''
        }
    }

    handleCancel (e){
        this.setState({
            previewVisible : false
        })
    }

    componentDidMount(){
        var myFetchOptions = {
            method : "GET"
        };

        // 查看我的评论
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
        .then( response => response.json())
        .then( json => {
            this.setState({
                usercollection: json
            })
        })

        // 查看我的收藏
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
        .then( response => response.json())
        .then( json => {
            this.setState({
                usercomments: json
            })
        })
    }

    render (){
        
        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers : {
                "Access-Control-Allow-Origin": "*"
            },
            listType : "picture-card",
            defaultFileList: [
                {
					uid: -1,
					name: 'xxx.png',
					state: 'done',
					url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
					thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
				}
            ],
            onPreview: (file) => {
				this.setState({previewImage: file.url, previewVisible: true});
			}
        }

        const { usercollection, usercomments } = this.state;
        const usercollectionList = usercollection.length 
            ?
            usercollection.map( (commentItem, index)=>{
                return (
                    <Card key={index} title={`于 ${commentItem.Id.Timestamp} 评论了 ${commentItem.uniquekey} `} extra={<a href={`/#/details/${commentItem.uniquekey}`}>查看</a>}>
                        <p>{commentItem.Comments}</p>
                    </Card>
                )
            })
            : '没有加载到评论列表！' ;

        const usercommentsList = usercomments.length
            ? 
            usercomments.map( (collectionItem, index)=> {
                return (
                    <Card key={index} title={`${collectionItem.uniquekey}`} extra={<a href={`/#/details/${collectionItem.uniquekey}`}>查看</a>}>
                        <p>{collectionItem.Title}</p>
                    </Card>
                )
            })
            : '没有加载到收藏列表！'

        return (
            <div>
                <PCIndexComponent></PCIndexComponent>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="我的收藏列表" key="1">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>{usercommentsList}</Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>{usercollectionList}</Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        {/* <Button><Icon type="upload" /> Click to Upload</Button> */}
                                        <Icon type="plus"/>
										<div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <Modal visible ={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                                        <img alt="预览" src={this.state.previewImage} />
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PcFooterComponent></PcFooterComponent>
            </div>
        )
    }
}