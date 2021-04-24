import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils.js'
import LeftNav from '../../components/LeftNav'
import Header from '../../components/Header'


const { Footer, Sider, Content } = Layout;


/**
 * 后台管理的路由组件
 */
export default class Admin extends Component {
    render() {
        console.log('admin',memoryUtils)
        const user = memoryUtils.user; 
        if(!user || !user._id){
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{backgroundColor: 'white'}}>Content</Content>
                    <Footer style={{textAlign:'center',color:"#ccc"}}>推荐使用谷歌浏览器，可以获得更佳的操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
