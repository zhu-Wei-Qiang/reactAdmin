import React, { Component } from 'react'
import './login.less'
import logo from './images/logo.jpg'

/**
 * 登陆的路由组件
 */
export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-section'></section>
            </div>
        )
    }
}
