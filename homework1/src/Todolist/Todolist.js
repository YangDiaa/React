import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './todo.css'

var storage = window.localStorage;
var arr= [];
var brr = [];
for(var i = 0; i<storage.length;i++){
    var key = storage.key(i);
    var value = storage.getItem(key);
    if(key.indexOf(true) != -1){
        arr.push(value);
    }
    else{
        brr.push(value);
    }
}

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: arr,
            done: brr
        }
    }

    addItem = (data)=>{
        this.setState((state)=>{
            let todo = [...state.todo,data];
            for(var i = 0;i<todo.length;i++){
                localStorage.setItem("true"+i,todo[i]);
            }
            return {
                todo:todo
            }
        })
    }

    delItem = (idx)=>{
        this.setState((state)=>{
            let todo = [...state.todo];
            todo.splice(idx,1);
            let done = [...state.done];
            done.splice(idx,1);
            localStorage.clear();
            for(var i = 0;i<todo.length;i++){
                localStorage.setItem("true"+i,todo[i]);
            }
            for(var i = 0;i<done.length;i++){
                localStorage.setItem("false"+i,done[i]);
            }
            return {
                todo: todo,
                done: done
            }
        })
    } 

    finishItem = (idx)=>{
        this.setState((state)=>{
            let todo = [...state.todo];
            var i = todo[idx];
            let done = [...state.done,i];
            todo.splice(idx,1);
            localStorage.clear();
            for(var i = 0;i<todo.length;i++){
                localStorage.setItem("true"+i,todo[i]);
            }
            for(var i = 0;i<done.length;i++){
                localStorage.setItem("false"+i,done[i]);
            }
            return {
                todo: todo,
                done: done
            }
        })
    }

    doingItem = (idx)=>{
        this.setState((state)=>{
            let done = [...state.done];
            var i = done[idx];
            let todo = [...state.todo,i];
            done.splice(idx,1);
            localStorage.clear();
            for(var i = 0;i<todo.length;i++){
                localStorage.setItem("true"+i,todo[i]);
            }
            for(var i = 0;i<done.length;i++){
                localStorage.setItem("false"+i,done[i]);
            }
            return {
                todo: todo,
                done: done
            }
        })
    }
    
    render() {
        return (
            <div className="all">
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} finish={this.finishItem} doing={this.doingItem} todo={this.state.todo} done={this.state.done}/>
            </div>
        )
    }
    
}