import React, { Component } from 'react'

export default class Todoinput extends Component {
    
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            e.target.value = ''; 
        }
    }
    
    render() {
        return (
            <div className="top">
                <h2>Todolist
                    <input onKeyDown={this.handleInput} type="text" placeholder="添加ToDo"/>
                </h2>
            </div>
        )
    }
}