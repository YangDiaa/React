import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Title from './Title';
import './Home.css'

export default class Content extends Component{
    render(){
        let {url} = this.props.match;
		return(
			<div>
                <div className="title">
                    <Route path={'/home/:tab/:page'} component={Title} />
                </div>
                <div className="but">
                    {
                        ['«',1,2,3,4,5,6,7,8,9,10,'···','»'].map((item)=>(
                            <li key={item}>
                                <Link to={`${url}/`+item}>{item}</Link>
                            </li>
                        ))
                    }
                </div>  
			</div>
		);
	}
}
