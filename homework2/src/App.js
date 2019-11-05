import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Header from './components/Header';
import Right from './components/Right';
import Foot from './components/Foot';
import Start from './components/Start';
import API from './components/API';
import About from './components/About';
import Sign from './components/Sign';
import Home from './container/Home';
import Login from './container/Login';
import Detail from './container/Detail';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                        <Redirect to='/home/all/1'/>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={API}/>
                        <Route path='/about' component={About}/>
                        <Route path='/sign' component={Sign}/>
                        <Route path='/login' component={Login}/>
                        <Route path={'/detail/:id'} component={Detail}/>
                    </div>
                    <div className="right">
                        <Right/>
                    </div>
                </div>
                <div>
                    <Foot/>
                </div>
            </Router>
        )
    }
}

