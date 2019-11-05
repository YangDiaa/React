import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Title extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }  
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        let tab = this.props.match.params.tab;
        console.log(page,tab);
        fetch('https://cnodejs.org/api/v1/topics?tab='+tab+'&&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            let tab = this.props.match.params.tab;
            console.log(page,tab);
            fetch('https://cnodejs.org/api/v1/topics?tab='+tab+'&&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    
    render(){
        return (
            <div>    
                {
                    this.state.data.map((item)=>(
                        <div className="cell" key={item.page}>  
                            <img src={item.author.avatar_url}/>
                            <p>{item.reply_count}/
                                <span>{item.visit_count}</span>
                            </p>
                            <Link to={`/detail/${item.id}`}>{item.title}</Link>
                            <div className="p1">
                                <img src="https://avatars1.githubusercontent.com/u/21155906?v=4&s=120"/>
                                <p>2天前</p>
                            </div>
                        </div>
                    ))
                } 
            </div>
        )
    }
}
