import React, {Component} from 'react';
import {Link} from 'react-router';
import './topNav.scss';
//es6语法
class TopNav extends Component {
    componentDidMount() {
        console.info("topNav");
    };
    render() {
        return (
            <div className="top">
                <nav className="topnav cf">
                    <ul className="topnav-fastlink">
                        <li>首页</li>
                        <li><Link to="/hello/King">跳转至hello组件</Link></li>
                        <li>帮助中心</li>
                        <li>关于我们</li>
                    </ul>
                    <ul className="topnav-user">
                        <li>登录</li>
                        <li>注册</li>
                    </ul>
                </nav>
                <header className="header">
                    
                </header>
            </div>
        );
    }
}
module.exports = TopNav;