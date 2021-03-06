'use strict';

//引入相关的包
import React,{Component} from 'react';
import ReactDom from 'react-dom';
//路由配置
import { Router, Route, hashHistory } from 'react-router';
import {HashRouter} from 'react-router-dom';
console.log(HashRouter);

//全局环境变量
import config from './config';

//normalize.css clearfix
import "clearfix.css";
import "normalize.css";
//载入样式
import "./index.scss";

//载入路由各页面组件
import Catalog from "../components/catalog/catalog";
import HelloWorld from "../components/helloWorld/helloWorld";

ReactDom.render((
    <Router>
        <Route path="/" component={Catalog}/>
        <Route path="/hello/:name" component={HelloWorld}/>
    </Router>
), document.getElementById('app'));
