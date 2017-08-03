import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.scss';

import FormWin from '../formWin/formWin';

//es6语法
class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.params.name
        };
    };
    componentDidMount() {
        console.log(this.state.name);
    };
    render() {
        return (
            <div className="text">
                <Link to="/hello/Linda">To Linda</Link>
                <FormWin name={this.state.name}></FormWin>
                <h2>new World!</h2>
            </div>
        );
    }
}
module.exports = HelloWorld;