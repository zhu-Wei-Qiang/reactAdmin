import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { Redirect } from 'react-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin} from '../../api'
import {fangdou} from '../../utils/tools'
import './login.less'
import logo from '../../assets/images/logo.png'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

const Item = Form.Item;

/**
 * 登陆的路由组件
 */
export default class Login extends Component {
    state = {
        timer : null
    };
    onFinish = fangdou(async (event) => {
        // reqLogin(event).then(res=>{
        //     console.log('成功了',res)
        // }).catch(error=>{
        //     console.log('失败了',error)
        // })
        console.log(1)
        const result = await reqLogin(event);
        if(result.status){
            message.success('登录成功',0.5)
            const user = {
                _id: '001',
                name:'朱某'
            };
            memoryUtils.user = user;  //保存到内存中
            storageUtils.saveUser(user) // 保存到local中
            // 跳转到管理页面  登陆页面只进一次 不回退
            this.props.history.replace('/')
        }else{
            message.warning(result.msg)
        }
        console.log(2)
    },200);
 

    render() {
        if(memoryUtils.user._id){
            return <Redirect to='/'/> 
        }
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-section'>
                    <h2>用户登录</h2>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFieldsChange={this.onFieldsChange}
                            >
                            <Item
                                name="username"
                                rules={
                                    [
                                        { required: true, whitespace: true, message: '用户名不能为空' },
                                        { min: 4, message: '用户名至少4位' },
                                        { max: 12, message: '用户名最多12位' },
                                        
                                    ]
                                }
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Item>
                            <Item
                                name="password"
                                rules={
                                    [
                                        { required: true, whitespace:true, message: '密码不能为空' },
                                        { min: 4, message: '密码至少4位' },
                                        { max: 12, message: '密码最多12位' },
                                        { pattern:/^[a-zA-Z0-9_]+$/, message: '密码必须是英文、数字或下划线组成' }
                                    ]
                                }
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                            </Item>

                            <Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}
