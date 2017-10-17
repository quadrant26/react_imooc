import React from 'react';
import ReactDom from 'react-dom';

// 导入header && footer 模块
import PcHeaderComponent from './pc-header';
import PcFooterComponent from './pc-footer';
import PcNewContainComponent from './pc_newscontainer'

export default class PCIndexComponent extends React.Component{
    render(){
        return (
            <div>
                <PcHeaderComponent/>
                <PcNewContainComponent></PcNewContainComponent>
                <PcFooterComponent/>
            </div>
        )
    }
}