import React from 'react';
import { NavBar,Icon,Tabs,Grid } from 'antd-mobile';

const tabs = [
    { title: "推荐" },
    { title: "冬季" },
    { title: "宜家" },
    { title: "小清新" },
    { title: "小户型" },
    { title: "个性色彩" },
    { title: "+"}
];

const data1 = [
    { 
        icon:'./images/灵感1.png',
        person:'./images/p1.png',
        text:'橙色律动'
    },
    { 
        icon:'./images/灵感2.png',
        person:'./images/p2.png',
        text:'儿童房'
    },
    { 
        icon:'./images/灵感3.png',
        person:'./images/p3.png',
        text:'翻滚吧，地毯君'
    },
    { 
        icon:'./images/灵感4.png',
        person:'./images/p4.png',
        text:'角落里的遐想'
    },
    { 
        icon:'./images/灵感5.png',
    },
    { 
        icon:'./images/灵感6.png',
    }
];
  
export default class Linggan extends React.Component {
    render(){
        return(
            <div>
                <NavBar
                    style={{background:"#3fcccb",color:"#ffffff"}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarActiveTextColor={'#3fcccb'}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{width:'100%',height:'100%',background:'red'}}>
                        <Grid data={data1}
                            itemStyle={{background: '#eeeeee'}}
                            columnNum={2}
                            hasLine={false}
                            renderItem={dataItem => (
                                <div style={{ width:'100%',height:'100%',padding:'10px' }}>
                                    <img src={dataItem.icon} style={{ width: '100%', height: '90%' }} alt="" />
                                    <div style={{ fontSize: 20,width: '100%',background:'white' }}>
                                        <img src={dataItem.person} style={{ width: '16%', height: '16%',float:'left' }} alt="" />
                                        <span style={{ width: '70%', float:'left',color:'#8e8e8e',lineHeight:'30px' }}>{dataItem.text}</span>
                                        <span style={{ width: '14%', color:'red',float:'right' }} className="iconfont icon-Love"></span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div style={{ height: '150px'}}>
                        冬季
                    </div>
                    <div style={{ height: '150px'}}>
                        宜家
                    </div>
                    <div style={{ height: '150px'}}>
                        小清新
                    </div>
                    <div style={{ height: '150px'}}>
                        小户型
                    </div>
                    <div style={{ height: '150px'}}>
                        个性色彩
                    </div>
                    <div style={{ height: '150px'}}>
                        +
                    </div>
                </Tabs>
            </div>
        )
    }
}