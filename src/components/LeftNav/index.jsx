import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {
    HomeOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
    ToolOutlined,
    UserOutlined,
    SafetyOutlined,
    AreaChartOutlined,
    PieChartOutlined,
    LineChartOutlined,
    BarChartOutlined
  } from '@ant-design/icons';
import './index.less'
import logo from '../../assets/images/logo.png'

const {Item,SubMenu} = Menu;

export default class LeftNav extends Component {
    state = {
        openKeys : [],
        rootSubmenuKeys : ['sub1', 'sub2']
    }
    onOpenChange =  keys => {
        const latestOpenKey = keys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({openKeys:keys})
        } else {
          this.setState({openKeys:latestOpenKey ? [latestOpenKey] : []})
        }
      };
    render() {
        return (
            <div className='left-nav'>
                <Link to='/' className='nav-header'>
                    <img src={logo} alt=""/>
                    <h2>电商后台</h2>
                </Link>
                <div>
                    <Menu
                        openKeys={this.state.openKeys} 
                        onOpenChange={this.onOpenChange}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                        >
                        <Item key="1" icon={<HomeOutlined />}>
                            首页
                        </Item>
                        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">
                            <Item key="2" icon={<UnorderedListOutlined />}>品类管理</Item>
                            <Item key="3" icon={<ToolOutlined />}>商品管理</Item>
                        </SubMenu>
                        <Item key="4" icon={<UserOutlined />}>
                            用户管理
                        </Item>
                        <Item key="5" icon={<SafetyOutlined />}>
                            角色管理
                        </Item>
                        <SubMenu key="sub2" icon={<AreaChartOutlined />} title="图形图表">
                            <Item key="6" icon={<BarChartOutlined />}>柱状图</Item>
                            <Item key="7" icon={<LineChartOutlined />}>折线图</Item>
                            <Item key="8" icon={<PieChartOutlined />}>饼状图</Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
