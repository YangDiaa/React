import React, { Component } from 'react';
import './Home.css';

export default class Detail extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }   
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let id = this.props.match.params.id;
            console.log(id);
            fetch('https://cnodejs.org/api/v1/topic/'+id)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}>
            </div>
        )
    }
}


