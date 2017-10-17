import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCNewsImageBlock from './pc_news_image_block';

import PcHeaderComponent from './pc-header';
import PcFooterComponent from './pc-footer';
import CommonCommentComponent from './common_comments';

export default class PcNewsDetailComponent extends React.Component{

    constructor (){
        super();
        this.state = {
            newsItem : ''
        }
    }

    componentDidMount (){
        var myFetchOptions = {
            method : "GET"
        }

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
        .then(response => response.json())
        .then(json => {
            
            this.setState({
                newsItem : json
            });
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    }

    createMarkup (){
        return {__html : this.state.newsItem.pagecontent};
    }
    
    render (){
        const { newsItem } = this.state;
        return (
            <div>
                <PcHeaderComponent></PcHeaderComponent>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <CommonCommentComponent uniquekey={this.props.params.uniquekey}></CommonCommentComponent>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={30} type="top" cardTitle="相关新闻" imageWidth="150px"></PCNewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PcFooterComponent></PcFooterComponent>
            </div>
        )
    }
}