import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Content from './Content';
import './Home.css';

export default class Home extends Component{
    render(){
        let {url} = this.props.match;
        return (
            <div>
                <div className="top">
                    <Link to={`${url}/all/1`}>全部</Link>
                    <Link to={`${url}/good/1`}>精华</Link>
                    <Link to={`${url}/share/1`}>分享</Link>
                    <Link to={`${url}/ask/1`}>问答</Link>
                    <Link to={`${url}/job/1`}>招聘</Link>
                    <Link to={`${url}/dev`}>客户端测试</Link>    
                </div>
                <div>
                    <Route path={url+'/all'} component={Content}/>
                    <Route path={url+'/good'} component={Content}/>
                    <Route path={url+'/share'} component={Content}/> 
                    <Route path={url+'/ask'} component={Content} />
                    <Route path={url+'/job'} component={Content}/>
                </div>
            </div>        
        );
    }
    
}

    

    
    