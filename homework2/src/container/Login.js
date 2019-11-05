import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

export default class Login extends Component{
    render(){
		return(
			<div>
				<div className="logintop">
					<Link to='/home/all/1'>主页</Link><span>/&nbsp;&nbsp;&nbsp;登录</span>
				</div>
				<div className="loginbottom">
					<div className="form">
						<span>用户名</span><input type="text"/>
						<br/>
						<span>&nbsp;&nbsp;&nbsp;密码</span><input type="password"/>
					</div>
					<div className="loginbutton">
						<Link to='/home/all/1'>
							<button className="button1">登录</button>
						</Link>
						<a href="#">忘记密码了？</a>
					</div>
				</div> 
			</div>
		);
	}
}