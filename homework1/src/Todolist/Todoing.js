import React, { Component } from 'react'

export default class Todoing extends Component {

    render() {
        var {todo,done} = this.props;
        return (
            <div>
                <h3>正在进行<span className="amount">{todo.length}</span></h3>
                <ul>
                    {
                        todo.map((item,idx)=>
                            <li key={idx}>
                                <input type="checkbox" className="choice" onClick={()=>this.props.finish(idx)}/>
                                {item}<button onClick={()=>this.props.del(idx)}>删除</button>
                            </li>)
                    }
                </ul>
                <h3>已经完成<span className="amount">{done.length}</span></h3>
                <ul>
                    {
                        done.map((item,idx)=>
                            <li key={idx}>
                                <input type="checkbox" className="choice" onClick={()=>this.props.doing(idx)}/>
                                {item}<button onClick={()=>this.props.del(idx)}>删除</button>
                            </li>)
                    }
                </ul>
            </div>
        )
    }
    
}
