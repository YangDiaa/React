import React from 'react';
import { NavBar,Carousel,Grid,SearchBar } from 'antd-mobile';

const data1 = [
    { 
        icon:'iconfont icon-zhuozi',
        text:'桌',
        color:'#fc4c82'
    },
    { 
        icon:'iconfont icon-bed',
        text:'床',
        color:'#35c5fe'
    },
    { 
        icon:'iconfont icon-chair',
        text:'椅',
        color:'#fda635'
    },
    { 
        icon:'iconfont icon-chaji',
        text:'几',
        color:'#69cdcc'
    },
    { 
        icon:'iconfont icon-iconset0499',
        text:'柜',
        color:'#fe4341'
    },
    { 
        icon:'iconfont icon--shujia',
        text:'书架',
        color:'#4040f7'
    },
    { 
        icon:'iconfont icon-tubiaoCSban-',
        text:'沙发',
        color:'#ab15ff'
    },
    { 
        icon:'iconfont icon-shipin',
        text:'家居饰品',
        color:'#57de92'
    },
    { 
        icon:'iconfont icon-BeachUmbrella',
        text:'户外家具',
        color:'#8d85c1'
    },
    { 
        icon:'iconfont icon-fenlei',
        text:'全部分类',
        color:'#7e7c83'
    }
];

const data2 = [
    { 
        icon:'/images/store1.png',
        text:'Top Art Studio 欧式风格精细...',
        price:'￥39.95'
    },
    { 
        icon:'/images/store2.png',
        text:'顺顺工艺欧式风格塑料外框黑...',
        price:'￥83.99'
    }
];

export default class Store extends React.Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2','3','4'],
            });
        }, 100);
    }
    render(){
        return(
            <div style={{position:'relative'}}>
                <NavBar 
                    style={{background:"#3fcccb",color:"#ffffff"}}
                    rightContent={<div className="iconfont icon-Shoppingcartfinancebusiness"></div>}
                >商城
                </NavBar>
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
                                src={'/images/store.png'}
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
                <div style={{width:'100%',height:'5%',position:'absolute',top:'5%',background:'black',opacity:'0.7',fontSize:20}}>
                    <div className='iconfont icon-menu' style={{width:'6%',height:'70%',float:'left',marginTop:'2%',marginLeft:'4%',color:'white'}}></div>
                    <SearchBar 
                        style={{width:'87%',height:'70%',position:'absolute',top:'11%',left:'10%',background:'#f5e9e2' }}
                        placeholder="输入关键字搜索" 
                        maxLength={8} 
                    />    
                </div>
                <Grid data={data1}
                    columnNum={5}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{ width:'100%',height:'100%'}}>
                            <div style={{ background: dataItem.color, width: '60%', height: '80%' , borderRadius:'50%',margin:'0 auto',color:'white',position:'relative'}}>
                                <div className={dataItem.icon} style={{position:'absolute',top:'35%',left:'39%'}}></div>
                            </div>
                            <div style={{ color: '#2f2f2f', fontSize: 20 }}>
                                {dataItem.text}
                            </div>
                        </div>
                    )}
                />  
                <Grid data={data2}
                    itemStyle={{background:'#eeeeee'}}
                    columnNum={2}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{ width:'100%',height:'100%',padding: '10px' }}>
                            <img src={dataItem.icon} style={{ width: '100%', height: '80%' }} alt="" />
                            <div style={{fontSize: 20,float:'left',height:'20%'}}>
                                <p style={{ color: '#686868',height:'5%',marginTop:'2%'}}>{dataItem.text}</p>
                                <p style={{ color: 'black',float: 'left',height:'5%',marginTop:'1%' }}>{dataItem.price}</p>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}