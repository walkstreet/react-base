import React, {Component} from 'react';
import './formWin.scss';
class FormWin extends Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        console.log(this.props.name);
    };
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}
module.exports = FormWin;