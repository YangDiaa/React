import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Linggan from './Linggan';
import Store from './Store';
import My from './My';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#686868"
          tintColor="#4acfce"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-home'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }} 
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-deng-'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-deng-'></i>
            }
            title="灵感"
            key="Linggan"
            selected={this.state.selectedTab === 'linggan'}
            onPress={() => {
              this.setState({
                selectedTab: 'linggan',
              });
            }}
          >
            <Linggan/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-store_icon'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-store_icon'></i>
            }
            title="商城"
            key="Store"
            selected={this.state.selectedTab === 'store'}
            onPress={() => {
              this.setState({
                selectedTab: 'store',
              });
            }}
          >
            <Store/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>
            }
            selectedIcon={
              <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>
            }
            title="我的"
            key="My"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}