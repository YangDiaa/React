import React, { Component } from 'react'
import {NavBar,Carousel,Grid,Card} from 'antd-mobile';

const data1 = [
    {
        icon: '/images/home3.png',
        text: '热门品牌'
    },
    {
        icon: '/images/home4.png',
        text: '私人搭配师'
    },
    {
        icon: '/images/home5.png',
        text: '选购指南'
    }
];

export default class Home extends Component {
    state = {
        data: ['1', '2'],
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2'],
            });
        }, 100);
    }
    render(){
        return(
            <div>
                <NavBar style={{background:"#3fcccb",color:"#ffffff"}}>住吧家居</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a  key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: '100%' }}
                        >
                            <img
                                src={'/images/home'+val+'.png'}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel> 
                <Grid 
                    itemStyle={{background: '#eeeeee'}}
                    data={data1} 
                    columnNum={3}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{ position:'relative',padding:'5%', width:'100%',height:'100%' }}>
                            <img src={dataItem.icon} style={{ width:'100%',height:'100%'}} alt="" />
                            <div style={{ color: '#ffffff', fontSize: 20, position:'absolute',top: '40%',left:'30%' }}>
                                {dataItem.text}
                            </div>
                        </div>
                    )}
                />   
                <Card style={{position:'relative',width:'100%',height:'100%'}}>
                    <Card.Header
                        title="&nbsp;&nbsp;&nbsp;热门推荐"
                        thumb={<div style={{width:'5px',height:'20px',background:'#3fcccb'}}></div>}
                    />
                    <Card.Body>
                        <img src='/images/tuijian.png' style={{width:'100%'}}/>
                    </Card.Body>
                    <Card.Footer 
                        content="什么是英伦装修风格 英伦风家装 英伦风格装修效果图" 
                        style={{color:'white',fontSize: 20,position:'absolute',top:'85%'}} 
                    />
                </Card>
            </div>
        )
    }
}