import React from 'react';
import { NavBar,Icon } from 'antd-mobile';

export default class My extends React.Component {
    render(){
        return(
            <NavBar
                style={{background:"#3fcccb",color:"#ffffff"}}
                rightContent={[
                    <div className="iconfont icon-set"></div>
                ]}
            >我的</NavBar>
            
        )
    }
}